import {Component, HostBinding, Input} from '@angular/core';
import {Track} from "../models/track.model";

@Component({
  selector: 'song',
  template: `
    <li>
      <b>{{song.title}}</b> - <i>{{song.artist}}</i> - <em>{{song.likes}}</em>
      <button (click)="voteUp()">like</button>
      <button (click)="voteDown()">dislike</button>
    </li>
  `
})
export class SongComponent {
  // @HostBinding('attr.class') cssClass = 'row';
  @Input() song: Track;

  constructor() { }

  voteUp(): boolean {
    // this.song.voteUp();
    this.song.likes++;
    return false;
  }

  voteDown(): boolean {
    // this.song.voteDown();
    this.song.likes--;
    return false;
  }

}
