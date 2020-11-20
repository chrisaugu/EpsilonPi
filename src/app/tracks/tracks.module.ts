import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TrackListComponent } from "./track-list/track-list.component";
import { TrackDetailComponent } from "./track-detail/track-detail.component";

const routes: Routes = [
  { path: 'tracks', component: TrackListComponent, data: { animation: 'heroes' } },
  { path: 'tracks/:id', component: TrackDetailComponent, data: { animation: 'hero' } },
  // { path: 'tracks/:id/edit', component: TrackEditComponent },
];

@NgModule({
  declarations: [
    TrackListComponent,
    TrackDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [],
})

export class TracksModule { }
