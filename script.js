'use strict';
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu() { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); }
menuButton.addEventListener('click', () => { const opening = mobileNav.hidden; mobileNav.hidden = !opening; menuButton.setAttribute('aria-expanded', String(opening)); menuButton.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation'); });
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); } });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('inquiry-form');
const preparedMessage = document.getElementById('prepared-message');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const value = key => String(data.get(key) || '').trim();
  const message = `Hi Elite Image! I'm ${value('name')} in ${value('town')}. I have a ${value('vehicle')} and I'm interested in ${value('interest')}. ${value('notes') ? value('notes') + ' ' : ''}Could you let me know pricing and availability?`;
  preparedMessage.value = message;
  document.getElementById('message-result').hidden = false;
  document.getElementById('copy-status').textContent = '';
  const separator = /iPad|iPhone|iPod/.test(navigator.userAgent) ? '&' : '?';
  window.location.href = `sms:+16313539053${separator}body=${encodeURIComponent(message)}`;
});
document.getElementById('copy-message').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(preparedMessage.value); document.getElementById('copy-status').textContent = 'Copied. Paste into a text to 631-353-9053.'; }
  catch { preparedMessage.focus(); preparedMessage.select(); document.getElementById('copy-status').textContent = 'Select and copy the message above, then text 631-353-9053.'; }
});
