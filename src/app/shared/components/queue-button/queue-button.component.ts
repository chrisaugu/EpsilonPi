import { Component, Input } from '@angular/core';
import {Track} from "../../../tracks/track.interface";

@Component({
  selector: 'app-queue-button',
  templateUrl: './queue-button.component.html',
  styleUrls: ['./queue-button.component.css']
})
export class QueueButtonComponent implements OnInit {

	@Input() track: Track;

	@Input() tracks: Tracks<Track>;

	private playQueue: PlayQueue<PlayQueueItem> = PlayQueue.getInstance();

	isQueued(): boolean {
		let queuedItems = this.playQueue.getQueuedItems();
		if (queuedItems && queuedItems.find((item: PlayQueueItem) => {
			return item.get('track').get('id') == this.track.id;
		})) {
			return true;
		} else {
			return false;
		}
	}

	queue(): void {
		this.playQueue.queue({track: this.track});
	}

  constructor() { }

}
