import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TracksService } from '../../shared/services/tracks.service';
import { Track } from '../../shared/models/track.model';

@Component({
  // selector: 'app-tracks',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css'],
  providers: [TracksService]
})
export class TrackListComponent implements OnInit {
  tracks: Track[];

  constructor(private trackService: TracksService) { }

  ngOnInit() {
    this.trackService.getTracks().subscribe(res => {
    	this.tracks = res;
    })
  }

}
