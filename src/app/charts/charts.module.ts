import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {ChartsComponent} from './charts.component';

const routes: Routes = [
  { path: 'charts',  component: ChartsComponent/*, data: { animation: 'heroes' }*/ },
  // { path: 'tracks/:id', component: TrackDetailComponent, data: { animation: 'hero' } },
  // { path: 'tracks/:id/edit', component: TrackEditComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    ChartsComponent
  ]
})
export class ChartsModule { }
