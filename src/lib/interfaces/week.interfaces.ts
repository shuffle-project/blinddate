export interface Week {
	month: string;
	year: number;
	days: Day[];
}

export interface Day {
	day: string;
	dayFull: string;
	date: number;
	activity: string;
	smiley: 'sad' | 'happy';
	time: string;
	text_happy: string;
	text_sad: string;
}
