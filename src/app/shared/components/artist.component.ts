import {Component, HostBinding, Input} from '@angular/core';
import {Artist} from "../models/artist.model";

@Component({
  selector: 'artist',
  template: `
    <div  class="media">
      <div class="media-left">
        <a href="#">
          <img class="media-object img"
               src="{{ artist.images[2]?.url }}" alt="...">
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ artist.name }}</h4>
        Followers: {{ artist.followers}}
        Popularity: {{ artist.likes }}
        <button (click)="follow()">follow</button>
        <button (click)="unfollow()">unfollow</button>
      </div>
    </div>
  `
})
export class ArtistComponent {
  // @HostBinding('attr.class') cssClass = 'row';
  @Input() artist: Artist;

  constructor() { }

  follow(): boolean {
    // this.song.voteUp();
    this.artist.followers++;
    return false;
  }

  unfollow(): boolean {
    // this.song.voteDown();
    this.artist.followers--;
    return false;
  }

}
