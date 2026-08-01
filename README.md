# Nursery 3 — "Ashgrove House"

A one-page, high-conversion landing page template for a day nursery / pre-school.
Classical treatment: serif display type, warm paper, heritage green, brass detail.

Everything on the page is **fictional placeholder content** for preview purposes.
Swap it when a client is secured.

**Stack:** plain HTML, CSS and vanilla JS. No build step, no dependencies, no
framework. Open `index.html` and it works.

```
index.html      one page, all sections
styles.css      all styling; brand tokens at the top of :root
app.js          mobile menu + enquiry form only
assets/
  favicon.svg
  img/          7 stock photographs
```

---

## Swapping in a real client

### 1. Brand colours and type — `styles.css`

Everything brand-specific is in `:root` at the top of the file. Change these and
the whole page re-skins; nothing else references a colour directly.

| Token | Now | What it drives |
| --- | --- | --- |
| `--ink` | `#23201A` | Body text |
| `--ink-soft` | `#5B554B` | Secondary text, captions |
| `--paper` | `#F7F3EB` | Page background |
| `--paper-alt` | `#EFE9DD` | Alternating sections, input fills |
| `--green` | `#2C4034` | Primary buttons, dark band, footer |
| `--green-deep` | `#223328` | Primary button hover |
| `--brass` | `#96773F` | Eyebrows, ages, times, accents |
| `--display` | Cormorant Garamond | All headings |
| `--ui` | Jost | Everything else |

If you change the fonts, update the Google Fonts `<link>` in `index.html` too.

### 2. Copy and details — `index.html`

Search and replace, in this order:

| Find | Occurrences | Notes |
| --- | --- | --- |
| `Ashgrove House` | brand, footer, alt text | Nursery name |
| `Nursery & Pre-School` | header | Strapline under the name |
| `Farnham, Surrey` / `GU9 7PA` / `14 Downing Street` | hero, contact, footer | Address |
| `01252 496 118` | header, menu, contact, footer, `app.js` | Phone; also in `tel:+441252496118` |
| `hello@ashgrovehouse.co.uk` | contact, footer | Email |
| `Established 1994` / `1994–2026` | hero, footer | Founding year |
| `URN 000000` | footer | Real Ofsted URN |
| `https://example.com/` | `<link rel="canonical">` | Live domain |

Then replace, by hand:

- **Hero** — headline, the one-line description, and the three facts (`.hero-facts`).
- **Facts band** — the four `.stat` blocks. Keep them concrete and checkable.
- **What we do / don't** — three `.do-item`s and the `.dont` block. The "what we
  don't do" block is the highest-value part of the page: it is the one claim a
  competitor cannot copy. Get a real one from the client.
- **Rooms** — three `.room` cards: age range, room name, two sentences.
- **A day here** — the `.day` list. Six lines, real times.
- **Proof** — two quotes with real attributions, the review count, the Ofsted line.
- **Fees** — the `.fees` table and the funding note.
- **Visit** — the two staff first names and the visit description.

Everything marked `<!-- EDIT: ... -->` is a placeholder that must change.

### 3. Photographs — `assets/img/`

Replace all seven, keeping the filenames and rough aspect ratios:

| File | Used at | Shape |
| --- | --- | --- |
| `hero.jpg` | Hero | 4:5 portrait (3:2 on mobile) |
| `setting.jpg` | Our nursery | 3:2 |
| `room-babies.jpg` `room-toddlers.jpg` `room-preschool.jpg` | Rooms | 3:2 |
| `story-corner.jpg` | A day here | 3:2 |
| `garden.jpg` | Fees | 4:5 portrait |

Current images are from Unsplash and are placeholders. **Use the client's own
photographs of their own setting and children** — with written parental consent
on file. Update every `alt` attribute to describe the new photograph.

### 4. The enquiry form — `app.js`

The form validates in the browser and then does nothing; it shows a
"demonstration site" message. To take real enquiries, either:

- set `ENDPOINT` at the top of `app.js` to a form handler (Formspree, Basin, a
  Worker, whatever), or
- delete that block and put `action="..." method="post"` on the `<form>` in
  `index.html`.

Until one of those is done, **the form does not send anything.**

### 5. Before going live

- Set the canonical URL and the `og:image` to absolute URLs on the real domain.
- Add a privacy notice and cookie position (the page currently sets no cookies
  and loads no trackers — only Google Fonts).
- Confirm the Ofsted rating, URN, ratios, fees and funding wording with the
  client. Every one of those is a regulated claim.
- Replace the "Demonstration site" line in the footer.

---

## Design notes

Built to `docs/DESIGN-STANDARD.md` in this repo. Specifically:

- Left-aligned asymmetric hero carrying real information, not a centered
  headline floating in space.
- The page answers what / who / why-us / what-we-refuse / proof before the fold
  and immediately after it.
- Radii: 3px controls, 4px cards, 3px media. No pills.
- No status pills, no emoji, no decorative gradients, no left-accent bars, no
  vector illustration, no glassmorphism.
- No scroll-triggered entrance animation. The only motion is hover, focus and
  the menu toggle, all 180–200ms on `transform`/`opacity`/colour.
- No em-dashes in user-facing copy (repo `CLAUDE.md` rule).
- Claims are concrete and checkable: "1:3 under twos", "£82 full day",
  "November 2024", not "outstanding care" or "nurturing environment".

Accessibility: skip link, visible focus rings, labelled form fields, live region
on the form status, `aria-expanded` on the menu toggle, honours
`prefers-reduced-motion`, and a print stylesheet.
