import type { Week } from './week.interfaces';

export interface Persona {
	id: string;
	name: string;
	tags: { content: string; lang: string }[];
	age: number;
	hobbies: string;
	study: string;
	disability: string;
	disability_icon: string;
	nextPersona: string;
	previousPersona: string;
	week?: Week; // needed for Week.svelte
	visualDescription: string;
	metaDescription: string;
	metaKeywords: string;
}
