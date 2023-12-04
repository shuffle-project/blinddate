import Ass from '$lib/components/disabilityExplanation/ASS.svelte';
import type { Persona } from '$lib/interfaces/persona.interfaces';

export const ALEKSANDR: Persona = {
	id: 'aleksandr',
	name: 'Aleksandr',
	tags: [
		{ content: 'Autismus-Spektrum-Störung', lang: 'de' },
		{ content: 'Stimming', lang: 'en' },
		{ content: 'Masking', lang: 'en' },
		{ content: 'Reizregulation', lang: 'de' },
		{ content: 'Neurodivergent', lang: 'de' }
	],
	age: 23,
	hobbies: 'Joggen, Kraftsport und strategische Brettspiele',
	study: 'Neurowissenschaften',
	disability: 'Autismus-Spektrum-Störung (ASS)',
	disabilityIcon: 'sunflower',
	disabilityExplanation: Ass,
	previousPersona: 'Michelle',
	nextPersona: 'Hannah',
	visualDescription:
		'Hallo. Mein Name ist Aleksandr, aber ich werde Sasha genannt. Ich bin 1,95cm groß und wiege 98kg. Ich bin kräftig. Ich habe dunkelbraune Haare. Sie sind kurz rasiert. Mein Bart auch.  Heute trage ich ein T-Shirt mit einem Siedler von Catan Motiv. Dazu eine weite Cargo Hose in einem dunklen Beige-Ton. Da ich Schnürsenkel nicht mag, trage ich immer Slipper. Meine noise-cancelling Kopfhörer habe ich mir um den Nacken gelegt',
	metaDescription:
		'Aleksandr zeigt Ihnen, wie man eine Vorlesung barrierefreier für Menschen  mit Autismus gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Inklusion, Vorlesung, Unsichtbare Beeinträchtigung, Studium als Autist, Studium mit ASD, Neurodiversität, Autistisches Spektrum'
};
