import type { FactSlide } from './factSlide.interface';
import type { Week } from './week.interfaces';

export type PersonaID =
	| 'maxi'
	| 'michelle'
	| 'aleksandr'
	| 'hannah'
	| 'kilian'
	| 'gabriel'
	| 'faiza'
	| 'oliver';

export type PersonaName =
	| 'Maxi'
	| 'Michelle'
	| 'Aleksandr'
	| 'Hannah'
	| 'Kilian'
	| 'Gabriel'
	| 'Faiza'
	| 'Oliver';

export interface Persona {
	id: PersonaID;
	name: PersonaName;
	subheading: string;
	tags: { label: string; id: string; lang: string }[];
	age: number;
	hobbies: string;
	study: string;
	pronouns: 'They / them' | 'Sie / ihr' | 'Er / ihm';
	disability: string;
	disablityCategory: string;
	disabilityIcon: string;
	week?: Week;
	visualDescription: string;
	metaDescription: string;
	metaKeywords: string;
	facts?: FactSlide[];
}
