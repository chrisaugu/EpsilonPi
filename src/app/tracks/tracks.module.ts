import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrackListComponent} from "./track-list/track-list.component";
import {TrackDetailComponent} from "./track-detail/track-detail.component";
import {TracksRoutingModule} from "./tracks.routes";

@NgModule({
  declarations: [
    TrackListComponent,
    TrackDetailComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule
  ]
})
export class TracksModule { }
