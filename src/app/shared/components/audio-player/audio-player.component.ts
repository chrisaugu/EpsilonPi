import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})

// interface Audio {
// }

export class AudioPlayerComponent implements OnInit {
  isPlaying: boolean;
  repeat: boolean;
  isRepeat: boolean;
  isMute: boolean;

  constructor(/*private audioPlayer: Audio*/) {
  }

  ngOnInit() {
    console.log("DDD")
  }

  play() {
    // this.audioPlayer.play();
  	console.log("playing");
  	this.isPlaying = true;
  }

  pause() {
    // this.audioPlayer.pause();
    this.isPlaying = false;
  }

  prev() {
  }

  next() {
  }

  toggleShuffle() {
  }

  toggleRepeat() {
  }

  toggleMute() {
    if (this.isMute) {
      // this.audioPlayer.muted = false;
      this.isMute = false;
    } else {
      // this.audioPlayer.muted = false;
      this.isMute = true;
    }
  }
}
