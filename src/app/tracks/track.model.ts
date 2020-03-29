export class Track {
  id: string;
  title: string;
  creator: string;
  trackName: string;

  constructor(public title: string,
  			  public avatarSrc: string) {
  	this.id = 0;
  	this.id++;
  }
}
