import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Track } from './shared/models/track.model';
// import { TRACKS } from './mock-heroes';
// import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class PlaylistsService {

  constructor(/*private messageService: MessageService*/) { }

  getTracks(): Observable<Track[]> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('PlaylistsService: fetched heroes');
    return of(/*TRACKS*/);
  }

  getHero(id: number | string) {
    // return this.getTracks().pipe(
      // (+) before `id` turns the string into a number
      // map((Tracks: Tracks[]) => tracks.find(track => track.id === +id))
    // );
  }
}
