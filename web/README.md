# HCODE.ART Next.js site

The website and language study surfaces use separate React components in the Next.js App Router. Next.js is pinned to 16.3.6 with React 19.2.0. The site uses static export, so PHP hosting only serves the generated files; no Node or PHP application runtime is needed.

## Routes

- `/` — HCODE.ART portal
- `/zh/study/` — Chinese characters, combinations, numbers, 204 radicals, adjectives/connectors, graded readings, and exact character pinyin lookup
- `/zh/read/` — Chinese reading room
- `/ko/study/` — Hangul, batchim, number systems and counters, phrases, vocabulary, grammar, and online reading cards
- `/ko/read/` — Korean reading room

Both study pages include the same interactive sentence reader as their reading route. Its collections come from the original Chinese and Korean source files, including beginner readings, news, culture, classical Chinese texts, and Korean proverbs. The existing short guided texts remain available as an extra reader source.

Study pages include lesson and card navigation, search, collapsible groups, pronunciation/meaning controls, audio, themes, and responsive vertical or horizontal cards. Chinese character clicks perform exact local pinyin lookup. Legacy reader, lesson rail, layout, typography, and theme preferences use their existing local-storage keys. The pinyin table is local and its GPL-3.0 license ships at `/licenses/pinyin-json-LICENSE.txt`.

## Develop and deploy

Run `npm install` and `npm run dev` from `web/` for development. `npm run build` prepares lesson JSON from the source datasets and writes the static site to `web/out/`. It rewrites exported asset and navigation links to relative paths so the site works from a subfolder. Upload the contents of `out/` to the domain document root on the PHP host.

To test the production export locally, run `npm run preview` from `web/` and open `http://127.0.0.1:4173/`. Set `PORT` or pass `--port 4174` to choose another port.

Portal components live in `src/components/portal/`; shared portal/course primitives live in `src/components/`. The original course sources remain under `app/` and `korean/`, and `scripts/prepare-study-data.mjs` turns their card and sentence data into the JSON used by the React views.
