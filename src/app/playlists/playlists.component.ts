import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistsService } from './playlist.service';

@Component({
	selector: 'app-playlists',
	templateUrl: './playlists.component.html',
	styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
	playlists: string[];

	constructor(/*private playlistService: PlaylistsService,*/
				private router: Router, 
				private route: ActivatedRoute) {
		this.playlists = ["1", "2", "3"];
	}

	ngOnInit(): void {
		this.getPlaylists();
	}

	goToPlaylist(id: string) : void {
		this.router.navigate(['./', id], {relativeTo: this.route});
	}

	getPlaylists(): void {
		// this.playlistService().getPlaylists()
		// .subscribe(playlists => this.playlists = playlists.slice(1, 5))
	}

	delete(/*private id: string*/): void {}
}