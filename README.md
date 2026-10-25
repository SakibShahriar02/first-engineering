# First Engineering — React conversion

A faithful Vite + React + TypeScript conversion of the original single-page
HTML site for First Engineering Architecture & Interior Solutions, Dhaka.
No layout change was made: the original CSS, fonts, text, images, sections
and interactions were carried over as-is.

## Run

```bash
npm install
npm run dev
```

The dev server is normally at http://localhost:5173.

## Build

```bash
npm run build
```

This produces a `dist/` folder that can be deployed to any static host
(Netlify, Vercel, GitHub Pages, or similar).

## Routes

- `/` — First Engineering home landing page
- `/alpha` — Alpha Interior & Furniture page (marked as a draft for review)
- Any other path — a simple not-found page with a link back home

Section links (About, Services, Spaces, Process, FAQ, Contact) work from
both pages: from home they scroll to the section, from Alpha they go to
`/#<section-id>` and then scroll to it.

## Structure

```
src/
  App.tsx                 Thin router shell only (BrowserRouter, ScrollToTop, Routes)
  main.tsx                Entry point; imports src/styles/main.css once
  data/site.ts            Content data: contact, services, gallery, process,
                          Alpha ideas/spaces/process (verbatim wording)
  components/
    Layout.tsx            Shared Header + main + Footer
    Header.tsx            Site header and mobile menu (React Router links)
    Footer.tsx            Site footer
    ScrollToTop.tsx       Scrolls to top on route change, or to a #hash target
    sections/             One component per home/Alpha section, in page order
  pages/
    HomePage.tsx          Home page, composed from section components
    AlphaPage.tsx         Alpha draft page, composed from Alpha sections
    NotFound.tsx          Not-found page
  styles/main.css         Original CSS, unchanged — do not edit its rules
public/
  images/                 12 gallery images, unchanged
  _redirects              Netlify SPA fallback (/* /index.html 200)
```

## Notes

- Layout and content were preserved from the original HTML conversion:
  the same fonts, palette, class names, section order, text, images and
  interactions. This refactor only changed the code structure to real
  routing plus pages/components, in the style of a standard Vite + React
  project (router shell, shared layout, thin pages, section components).
- No canonical URL is set in `index.html`, because no deployment domain
  has been chosen for this React build yet. Add one once a domain is set.
- `public/_redirects` makes deep links such as `/alpha` work on Netlify.
  It does not work on plain GitHub Pages, which would need a different
  SPA fallback (for example a `404.html` copy of `index.html`).
- No Tailwind/shadcn migration was made, to avoid changing the layout.
- There is no admin system or login in this project.

## Notes

- Gallery images are in `public/images/` (decoded from the original page's
  embedded images, in their original order and formats).
- The consultation form opens a ready-to-send email (mailto) — nothing is
  sent automatically, exactly as in the original page.
- There is no admin system or login in this project.
