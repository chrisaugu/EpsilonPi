import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../../shared/services/artist.service";
import {Artist} from "../../shared/models/artist.model";

@Component({
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss'],
  providers: [ArtistService]
})
export class ArtistListComponent implements OnInit {
  artists: Artist[];
  isLoading: boolean;

  constructor(private _artistService: ArtistService) {}

  ngOnInit() {
    this.isLoading = true;
    // this._artistService.getAllArtists()
    // .subscribe(data => {
    //   this.isLoading = false;
    //   this.artists = data;
    //   console.log(this.artists);
    // })
    this.artists = [
      { "name":"Kitten", "albums":"Cat","labels":"The cat", "followers": 0, "likes": 0, "images": [{url:'/'}] },
      { "name":"Kitten", "albums":"Cat","labels":"The cat", "followers": 0, "likes": 0, "images": [{url:'/'}] },
      { "name":"Kitten", "albums":"Cat","labels":"The cat", "followers": 0, "likes": 0, "images": [{url:'/'}] },
      { "name":"Kitten", "albums":"Cat","labels":"The cat", "followers": 0, "likes": 0, "images": [{url:'/'}] }
    ];

    this.isLoading = false;
  }

}

