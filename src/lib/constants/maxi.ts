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
	hobbies: 'Skaten und Naturfotografie',
	study: 'Architektur im Master',
	disability: 'Psychische Erkrankung',
	disability_icon: 'mental-health',
	previousPersona: 'Gabriel',
	nextPersona: 'Hannah',
	visualDescription: '',
	shortVisualDescription: ''
};
