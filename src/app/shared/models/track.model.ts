export class Track {
  id: number;
  title: string;
  creator: string;
  trackName: string;

  constructor(title: string,
              public avatarSrc: string) {
    this.title = title;
    this.id = 0;
    this.id++;
  }
}
