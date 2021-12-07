import {Artist} from "./artist.model";

export class Track {
  id: number;
  title: string;
  creator: string;
  artist: string;
  // featured_artists: Artist[];
  url: string;
  album_art: string;
  avatarSrc: string;
  genre: string;
  publisher: string;
  duration: number;
  likes: number;

  // constructor(id: number,
  //             title: string,
  //             public avatarSrc: string,
  //             creator: string,
  //             /*artists: Artist[],
  //             album_art: string,*/
  //             url: string) {
  //   this.title = title;
  //   this.id = 0;
  //   this.id++;
  //   // this.id = id;
  //   this.url = url;
  //   // this.artists = [...artists];
  //   // this.album_art = album_art;
  // }
  // voteUp() {
  //   this.likes++;
  // }
  //
  // voteDown() {
  //   this.likes--;
  // }
}
