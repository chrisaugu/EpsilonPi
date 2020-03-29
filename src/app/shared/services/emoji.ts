import { Injectable } from "@angular/core";
import { Emoji } from "./emoji";

@Injectable()
export class CardService {
	private emoji = new Array<Emoji>(
		{ code: '', color: 'b1' },
		{ code: '', color: 'b2' },
		{ code: '', color: 'b3' },
		{ code: '', color: 'b4' },
		{ code: '', color: 'b5' },
		{ code: '', color: 'b5' },
		{ code: '', color: 'b1' },
		{ code: '', color: 'b2' },
		{ code: '', color: 'b3' },
		{ code: '', color: 'b4' },
		{ code: '', color: 'b5' },
		{ code: '', color: 'b6' }
	);
	getEmoji(): Emoji[] {
		return this.emoji;
	}
}