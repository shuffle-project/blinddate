import type { ComponentType } from 'svelte';
import type { Week } from './week.interfaces';

export interface Persona {
	id: string;
	name: string;
	tags: { content: string; lang: string }[];
	age: number;
	hobbies: string;
	study: string;
	disability: string;
	disabilityIcon: string;
	disabilityExplanation: ComponentType;
	nextPersona: string;
	previousPersona: string;
	week?: Week;
	visualDescription: string;
	metaDescription: string;
	metaKeywords: string;
}
