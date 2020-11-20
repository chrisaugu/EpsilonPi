import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Track} from "../models/track.model";
import {Playlist} from "../../playlists/playlist";
import {BackendService} from "angular-in-memory-web-api";
import {Logger} from "@angular/compiler-cli/ngcc";
// import { MessageService } from './message.service';

class Hero {
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  private heroes: Hero[] = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    /*private messageService: MessageService*/
    private backend: BackendService,
    private logger: Logger) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Track[]> {
    // return of(HEROES);
    return this.http.get<Track[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Track[]>('getHeroes', []))
    );
  }

  // getHeroes() {
  //   this.backend.getAll(Hero).then( (heroes: Hero[]) => {
  //     this.logger.log(`Fetched ${heroes.length} heroes.`);
  //     this.heroes.push(...heroes); // fill cache
  //   });
  //   return this.heroes;
  // }

  /** GET heroes whose name contains search term */
  searchPlaylists(term: string): Observable<Playlist[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Playlist[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Playlist[]>('searchPlaylist', []))
    );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Track> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Track[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Track>(`getHero id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Track> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Track>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Track>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Track[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Track[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Track[]>('searchHeroes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero(hero: Track): Observable<Track> {
    return this.http.post<Track>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Track) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Track>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Track | number): Observable<Track> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Track>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Track>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Track): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
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
