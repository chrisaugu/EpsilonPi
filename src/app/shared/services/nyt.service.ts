import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
declare var $: any;

@Injectable()
export class NYTService {
  apiKey = "1234567890";
  nytURL = "http://api.nytimes.com/svc/v2/articlesearch.json";

  constructor(@Inject(Http) public http:Http) {}

  getNYTInfo() {
    return $.get(this.nytURL, {
      "api-key": this.apiKey,
      sort: "oldest",
      fq: "headline:(\""+"Fashion"+"\")",
      fl: "headline,snippet,multimedia,pub_date"
    }, function (res) {
      var responseObj = $.parseJSON(JSON.stringify(res.response));

      var docs = JSON.stringify(responseObj['docs']);
      var docsArray = JSON.parse(docs);
      return docsArray;
    }, "JSON");
  }
}
