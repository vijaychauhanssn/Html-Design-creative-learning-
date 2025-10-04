export class AmpStoryService {
  generateAmpHtml(story: any): string {
    const ampPages = story.pages.map((page: any) => `
      <amp-story-page id="${page.id}">
        <amp-story-grid-layer template="fill">
          <amp-img src="${page.image}" width="720" height="1280" layout="responsive"></amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
          <h1>${page.title}</h1>
          <p>${page.text}</p>
        </amp-story-grid-layer>
      </amp-story-page>
    `).join('');

    return `<!doctype html>
<html ⚡>
  <head>
    <meta charset="utf-8">
    <title>${story.title}</title>
    <link rel="canonical" href=".">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <style amp-boilerplate>body{-webkit-animation:none;animation:none}</style>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
  </head>
  <body>
    <amp-story standalone title="${story.title}" publisher="${story.publisher}"
               publisher-logo-src="${story.logo}" poster-portrait-src="${story.poster}">
      ${ampPages}
    </amp-story>
  </body>
</html>`;
  }
}
