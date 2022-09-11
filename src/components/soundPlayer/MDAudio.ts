export class MDAudio extends Audio {
  stop() {
    this.pause();
    this.currentTime = 0;
  }
}

export interface MDHTMLAudioElement extends HTMLAudioElement {
  stop: () => void;
}
