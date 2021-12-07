import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { TrackListComponent } from "./track-list/track-list.component";
import { TrackDetailComponent } from "./track-detail/track-detail.component";
import {SongComponent} from "../shared/components/song.component";
// import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  { path: '', component: TrackListComponent, data: { animation: 'heroes' } },
  { path: 'tracks', component: TrackListComponent, data: { animation: 'heroes' } },
  { path: 'tracks/:id', component: TrackDetailComponent, data: { animation: 'hero' } },
  // { path: 'tracks/:id/edit', component: EditComponent },
];

@NgModule({
    declarations: [
        TrackListComponent,
        TrackDetailComponent,
        SongComponent,
        // EditComponent
    ],
  imports: [
    MatListModule,
    MatIconModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [],
})

export class TracksModule { }
