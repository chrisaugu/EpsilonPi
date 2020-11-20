import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

import { Track } from '../models/track.model';
import { TRACKS } from '../../tracks/mock-tracks';
// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class TracksService {
  tracksUrl = 'https://api.spotify.com/v1/search?q=jason&type=artist';

  constructor(/*private messageService: MessageService*/private _http: HttpClient) { }

  addTrack(track: Track): Observable<Track> {
    return this._http.post<Track>(this.tracksUrl, track/*, httpOptions*/)
    .pipe(
      // catchError(this.handleError('addTrack', track))
    );
  }

  getTracks(): Observable<Track[]> {
    // TODO: send the message _after_ fetching the tracks
    // this.messageService.add('TracksService: fetched tracks');
    // return of(TRACKS);
    return this._http.get(this.tracksUrl)
      // .forEach(res => console.log(res))
      // .map(res => res.json())
  }

  getTrack(id: number | string) {
    return this.getTracks().pipe(
      // (+) before `id` turns the string into a number
      map((tracks: Track[]) => tracks.find(track => track.id === +id))
    );
  }
}
