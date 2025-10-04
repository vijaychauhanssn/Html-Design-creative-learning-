To convert this template into a runnable Angular + SSR project:
1. Run `ng new angular-amp-stories` with Angular CLI.
2. Add Angular Universal: `ng add @nguniversal/express-engine`.
3. Copy the files from this template into the generated project:
   - `src/app/amp-story.service.ts`
   - `src/app/story-preview/*`
   - `server.ts` (merge with the generated server.ts)
   - `src/assets/story-data/*`
4. Build and serve with `npm run build:ssr` and `npm run serve:ssr`.
