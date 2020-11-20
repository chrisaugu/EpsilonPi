import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RadioComponent } from './radio.component';

const routes: Routes = [
  { path: 'radio',  component: RadioComponent/*, data: { animation: 'heroes' }*/ },
  // { path: 'tracks/:id', component: TrackDetailComponent, data: { animation: 'hero' } },
  // { path: 'tracks/:id/edit', component: TrackEditComponent },
];

@NgModule({
  declarations: [
    RadioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RadioModule { }
