import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { PlaylistsService } from "../shared/services/playlists.service";
import { PlaylistsComponent } from "./playlists.component";

// https://music.apple.com/pg/playlist/easy-hits/pl.725376c1e6b14915b7e27a919db39c52

const routes: Routes = [
  { path: 'playlists',  component: PlaylistsComponent/*, data: { animation: 'heroes' }*/ },
  // { path: '/playlists/:playlistId', component: PlaylistsComponent },
  // { path: 'tracks/:id', component: TrackDetailComponent, data: { animation: 'hero' } },
  // { path: 'tracks/:id/edit', component: TrackEditComponent },
];

@NgModule({
  declarations: [
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, PlaylistsComponent],
  providers: [
    PlaylistsService
  ]
})

export class PlaylistsModule { }
