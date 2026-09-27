# Shared UI foundation

`ui.js` is a dependency-free JavaScript component layer used by both language apps. It provides safe text and button factories, a reusable surface factory, and accessible tab rendering. Reader source tabs are the first shared component adopted by Chinese and Korean.

The shared components use ordinary text labels and semantic surfaces. Reserve badges and notification lights for actual status or notification signals.

## Reading and study views

Keep language data and language-specific study logic in `app/` and `korean/`. Reuse controls and visual primitives from `shared/`. The reader tabs currently switch collections inside each existing reader; a separate Reading workspace can later compose the same reader surface without duplicating its sentence logic.

## Framework choice

The current site is a static HTML/CSS/JS site with no package manager or build pipeline. Next.js can generate static HTML for individual routes, so it can serve a static deployment. Its app router also supports interactive browser features, but stateful controls and browser APIs need client components. That would mean a substantial move of existing global-script behavior and course data into a React app.

The migration now starts under `web/` as a JavaScript App Router project with static export. It offers separate `/zh/study`, `/zh/read`, `/ko/study`, and `/ko/read` pages. Reading uses shared React surface/navigation components. Study temporarily hosts each original app while its large course logic is lifted into components in focused increments; the originals remain the behavior reference during migration.
