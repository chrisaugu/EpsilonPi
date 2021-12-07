import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Track } from './shared/models/track.model';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  // constructor() { }

  createDb() {
    const tracks = [
      { id: 11, title: "Dr Nice", avatarSrc: "", creator: "", url: "", artist: ""/*, featured_artists: []*/, album_art: "", genre: "", publisher: "", duration: 0, likes: 0 },
      { id: 12, title: 'Narco', avatarSrc: "", creator: "", url: "", artist: ""/*, featured_artists: []*/, album_art: "", genre: "", publisher: "", duration: 0, likes: 0 },
      { id: 13, title: 'Bombasto', avatarSrc: "", creator: "", url: "", artist: ""/*, featured_artists: []*/, album_art: "", genre: "", publisher: "", duration: 0, likes: 0 },
      { id: 14, title: 'Celeritas', avatarSrc: "", creator: "", url: "", artist: ""/*, featured_artists: []*/, album_art: "", genre: "", publisher: "", duration: 0, likes: 0 },
      { id: 15, title: 'Magneta', avatarSrc: "", creator: "", url: "", artist: ""/*, featured_artists: []*/, album_art: "", genre: "", publisher: "", duration: 0, likes: 0 },
      { id: 16, title: 'RubberMan', avatarSrc: "", creator: "", url: "", artist: ""/*, featured_artists: []*/, album_art: "", genre: "", publisher: "", duration: 0, likes: 0 },
      { id: 17, title: 'Dynama', avatarSrc: "", creator: "", url: "", artist: ""/*, featured_artists: []*/, album_art: "", genre: "", publisher: "", duration: 0, likes: 0 },
      { id: 18, title: 'Dr IQ', avatarSrc: "", creator: "", url: "", artist: ""/*, featured_artists: []*/, album_art: "", genre: "", publisher: "", duration: 0, likes: 0 },
      { id: 19, title: 'Magma', avatarSrc: "", creator: "", url: "", artist: ""/*, featured_artists: []*/, album_art: "", genre: "", publisher: "", duration: 0, likes: 0 },
      { id: 20, title: 'Tornado', avatarSrc: "", creator: "", url: "", artist: ""/*, featured_artists: []*/, album_art: "", genre: "", publisher: "", duration: 0, likes: 0 }
    ];

    return {tracks};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(tracks: Track[]): number {
  //   return tracks.length > 0 ? Math.max(...tracks.map(track => track.id)) + 1 : 11;
  // }
}
