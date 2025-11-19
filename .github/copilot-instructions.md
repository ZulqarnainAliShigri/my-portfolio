<!-- Copilot / AI assistant instructions for contributors and automation -->

# Repository Overview

This is a small, single-page React portfolio app bootstrapped with Create React App. Key entry points and directories:

- `public/index.html` — static HTML shell.
- `src/index.js`, `src/App.js` — React app bootstrap and root component.
- `src/components/` — presentational components (e.g. `Hero.js`, `Navbar.js`, `Projects.js`, `Contact.js`).
- `src/hooks/useIntersectionObserver.js` — small hook used for viewport reveal animations (adds `hidden` / `show` classes).
- `src/styles/App.css` — global CSS used by components.
- `package.json` — uses `react-scripts@5.0.1`. Start with `npm start` (or `npm run dev`).

## Big-picture architecture

- Single-page React app. Components are simple, mostly presentational. Expect props drilling for small data flows (no global store).
- Styling is CSS-based (no CSS modules or SASS). Look in `src/styles/App.css`.
- Small custom hook (`useIntersectionObserver`) toggles `hidden` and `show` class names on elements for reveal animations — follow that pattern when adding revealable sections.
- External integrations: `emailjs-com` is included (likely used in `Contact.js`), and `bootstrap` is available for layout/styling helpers.

## Developer workflows (how to run & build)

- Development (hot reload):

  ```bash
  npm install
  npm start
  # or
  npm run dev
  ```

- Build for production:

  ```bash
  npm run build
  ```

- Tests: there are no project-specific tests in the repo. The `npm test` script is the default CRA runner.

- DO NOT run `npm run eject` unless explicitly asked — this is irreversible and not necessary for typical edits.

## Project-specific conventions and patterns

- Components: placed in `src/components/`, each file exports a React functional component (e.g. `Hero.js`, `Navbar.js`). Prefer small, focused components.
- Hooks: small utilities live in `src/hooks/` (see `useIntersectionObserver.js`). When adding hooks, follow the same return value pattern (e.g. `return ref;`) and use class toggles for CSS-based animations.
- Styling: global CSS file `src/styles/App.css` is the canonical style location. Avoid introducing a competing global stylesheet unless necessary.
- Imports: use relative paths within `src/`. Keep imports explicit and minimal (no barrel files present).

## Integration points & external dependencies

- `emailjs-com`: used for contact form outbound emails (check `src/components/Contact.js`). If editing contact behavior, preserve existing usage or confirm new credentials with the repo owner.
- `bootstrap`: available; components may use Bootstrap classes. Don't remove it unless replacing layout consistently.

## Safe editing rules for AI agents

- Preserve `package.json` versions unless asked. Small fixes (typos) are OK, but do not add or upgrade dependencies without explicit instruction.
- Keep changes localized: update only relevant components and their styles. Avoid refactoring unrelated files.
- Avoid running `eject` or changing build tooling.

## Examples (how to make common edits)

- Add a new revealable section:

  1. Create `src/components/NewSection.js` — a functional component.
 2. Use the `useIntersectionObserver` hook to get a `ref`:

  ```js
  const ref = useIntersectionObserver();
  return <section ref={ref} className="hidden">...</section>;
  ```

  3. Add styles to `src/styles/App.css` for `.hidden` and `.show` to match existing transitions.

- Edit contact form behavior: adjust `src/components/Contact.js` and keep EmailJS initialization consistent. Do not commit API keys — use environment variables if adding secrets.

## Where to look for context

- `src/components/` — component patterns and props usage.
- `src/hooks/useIntersectionObserver.js` — reveal animation pattern.
- `src/styles/App.css` — global styling conventions.
- `package.json` — scripts and dependency list.

## When in doubt

- Ask the repo owner about credentials (EmailJS), stylistic changes (global CSS vs CSS-in-JS), and whether new dependencies are allowed.

---
If you'd like I can refine this further (merge other docs, add examples from `Contact.js` or `Navbar.js`), or run an automated pass to apply a small change. What should I do next?
