# Gowtham B H, portfolio

Static site built with [Astro](https://astro.build), deployed on Vercel.

## Run locally
Requires Node 22.23.4 or newer (see `.nvmrc`).

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # outputs to dist/

## Where content lives
- `src/data/site.ts`: headline, pitch, numbers, teams, skills, vision, links, and the experience list
- `src/content/projects/*.md`: one file per project. `featured: true` puts it in the main Work list with its stats and "why there was no path" note. `draft: true` hides it.
- `public/resume.pdf`: the resume linked across the site

## How changes ship
1. A change is made on a branch and opened as a pull request.
2. Vercel posts a preview link on the pull request.
3. Merging into `main` deploys the live site.
