# Elite Image Long Island Mobile Auto Spa

A custom responsive, dependency-free website for Elite Image in Coram, NY. Built around its verified amber branding, genuine business photography, direct calling and a working text-message inquiry flow.

## Run

- `npm run dev`: local preview on port 3000.
- `npm test`: static content, asset, metadata and interaction checks.
- `npm run build`: produces the deployable static `dist/` folder.

No package installation, API keys, database or paid services are needed. Deploy the contents of `dist/` to any static host. The source root also runs directly on a static host.

## What the contact form does

The form prepares an SMS addressed to 631-353-9053 with the visitor's name, town, vehicle and inquiry. It opens their messaging app; the visitor reviews and sends it themselves. A visible copy fallback is provided for desktops or devices without an SMS handler. No data is submitted to a server. Requests are not bookings, and the site does not claim live availability or prices.

## SEO and launch

Includes a unique page title, description, Open Graph metadata, semantic headings, local AutomotiveBusiness JSON-LD, linked verified social profiles, robots.txt, descriptive image text and responsive layouts. No fabricated address, opening hours, aggregate ratings, pricing, canonical domain or booking integration is included.

Once a public domain has been chosen, build with `SITE_URL=https://your-real-domain.example npm run build` to generate the canonical URL, social image URL and sitemap using that actual domain. Verify the domain and robots.txt after hosting. The repository push does not deploy or connect a domain.

## Sources and media

Business identity, phone, contact name Rob, social accounts and service categories were verified against https://allmylinks.com/eliteimagelongisland and https://www.instagram.com/eliteimagelongisland/ on November 8, 2026. The supplied Instagram screenshot corroborated identity. Google listing: https://www.google.com/maps?cid=6551920035076736677 .

Photography came from that Google business listing. The logo came from the official link hub. `photo-provenance.json` records exact original asset URLs and the optimized derivatives. The review excerpt is attributed to Micheal Cash as displayed by Google. Listing presence does not establish copyright ownership or permission to republish: the business owner should confirm photo and logo reuse rights before public commercial launch. These are authentic retrieved assets, not AI-generated or stock photos. No photo appears twice on the page.

Typography uses Google Fonts with local system fallbacks. No analytics, trackers, user accounts or cookies are added by the site. Google Fonts and outbound platforms have their own privacy practices.

## Verification

`npm test` covers local file references, unique image usage, page structure and metadata, JSON-LD, anchor targets, mobile menu state, inquiry composition, iOS/Android SMS link syntax and clipboard fallback entry points. Browser review covers the rendered desktop page and contact controls. A real SMS is never sent in testing. Device messaging behavior and real booking confirmation remain the business/customer's responsibility.
