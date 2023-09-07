import type { Persona } from '../interfaces/persona.interfaces';

export const MAXI: Persona = {
	id: 'maxi',
	name: 'Maxi',
	tags: [
		{ content: 'Depression', lang: 'de' },
		{ content: 'Unsichtbare Beeinträchtigung', lang: 'de' },
		{ content: 'Beratung', lang: 'de' },
		{ content: 'Erschöpfung', lang: 'de' },
		{ content: 'Trigger', lang: 'de' }
	],
	age: 29,
	hobbies: 'Serien schauen, Skaten, Fotografieren und Zeit in der Natur verbringen',
	study: 'Architektur im Master',
	disability: 'Schwere Depression & Angststörung',
	disability_icon: 'mental-health',
	previousPersona: 'Hannah',
	nextPersona: 'Gabriel',
	visualDescription: '',
	shortVisualDescription: ''
};
