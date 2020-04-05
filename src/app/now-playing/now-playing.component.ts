import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Track } from "../tracks/track.interface";

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
	product;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			// this.product = products[+params.get('productId')];
		});
	}
}
