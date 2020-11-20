import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import axios from "axios";

@Injectable()
export class ArtistService {

  constructor(private _http: HttpClient) {
  }

  getArtistData() {
    return this._http.get('https://api.spotify.com/v1/search?q=jason&type=artist')
      // .map(res => res.json())
  }

  getAllArtists() {
    // return axios.get("http://localhost:7000/api/artists", {}).then(data => {
    //   console.log(data)
    // });
    // return this._http.get('http://localhost:7000/api/artists')
    // .map(res => res.json())
  }
}
