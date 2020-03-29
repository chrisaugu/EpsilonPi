import { GoogleAnalyticsTracker } from './../../../common/tracking/google-analytics-tracker.provider';
import { PlayerActions } from './../../../common/player/player.actions';
import { Store } from '@ngrx/store';
import { Component, ViewChild } from '@angular/core';
import { AppState } from '../../../app/app.state';

@Component({
	selector: 'navbar-search',
	template: `
	<ion-item>
		<ion-input
			#navbarsearch
			type="text"
			placeholder="Search track or game…"
			(keyup)="changedInput($event)"
			(blur)="blurred($event)">
		</ion-input>
	</ion-item>
	`
})
export class NavbarSearch {

	@ViewChild('navbarsearch') navbarSearch;

	constructor(
		private store: Store<AppState>,
		private playerActions: PlayerActions,
		private googleAnalyticsTracker: GoogleAnalyticsTracker,
	) {
		// bind cmd + f / ctrl + f to automatically focus on the search input
		window.addEventListener('keydown', (evt) => {
			if ((evt.ctrlKey || evt.metaKey) && evt.keyCode === 70) {
				evt.preventDefault();
				this.navbarSearch.setFocus();
			}
		});
	}

	/**
	 * every keystroke updates the filter.
	 *
	 * @param evt {Event}
	 */
	changedInput(evt) {
		if (evt.keyCode === 27) { // escape key
			evt.target.blur();
		} else {
			const value = evt.target.value;
			this.store.dispatch(this.playerActions.setSearchFiter(value));
		}
	}

	/**
	 * blur event is treated as a successful search.
	 * searches that are done, but result in a bounce are therefore not tracked.
	 */
	blurred(evt) {
		const value = evt.target.value;
		if (value) {
			this.googleAnalyticsTracker.trackEvent('player', {
				action: 'searched',
				label: value
			});
		}
	}
}
