import type { ComponentType } from 'svelte';
import type { FactSlide } from './factSlide.interface';
import type { Week } from './week.interfaces';

export interface Persona {
	id: string;
	name: string;
	subheading: string;
	tags: { content: string; lang: string }[];
	age: number;
	hobbies: string;
	study: string;
	pronouns: 'They / them' | 'Sie / ihr' | 'Er / ihm';
	disability: string;
	disabilityIcon: string;
	disabilityExplanation: ComponentType;
	nextPersona: string;
	previousPersona: string;
	week?: Week;
	visualDescription: string;
	metaDescription: string;
	metaKeywords: string;
	facts?: FactSlide[];
}
