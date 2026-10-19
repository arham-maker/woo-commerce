# Mobile responsiveness audit

Date: 2026-10-20

## Changes

- Portfolio: added seven optimized WebP posters extracted from the actual project videos. Previews no longer depend on hover, video decoding, or autoplay. Removed references to nonexistent MP4 files, reserved the media aspect ratio, and added native playback controls.
- Portfolio rows: larger cards on phones, swipe snapping, contained horizontal scrolling, and keyboard-accessible gallery regions.
- Landing page: stacked the logo and contact links on phones and bounded the logo width at larger breakpoints.
- Shared layouts: allowed containers and animation wrappers to shrink; enabled long text wrapping; expanded service CTA text to the available width when its illustration is hidden.
- Entrance animations: removed initial horizontal displacement on phones, preventing clipped hero text and transient overflow. Shared section animations honor reduced-motion settings.
- Forms: mobile inputs use at least 16px text to avoid focus zoom in iOS browsers.
- Live chat: a compact 48px button replaces the oversized native launcher on phones. Automatic opening and reopening are limited to desktop-sized viewports. The mobile button and existing chat links still open the same widget. This follows Zendesk's [custom launcher pattern](https://developer.zendesk.com/documentation/classic-web-widget-sdks/web-widget/quickstart-tutorials/creating-a-launcher-for-the-web-widget/).

## Verification

- Checked all 49 public routes, including all 24 package detail URLs, at 320px. No document-level horizontal overflow was detected.
- Checked the home, landing, and logo design layouts at 390px, 768px, and 1440px.
- Confirmed all 166 image/video paths in the shared asset constants exist; all seven poster URLs return successful responses.
- Verified portfolio posters visually in the production preview and confirmed gallery scrolling and native video controls.
- Verified the mobile navigation opens at 270px wide and the inquiry dialog fits at 288px wide, with no internal horizontal overflow, on a 320px viewport.
- Production build and TypeScript passed. The repository-wide lint check has existing React effect errors in the header, payment view, animation hook, and hero carousel, plus existing unused-variable warnings. The other changed components and audit script pass their focused lint check.

These are Chromium viewport checks, not physical-device Safari tests. Form submission and payment processing were not exercised. The payment URL currently redirects to the thank-you page; its redirect destination was checked.

## Verified mobile screens

| Step | Screen | Result | Evidence |
| --- | --- | --- | --- |
| 1 | Landing page | Header and hero fit; compact chat launcher | [Screenshot](mobile-audit/01-landing.png) |
| 2 | Portfolio | Project posters visible; cards swipe within their rows | [Screenshot](mobile-audit/02-portfolio.png) |
| 3 | Navigation | Menu fits and links remain unobstructed | [Screenshot](mobile-audit/03-menu.png) |
| 4 | Inquiry form | Dialog fits without horizontal scrolling or chat obstruction | [Screenshot](mobile-audit/04-inquiry.png) |

## Repeating the browser checks

Start a Chromium browser with remote debugging on port 9223. Run the local preview, then:

```powershell
$env:AUDIT_URL = 'http://127.0.0.1:3000'
$env:AUDIT_WIDTHS = '320,390,768,1440'
node scripts/mobile-audit.mjs
node scripts/mobile-audit.mjs --interactions
```

`AUDIT_PATHS` optionally limits checks to comma-separated routes. Results and screenshots are saved under `.next/mobile-audit/`. The `--posters` mode regenerates project preview images from the local videos.
