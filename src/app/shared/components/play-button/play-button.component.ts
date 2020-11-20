import { Component } from '@angular/core';
import {EventEmitter} from 'eventemitter3';

@Component({
  selector: '[appPlayButton]',
  templateUrl: "./play-button-component"
})
export class PlayButtonComponent {
	@Output() customEvent = new EventEmitter();

	constructor() { }

	play(message) {
		this.customEvent.emit(message);
	}

}
