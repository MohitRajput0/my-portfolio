# Mohit Kumar — Portfolio

A premium, recruiter-focused developer portfolio built with React, Tailwind CSS,
and Framer Motion. All personal content lives in one file, so you can update
your info without touching any component.

## Running locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production / deployment:

```bash
npm run build
npm run preview   # preview the production build locally
```

Deploy the `dist/` folder to Vercel, Netlify, GitHub Pages, or any static host.

## Where to edit things

**Everything editable lives in `src/data/portfolio.js`.**
Change your name, title, tagline, email, social links, skills, projects,
training, certifications, education — all from that one file. No UI
component needs to change.

- **Profile photo:** replace `src/assets/profile/profile.jpg` with your new
  image (keep the same filename, or update the `personal.profileImage` path
  in `src/data/portfolio.js`).
- **Resume:** replace `public/resume.pdf` with your actual resume PDF (same
  filename). The current file is a placeholder — swap it before publishing.
- **Projects:** add or edit entries in the `projects` array in
  `src/data/portfolio.js`. Each project supports `name`, `subtitle`,
  `description`, `problem`, `solution`, `status`, `date`, `technologies`,
  `features`, `architecture` (array of steps for the diagram), `github`,
  `liveDemo`, and `featured`.
- **Coding profile links** (LeetCode, etc.): fill in
  `problemSolving.codingProfiles` once you have public links.
- **Certification/training links:** fill in the `link` field on each entry
  once you have real credential URLs — leave `null` until then so no fake
  links ship.

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx            Sticky nav, theme toggle, mobile menu
│   ├── Hero.jsx               Hero section with photo + CTAs
│   ├── About.jsx
│   ├── Skills.jsx              Data-driven skill category grid
│   ├── Projects.jsx            Renders ProjectCard list + modal
│   ├── ProjectCard.jsx
│   ├── ProjectModal.jsx        Keyboard-accessible detail view
│   ├── ArchitectureDiagram.jsx Reusable CSS-based architecture flow
│   ├── ProblemSolving.jsx      DSA / coding-practice stats
│   ├── Training.jsx
│   ├── Education.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx             mailto-based contact form
│   └── Footer.jsx
├── hooks/
│   ├── useTheme.jsx            Dark/light mode + localStorage
│   └── useActiveSection.js     Scroll-based nav highlighting
├── data/
│   └── portfolio.js            ← ALL editable content lives here
├── assets/
│   └── profile/profile.jpg
├── App.jsx
├── main.jsx
└── index.css                   Design tokens (CSS variables) + Tailwind
```

## Notes

- No fabricated stats, testimonials, or work experience are included —
  everything reflects only what was in the source CV. Fields without
  confirmed data (coding profile links, credential URLs, live demo URLs)
  are left as `null` placeholders in `portfolio.js` rather than invented.
- Theme, animations, and layout respect `prefers-reduced-motion` and are
  fully responsive from 320px mobile up through desktop.
