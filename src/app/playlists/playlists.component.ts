import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Playlist } from './playlist';
import { PlaylistsService } from '../shared/services/playlists.service';
import { PLAYLISTS } from './mock-playlists';
import { Track } from "../shared/models/track.interface";
// import { PlayButtonComponent } from "../shared/components/play-button/play-button.component";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
  providers: [ PlaylistsService ]
})

export class PlaylistsComponent implements OnInit {
  playlists: Playlist[];
  songs: Track[];
  song: any;
  selectedPlaylist: Playlist;

  constructor (private playlistService: PlaylistsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.playlists = this.playlistService.getPlaylists();
    this.getPlaylists();
  }
  selectPlaylist(playlist: Playlist) { this.selectedPlaylist = playlist; }

  goToPlaylist(id: string): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }

  getPlaylists(): void {
    // this.playlistService().getPlaylists()
    // .subscribe(playlists => this.playlists = playlists.slice(1, 5))
  }

  // delete(/*private id: string*/playlistId: any): void {}
  delete(playlist: Playlist): void {
    this.playlists = this.playlists.filter(h => h !== playlist);
    this.playlistService.deletePlaylist(playlist).subscribe();
  }

  add(id: string, title: string): void {
    title = title.trim();
    if (!title || !id) { return; }
    this.playlistService.addPlaylist({ id, title } as Playlist)
      .subscribe(playlist => {
        // this.playlists.push(playlist);
      });
  }

  play(playlist: Playlist): void {
    this.playlists = this.playlists.filter(h => h !== playlist);
    this.playlistService.deletePlaylist(playlist).subscribe();
  }

}
