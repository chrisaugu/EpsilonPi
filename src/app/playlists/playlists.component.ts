import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
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
