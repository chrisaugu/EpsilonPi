import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  // styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit {
  playlists: object;

  constructor(/*private playlistService: PlaylistsService,*/
              private router: Router,
              private route: ActivatedRoute) {
    this.playlists = [
      {id: 1, title: "PNGFresh"}
    ];
  }

  ngOnInit(): void {
    this.getPlaylists();
  }

  goToPlaylist(id: string): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }

  getPlaylists(): void {
    // this.playlistService().getPlaylists()
    // .subscribe(playlists => this.playlists = playlists.slice(1, 5))
  }

  delete(/*private id: string*/playlistId: any): void {}
}
