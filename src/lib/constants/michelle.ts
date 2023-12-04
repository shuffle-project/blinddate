import MorbusCrohn from '$lib/components/disabilityExplanation/MorbusCrohn.svelte';
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
			activity: 'Lorem Ipsum 1',
			smiley: 'sad',
			time: '9:45 Uhr',
			text_happy: 'Lorem Ipsum',
			text_sad: 'Lorem Ipsum'
		},
		{
			day: 'Di',
			dayFull: 'Dienstag',
			date: 10,
			activity: 'Lorem Ipsum 2',
			smiley: 'sad',
			time: '9:45 Uhr',
			text_happy: 'Lorem Ipsum',
			text_sad: 'Lorem Ipsum'
		},
		{
			day: 'Mi',
			dayFull: 'Mittwoch',
			date: 10,
			activity: 'Lorem Ipsum 3',
			smiley: 'sad',
			time: '9:45 Uhr',
			text_happy: 'Lorem Ipsum',
			text_sad: 'Lorem Ipsum'
		},
		{
			day: 'Do',
			dayFull: 'Donnerstag',
			date: 10,
			activity: 'Lorem Ipsum 4',
			smiley: 'sad',
			time: '9:45 Uhr',
			text_happy: 'Lorem Ipsum',
			text_sad: 'Lorem Ipsum'
		},
		{
			day: 'Fr',
			dayFull: 'Freitag',
			date: 10,
			activity: 'Lorem Ipsum 5',
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
		{ content: 'Chronisch entzündliche Darmerkrankungen', lang: 'de' },
		{ content: 'Selbsthilfe', lang: 'de' },
		{ content: 'Spoon theory', lang: 'en' },
		{ content: 'Unsichtbare Beeinträchtigung', lang: 'de' }
	],
	age: 19,
	hobbies: 'Schlagzeug spielen und Kleidung nähen',
	study: 'Popmusikdesign',
	disability: 'Morbus Crohn',
	disabilityIcon: 'spoon',
	disabilityExplanation: MorbusCrohn,
	previousPersona: 'Maxi',
	nextPersona: 'Aleksandr',
	week: michellesWeek,
	visualDescription:
		'Hey, ich bin Chelle.  Ich habe schwarze, lange Haare, die zu Dreads geflochten sind. Heute trage ich eine Mom-Jeans und ein orangenes Kurzarm-Shirt, das ich selbst genäht habe. Dazu natürlich die passenden Chucks. Ich trage leichtes Make-Up, das sehr natürlich aussieht. Ich bin eine ziemliche Bohnenstange, das liegt am Morbus Crohn. Und ich bin eine Person of Color.',
	metaDescription:
		'Michelle zeigt Ihnen, wie man eine Vorlesung barrierefreier für Menschen mit chronischen Erkrankungen gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Inklusion, Vorlesung, Unsichtbare Beeinträchtigung, Studium mit chronischer Krankheit, Morbus Crohn, CED, Spoon Theory, Barrierefreie Lehre'
};
