export class Playlist {
  id: string;
  title: string;
  creator: string;
  tracks: [];
  avatarSrc: string;

  constructor(id: string, title: string) {
    this.title = title;
    // this.id = 0;
    // this.id++;
  }
}
