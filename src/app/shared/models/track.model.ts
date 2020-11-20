import {Artist} from "./artist.model";

export class Track {
  id: number;
  title: string;
  creator: string;
  // artist: Artist[];
  // private url: string;
  // private album_art: string;
  // private artists: Artist[];

  constructor(id: number,
              title: string,
              public avatarSrc: string,
              creator: String,
              /*artists: Artist[],
              album_art: string,
              url: string*/) {
    this.title = title;
    this.id = 0;
    this.id++;
    // this.id = id;
    // this.url = url;
    // this.artists = [...artists];
    // this.album_art = album_art;
  }
}
