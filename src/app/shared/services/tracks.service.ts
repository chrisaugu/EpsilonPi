import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

import { Track } from '../models/track.model';
// import { TRACKS } from '../../tracks/mock-tracks';
// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class TracksService {
  // tracksUrl = 'https://api.spotify.com/v1/search?q=jason&type=artist';
  tracksUrl = "http://localhost:7000/api/tracks";

  constructor(/*private messageService: MessageService*/private _http: HttpClient) { }

  addTrack(track: Track): Observable<Track> {
    return this._http.post<Track>(this.tracksUrl, track/*, httpOptions*/)
    // .pipe(
    //   // catchError(this.handleError('addTrack', track))
    // );
    // return of(TRACKS);
  }

  getTracks(): Observable<Track[]> {
    // TODO: send the message _after_ fetching the tracks
    // this.messageService.add('TracksService: fetched tracks');
    return this._http.get<Track[]>(this.tracksUrl)
      // .forEach(res => console.log(res))
      // .map(res => res.json())
      // return of(TRACKS);
    // return of([])
  }

  getTrack(id: number | string) {
    return this.getTracks().pipe(
      // (+) before `id` turns the string into a number
      map((tracks: Track[]) => tracks.find(track => track.id === +id))
    );
  }
}
