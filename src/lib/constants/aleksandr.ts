import type { Persona } from '$lib/interfaces/persona.interfaces';

export const ALEKSANDR = {
	id: 'aleksandr',
	name: 'Aleksandr',
	subheading: 'Studieren mit Autismus-Spektrum-Störung',
	tags: [
		{ label: 'Stimming', id: 'stimming', lang: 'en' },
		{ label: 'Masking', id: 'masking', lang: 'en' },
		{ label: 'Reizregulation', id: 'reizregulation', lang: 'de' },
		{ label: 'Mimik', id: 'mimik', lang: 'de' }
	],
	age: 23,
	hobbies: 'Joggen, Kraftsport und strategische Brettspiele',
	study: 'Neurowissenschaften',
	pronouns: 'Er / ihm',
	disability: 'Autismus-Spektrum-Störung',
	disablityCategory: 'Autismus-Spektrum-Störung',
	disabilityIcon: 'sunflower',
	visualDescription:
		'Hallo. Mein Name ist Aleksandr, aber ich werde Sasha genannt. Ich bin 1,95cm groß und wiege 98kg. Ich bin kräftig. Ich habe dunkelbraune Haare. Sie sind kurz rasiert. Mein Bart auch.  Heute trage ich ein T-Shirt mit einem Siedler von Catan Motiv. Dazu eine weite Cargo Hose in einem dunklen Beige-Ton. Da ich Schnürsenkel nicht mag, trage ich immer Slipper. Meine noise-cancelling Kopfhörer habe ich mir um den Nacken gelegt',
	metaDescription:
		'Aleksandr zeigt Ihnen, wie man eine Vorlesung barrierefreier für Menschen auf dem Autismus-Spektrum gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Inklusion, Vorlesung, Unsichtbare Beeinträchtigung, Studium als Autist, Studium mit ASD, Neurodiversität, Autismus-Spektrum'
} as const satisfies Persona;
