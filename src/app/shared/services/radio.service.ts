import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;

class RadioModel {
}

@Injectable()
export class RadioService {
  apiKey = "1234567890";
  nytURL = "http://api.nytimes.com/svc/v2/articlesearch.json";
  radios: [];

  constructor(@Inject(HttpClient) public http:HttpClient) {}

  getRadioInfo() {
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

  getRadios(): Promise<RadioModel[]> {
    // return this.radios;

    return this.http.get("./assets/radios.json")
      .toPromise()
      .then(res => res as RadioModel[])
      // .then(res => res.json() as RadioModel[])
  }
}
