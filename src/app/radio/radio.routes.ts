import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RadioComponent} from './radio.component';

const routes: Routes = [
  { path: 'radio',  component: RadioComponent/*, data: { animation: 'heroes' }*/ },
  // { path: 'tracks/:id', component: TrackDetailComponent, data: { animation: 'hero' } },
  // { path: 'tracks/:id/edit', component: TrackEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioRoutingModule {
}
