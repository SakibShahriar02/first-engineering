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
(Netlify, Vercel, GitHub Pages, or similar). No server rewrites are needed.

## Notes

- Gallery images are in `public/images/` (decoded from the original page's
  embedded images, in their original order and formats).
- The consultation form opens a ready-to-send email (mailto) — nothing is
  sent automatically, exactly as in the original page.
- There is no admin system or login in this project.
