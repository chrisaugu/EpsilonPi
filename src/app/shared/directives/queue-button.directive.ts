import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appPlayButton]'
})
export class QueueButtonDirective {

	// @Input() track: Track;
  //
	// @Input() tracks: Tracks<Track>;
  //
	// private playQueue: PlayQueue<PlayQueueItem> = PlayQueue.getInstance();
  //
	// isQueued(): boolean {
	// 	let queuedItems = this.playQueue.getQueuedItems();
	// 	if (queuedItems && queuedItems.find((item: PlayQueueItem) => {
	// 		return item.get('track').get('id') == this.track.id;
	// 	})) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	queue(): void {
		// this.playQueue.queue({track: this.track});
	}

  constructor() { }

}
