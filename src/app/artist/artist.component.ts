import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})

// export const ARTIST : Artist[] = [
//   { "name":"Kitten", "albums":"Cat","labels":"The cat" }
// ];

export class ArtistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export interface Artist {
  name: string,
  labels: string,
  albums: string
}

