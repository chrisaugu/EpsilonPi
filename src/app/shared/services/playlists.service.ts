import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// import { Track } from '../shared/models/track.model';
import { Track } from '../models/track.model';
import { TRACKS } from '../../tracks/mock-tracks';
import {Playlist} from "../../playlists/playlist";
// import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistsService {
  playlistUrl: string = "/d";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              /*private messageService: MessageService*/) {

  }

  getTracks(): Observable<Track[]> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('PlaylistsService: fetched heroes');
    return this.http.get<Track[]>(this.playlistUrl)
      .pipe(
        catchError(this.handleError<Track[]>('getTracks', []))
      );
    // return of(TRACKS);
  }

  /** GET hero by id. Will 404 if id not found */
  // getPlaylist(id: number | string) {
  getPlaylist(id: number): Observable<Track> {
    // return this.getTracks().pipe(
    // (+) before `id` turns the string into a number
    // map((Tracks: Tracks[]) => tracks.find(track => track.id === +id))
    // );
    const url = `${this.playlistUrl}/${id}`;
    return this.http.get<Track>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Track>(`getHero id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updatePlaylist(track: Track): Observable<any> {
    return this.http.put(this.playlistUrl, track, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${track.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addPlaylist(track: Playlist): Observable<Track> {
    return this.http.post<Track>(this.playlistUrl, track, this.httpOptions).pipe(
      tap((newTrack: Track) => this.log(`added track w/ id=${newTrack.id}`)),
      catchError(this.handleError<Track>('addTrack'))
    );
  }

  /** DELETE: delete the hero from the server */
  deletePlaylist(playlist: Playlist | number): Observable<Playlist> {
    const id = typeof playlist === 'number' ? playlist : playlist.id;
    const url = `${this.playlistUrl}/${id}`;

    return this.http.delete<Playlist>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Playlist>('deleteHero'))
    );
  }

  /** GET heroes whose name contains search term */
  searchPlaylists(term: string): Observable<Playlist[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Playlist[]>(`${this.playlistUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Playlist[]>('searchPlaylist', []))
    );
  }

  getPlaylists() {
    return [];
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
