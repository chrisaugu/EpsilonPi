import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { NowPlayingService } from "../shared/services/now-playing.service";
import { NowPlayingComponent } from "./now-playing.component";

// https://music.apple.com/pg/playlist/easy-hits/pl.725376c1e6b14915b7e27a919db39c52

const routes: Routes = [
  {
    path: 'now_playing',
    component: NowPlayingComponent,
    data: { animation: 'heroes' },
    // resolve: {
    //   data: NowPlayingResolver
    // }
  }
];

@NgModule({
	declarations: [
	  NowPlayingComponent
    ],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule],
	providers: [
		NowPlayingService
	]
})

export class NowPlayingModule { }
