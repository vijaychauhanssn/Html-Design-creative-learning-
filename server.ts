import 'zone.js/node';
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import { existsSync } from 'fs';

// NOTE: This file assumes you build an Angular Universal server bundle.
// The AmpStoryService used below is the source version included in src/app.
import { AmpStoryService } from './src/app/amp-story.service';

export function app() {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/angular-amp-stories/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get('/amp/:id', (req, res) => {
    const storyId = req.params.id;
    const jsonPath = join(distFolder, 'assets/story-data', `${storyId}.json`);
    try {
      const json = JSON.parse(readFileSync(jsonPath, 'utf-8'));
      const service = new AmpStoryService();
      const html = service.generateAmpHtml(json);
      res.setHeader('Content-Type', 'text/html');
      res.send(html);
    } catch (err) {
      res.status(404).send('AMP story not found');
    }
  });

  server.get('*.*', express.static(distFolder));
  server.get('*', (req, res) => res.sendFile(join(distFolder, 'index.html')));

  return server;
}

if (require.main === module) {
  const port = process.env.PORT || 4000;
  const serverApp = app();
  serverApp.listen(port, () => console.log(`Node Express server listening on http://localhost:${port}`));
}
