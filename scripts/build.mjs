import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist', {recursive: true, force: true});
await mkdir('dist', {recursive: true});
for (const file of ['index.html', 'styles.css', 'script.js', 'robots.txt', 'assets']) await cp(file, `dist/${file}`, {recursive: true});
console.log('Built dependency-free static site in dist/');
if (process.env.SITE_URL) {
  const { readFile, writeFile } = await import('node:fs/promises');
  const site = new URL(process.env.SITE_URL);
  if (!['https:', 'http:'].includes(site.protocol)) throw new Error('SITE_URL must be an HTTP(S) URL');
  const base = site.href.replace(/\/$/, '') + '/';
  const escape = value => value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
  let html = await readFile('dist/index.html','utf8');
  html = html.replace('</head>', `<link rel="canonical" href="${escape(base)}"><meta property="og:url" content="${escape(base)}"><meta property="og:image" content="${escape(base)}assets/hero.webp"></head>`);
  await writeFile('dist/index.html',html);
  await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(base)}</loc></url></urlset>`);
  await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${base}sitemap.xml\n`);
  console.log(`Generated canonical URL and sitemap for ${base}`);
}
