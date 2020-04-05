import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChartsComponent} from './charts.component';

const routes: Routes = [
  { path: 'charts',  component: ChartsComponent/*, data: { animation: 'heroes' }*/ },
  // { path: 'tracks/:id', component: TrackDetailComponent, data: { animation: 'hero' } },
  // { path: 'tracks/:id/edit', component: TrackEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule {
}
