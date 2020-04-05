import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

// import { Person, SearchService } from '../shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  query: string;
  // searchResults: Array<Person>;
  results: any;
  searchResults: object;

  constructor(/*private searchService: SearchService,*/
              private router: Router,
              private route: ActivatedRoute) {
    this.route
        .queryParams
        .subscribe(params => {this.query = params['query'] || ''});
    // this.sub = this.route.params.subscribe(params => {
    //   if (params['term']) {
    //     this.query = decodeURIComponent(params['term']);
    //     this.search();
    //   }
    // })
  }

  ngOnInit(): void {
    this.search();
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  submit(query: string) : void {
    this.router.navigate(['search'], {queryParams: {query: query}})
    .then(_ => this.search());
  }

  search(): void {
    console.log('this.query', this.query);
    if (!this.query) {
      return;
    }
    // this.searchService.search(this.query).subscribe(
    //   data => { this.searchResults = data; },
    //   error => console.log(error)
    // );
  }



}
