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

export interface Persona {
	id: PersonaID;
	name: 'Maxi' | 'Michelle' | 'Aleksandr' | 'Hannah' | 'Kilian' | 'Gabriel' | 'Faiza' | 'Oliver';
	subheading: string;
	tags: { content: string; lang: string }[];
	age: number;
	hobbies: string;
	study: string;
	pronouns: 'They / them' | 'Sie / ihr' | 'Er / ihm';
	disability: string;
	disabilityIcon: string;
	week?: Week;
	visualDescription: string;
	metaDescription: string;
	metaKeywords: string;
	facts?: FactSlide[];
}
