# Angular AMP Stories — Template

This repository is a minimal file-template for an **Angular + AMP Stories** project with SSR (server.ts) entry for generating AMP HTML from JSON story data.

**What this archive includes**
- Minimal folder structure and example files:
  - `src/app` with components and a service that generates AMP story HTML
  - `src/assets/story-data/story1.json`
  - `server.ts` (Express + Angular Universal style route for `/amp/:id`)
  - `angular.json`, `tsconfig.json` placeholders
  - `.gitignore`

**Notes**
- This is a file template only — it does **not** include an actual Angular CLI project or `node_modules`.
- To make it runnable you'll need to scaffold an Angular app (e.g. `ng new`), add `@nguniversal/express-engine`, and copy these files into the generated project where appropriate.
- If you want, I can:
  - Push a complete Angular CLI scaffold to a GitHub repo (requires GitHub access from you)
  - Or expand this to include a working `package.json` and installation instructions for a fully runnable app.

