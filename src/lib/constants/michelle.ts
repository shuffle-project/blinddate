import type { Week } from '$lib/interfaces/week.interfaces';
import type { Persona } from '../interfaces/persona.interfaces';

const michellesWeek: Week = {
	month: 'Dezember??',
	year: 1073,
	days: [
		{
			day: 'Mo',
			dayFull: 'Montag',
			date: 1,
			activity: 'Lorem Ipsum',
			smiley: 'sad',
			time: '9:45 Uhr',
			text_happy: 'Lorem Ipsum',
			text_sad: 'Lorem Ipsum'
		},
		{
			day: 'Mo',
			dayFull: 'Montag',
			date: 10,
			activity: 'Lorem Ipsum',
			smiley: 'sad',
			time: '9:45 Uhr',
			text_happy: 'Lorem Ipsum',
			text_sad: 'Lorem Ipsum'
		},
		{
			day: 'Mo',
			dayFull: 'Montag',
			date: 10,
			activity: 'Lorem Ipsum',
			smiley: 'sad',
			time: '9:45 Uhr',
			text_happy: 'Lorem Ipsum',
			text_sad: 'Lorem Ipsum'
		},
		{
			day: 'Mo',
			dayFull: 'Montag',
			date: 10,
			activity: 'Lorem Ipsum',
			smiley: 'sad',
			time: '9:45 Uhr',
			text_happy: 'Lorem Ipsum',
			text_sad: 'Lorem Ipsum'
		},
		{
			day: 'Mo',
			dayFull: 'Montag',
			date: 10,
			activity: 'Lorem Ipsum',
			smiley: 'sad',
			time: '9:45 Uhr',
			text_happy: 'Lorem Ipsum',
			text_sad: 'Lorem Ipsum'
		}
	]
};

export const MICHELLE: Persona = {
	id: 'michelle',
	name: 'Michelle',
	tags: [
		{ content: 'CED', lang: 'de' },
		{ content: 'Selbsthilfe', lang: 'de' },
		{ content: 'Spoon theory', lang: 'en' },
		{ content: 'Unsichtbare Beeinträchtigung', lang: 'de' },
		{ content: 'Asynchrone Lehre', lang: 'de' }
	],
	age: 19,
	hobbies: 'Schlagzeug spielen und Kleidung nähen',
	study: 'Popmusikdesign',
	disability: 'Morbus Crohn',
	disability_icon: 'spoon',
	previousPersona: 'Hannah',
	nextPersona: 'Gabriel',
	week: michellesWeek,
	visualDescription: '',
	shortVisualDescription: ''
};
