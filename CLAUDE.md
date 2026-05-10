# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies
npm run dev          # start dev server at http://localhost:5173
npm run build        # type-check + production build (runs in parallel)
npm run type-check   # vue-tsc type checking only
npm run test:unit    # run Vitest unit tests (watch mode)
```

To run a single test file:
```bash
npx vitest run src/path/to/file.spec.ts
```

Docker alternative (mounts `src/`, `public/`, `index.html` as live volumes):
```bash
docker compose up
```

## Architecture

**Stack:** Vue 3 (Composition API `<script setup>`) + TypeScript + Vite + Pinia + Vue Router.

**Path alias:** `@` resolves to `src/` — use it for all internal imports.

**Routing:** `src/router/index.ts` uses `createWebHistory`. `App.vue` is a thin shell that renders `<RouterView />` only — no global layout or nav lives there.

**State:** Pinia stores live in `src/stores/`. Use the Setup Store style (function returning refs/computeds), not the Options Store style.

**Components vs Views:** Views (`src/views/`) are route-level containers that compose components from `src/components/`. Views handle layout; components handle presentation logic. `BikeCard.vue` is currently a fully static presentation component (no reactive state).

**Styling:** Scoped CSS per component. Global CSS custom properties for color tokens (`--color-background`, `--color-background-soft`, `--color-background-mute`, `--color-border`, `--color-heading`, `--color-text`) are defined in `src/assets/base.css` with automatic dark mode via `prefers-color-scheme`. The accent color throughout is Vue's green: `hsla(160, 100%, 37%, 1)`.
