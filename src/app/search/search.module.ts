import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
    data: { animation: 'heroes' },
    // canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'search/*',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class SearchModule { }
