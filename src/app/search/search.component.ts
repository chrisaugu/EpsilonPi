import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

// import { Person, SearchService } from '../shared';
import { Track } from '../shared/models/track.model';
// import { HeroService } from '../hero.service';
import { Person, SearchService } from "../shared/services/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  query: string;
  // searchResults: Array<Person>;
  searchResults: object;
  results: any;

  tracks$: Observable<Track[]>;
  private searchTerms = new Subject<string>();

  constructor(/*private searchService: HeroService,*/
              private searchService: SearchService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route
      .queryParams
      .subscribe(params => { this.query = params['query'] || '' });
    // this.sub = this.route.params.subscribe(params => {
    //   if (params['term']) {
    //     this.query = decodeURIComponent(params['term']);
    //     this.search();
    //   }
    // })
  }

  submit(query: string) : void {
    this.router.navigate(['search'], {queryParams: {query: query}})
      .then(_ => this.search('s'));
  }

  // Push a search term into the observable stream.
  search(term: string): void {
  // search(): void {
    console.log('this.query', this.query);
    if (!this.query) {
      return;
    }

    // this.searchTerms.next(term);

    this.searchService.search(this.query).subscribe(
    // this.searchService.getAll().subscribe(
      data => { this.searchResults = data; },
      error => console.log(error)
    );
  }

  ngOnInit(): void {
    // this.search();

    // this.tracks$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),
    //
    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),
    //
    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.searchService.searchHeroes(term)),
    // );
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  private getAll() {

  }
}
