import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrackListComponent} from './track-list/track-list.component';
import {TrackDetailComponent} from './track-detail/track-detail.component';

const routes: Routes = [
  // { path: 'tracks',  component: TrackListComponent, data: { animation: 'heroes' } },
  // { path: 'tracks/:id', component: TrackDetailComponent, data: { animation: 'hero' } },
  // { path: 'tracks/:id/edit', component: TrackEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule {
}
