import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SpotifyService {
  constructor(private _http: HttpClient) {
  }

  getSpotifyData() {
    return this._http.get('https://api.spotify.com/v1/search?q=jason&type=artist')
      // .forEach(res => console.log(res))
      // .map(res => res.json())
  }
}
