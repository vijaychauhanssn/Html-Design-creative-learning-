export class StoryPreviewComponent {
  // simple constructor to accept story id when integrated into an Angular app
  storyId = 'story1';
  get storyUrl() {
    return `/amp/${this.storyId}`;
  }
}
