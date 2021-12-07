import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Track } from '../models/track.model';
// import { TRACKS } from '../../tracks/mock-tracks';
// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(private http: HttpClient) {}
  // constructor(private messageService: MessageService) { }

  getTracks(): Observable<Track[]> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('TracksService: fetched heroes');
    // return of(TRACKS);
    return of([])
  }

  getHero(id: number | string) {
    return this.getTracks().pipe(
      // (+) before `id` turns the string into a number
      map((tracks: Track[]) => tracks.find(track => track.id === +id))
    );
  }

  get(id: number) {
    return this.getAll()
    //   .map(all => {
    //   if (localStorage['person' + id]) {
    //     return JSON.parse(localStorage['person' + id]);
    //   }
    //   return all.find(e => e.id === id);
    // });
  }

  getAll() {
    return this.http.get('/assets/data/people.json')
      // .forEach((res: Response) => res.json())
      // .map((res: Response) => res.json());
  }

  search(q: string): Observable<any> {
    if (!q || q === '*') {
      q = '';
    } else {
      q = q.toLowerCase();
    }

    // return this.getAll().map(data => data.filter(item => JSON.stringify(item).toLowerCase().includes(q)));
    return this.getAll()
    //   .map(data => {
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

  save(person: Person) {
    localStorage['person' + person.id] = JSON.stringify(person);
  }
}

export class Address {
  street: string;
  city: string;
  state: string;
  zip: string;

  constructor(obj?: any) {
    this.street = obj && obj.street || null;
    this.city = obj && obj.city || null;
    this.state = obj && obj.state || null;
    this.zip = obj && obj.zip || null;
  }
}

export class Person {
  id: number;
  name: string;
  phone: string;
  address: Address;

  constructor(obj?: any) {
    this.id = obj && Number(obj.id) || null;
    this.name = obj && obj.name || null;
    this.phone = obj && obj.phone || null;
    this.address = obj && obj.address || null;
  }
}
