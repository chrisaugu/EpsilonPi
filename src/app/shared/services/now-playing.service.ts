import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import {HttpClient, HttpResponse} from "@angular/common/http";

import { Track } from '../models/track.model';
// import { TRACKS } from '../../tracks/mock-tracks';
// import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class NowPlayingService {

  constructor(private http: HttpClient) {}
  // constructor(private messageService: MessageService) { }

  // getTracks(): Observable<Track[]> {
  //   // TODO: send the message _after_ fetching the heroes
  //   this.messageService.add('TracksService: fetched heroes');
  //   return of(TRACKS);
  // }

  // getHero(id: number | string) {
  //   return this.getTracks().pipe(
  //     // (+) before `id` turns the string into a number
  //     map((Tracks: Tracks[]) => tracks.find(track => track.id === +id))
  //   );
  // }

  // getAll() {
  //   return this.http.get('/assets/data/people.json')
  //     .map((res: Response) => res.json());
  // }

  // search(q: string): Observable<any> {
  //  if (!q || q === '*') {
  //    q = '';
  //  } else {
  //    q = q.toLowerCase();
  //  }
  //  return this.getAll().map(data => data.filter(item => JSON.stringify(item).toLowerCase().includes(q)));
  // }

  search(q: string): Observable<any> {
    if (!q || q === '*') {
      q = '';
    } else {
      q = q.toLowerCase();
    }
    return this.http.get('/');
    // return this.getAll().map(data => {
    //   const results: any = [];
    //   data.map(item => {
    //     // check for item in localStorage
    //     if (localStorage['person' + item.id]) {
    //       item = JSON.parse(localStorage['person' + item.id]);
    //     }
    //     if (JSON.stringify(item).toLowerCase().includes(q)) {
    //       results.push(item);
    //     }
    //   });
    //   return results;
    // });
  }

  // get(id: number) {
  //   return this.getAll().map(all => {
  //     if (localStorage['person' + id]) {
  //       return JSON.parse(localStorage['person' + id]);
  //     }
  //     return all.find(e => e.id === id);
  //   });
  // }

  // save(person: Person) {
  //   localStorage['person' + person.id] = JSON.stringify(person);
  // }
}
