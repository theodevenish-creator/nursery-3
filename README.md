# Nursery template 3 — "Ashgrove House"

A one-page landing template for a day nursery. Classical treatment: serif
display type, warm paper, heritage green, brass detail. Copy is deliberately
short.

All content is **fictional placeholder data**. Swap it when a client is secured.

**Stack:** plain HTML, CSS, vanilla JS. No build step, no dependencies.

```
index.html    one page
styles.css    all styling; brand tokens at the top of :root
app.js        mobile menu + form only
assets/img/   7 photographs
```

## Layout

Everything sits on three shared grids, all centred:

| Class | Wide | Steps down to |
| --- | --- | --- |
| `.grid-4` | 4 across | 2 at ≤1000px, 1 at ≤600px |
| `.grid-3` | 3 across | 1 at ≤900px |
| `.grid-2` | 2 across | 1 at ≤760px |

A 3-up never becomes 2+1, so no row is left with an orphan. Verified with no
horizontal overflow at 1920, 1440, 1180, 1000, 820, 414, 390 and 360px.

## Swapping in a client

**1. Brand — `styles.css`.** Change the seven colours and two fonts in `:root`.
Nothing else references a colour directly. If you change the fonts, update the
Google Fonts `<link>` in `index.html` too.

**2. Copy — `index.html`.** Find and replace:

| Find | Notes |
| --- | --- |
| `Ashgrove House` | Nursery name (header, footer, alt text) |
| `Nursery & Pre-School` | Strapline |
| `Farnham` / `GU9 7PA` / `14 Downing Street` | Address |
| `01632 960 118` | Phone; also in `tel:+441632960118` and `app.js` |
| `hello@ashgrovehouse.co.uk` | Email |
| `Est. 1994` / `2026` | Founding year, copyright |
| `https://theodevenish-creator.github.io/nursery-3/` | Canonical URL |

Then rewrite by hand: the hero line, the four `.stat`s, three `.tile`s, the
`.statement` refusal line, three room `.card`s, four `.day` times, two quotes
and the review count, three `.price`s.

Keep it short. Tiles and cards are one sentence each by design.

**3. Photographs — `assets/img/`.** Replace all seven, keeping the filenames:
`hero.jpg` (16:7 banner), `room-babies/-toddlers/-preschool.jpg` (3:2),
`setting.jpg` `story-corner.jpg` `garden.jpg` (4:3 gallery). Use the client's
own photographs, with written parental consent on file, and update every `alt`.

**4. Form — `app.js`.** It validates and then does nothing, showing a
"demonstration site" message. Set `ENDPOINT` to a form handler, or delete that
block and put `action="..." method="post"` on the `<form>`. **Until then it
sends nothing.**

**5. Before going live.** Absolute canonical and `og:image` URLs; a privacy
notice; remove the "Demonstration site" footer line; and confirm every
regulated claim with the client (Ofsted rating and URN, ratios, funded hours,
fees).

## Design notes

Built to `docs/DESIGN-STANDARD.md`. Radii 3px controls / 4px cards / 3px media.
No pills, status pills, emoji, decorative gradients, left-accent bars, vector
illustration or glassmorphism. No scroll-triggered entrance animation; motion
is hover, focus and the menu toggle only. No em-dashes in user-facing copy
(repo `CLAUDE.md` rule). Claims are concrete: "1:3 under twos", "£82".

Accessible: skip link, focus rings, labelled fields, live region on the form
status, `aria-expanded` menu toggle, honours `prefers-reduced-motion`.
