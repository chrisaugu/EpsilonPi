import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsRoutingModule } from "./playlists.routes";
// import { PlaylistsService } from "./playlists.service";
import {PlaylistsComponent} from "./playlists.component";

@NgModule({
	declarations: [
	  PlaylistsComponent
  ],
	imports: [
		CommonModule,
		PlaylistsRoutingModule
	],
	providers: [
		// PlaylistsService
	]
})
export class PlaylistsModule { }
