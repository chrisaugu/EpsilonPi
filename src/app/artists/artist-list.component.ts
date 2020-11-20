import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../shared/services/artist.service";
import {Artist} from "../shared/models/artist.model";

export const ARTIST : Artist[] = [
  { "name":"Kitten", "albums":"Cat","labels":"The cat" }
];

@Component({
  selector: 'app-artist',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
  providers: [ArtistService]
})
export class ArtistListComponent implements OnInit {
  artists: Object = [];
  isLoading = true;

  constructor(private _artistService: ArtistService) {}

  ngOnInit() {
    this._artistService.getAllArtists()
      // .subscribe(data => {
      //   this.isLoading = false;
      //   this.artists = data;
      //   console.log(this.artists);
      // })
  }

}

