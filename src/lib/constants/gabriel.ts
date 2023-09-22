import type { Persona } from '../interfaces/persona.interfaces';

export const GABRIEL: Persona = {
	id: 'gabriel',
	name: 'Gabriel',
	tags: [
		{ content: 'Glaukom', lang: 'de' },
		{ content: 'Screenreader', lang: 'en' },
		{ content: 'Vergrößerung', lang: 'de' },
		{ content: 'Dokumentenstruktur', lang: 'de' },
		{ content: 'Blindheit', lang: 'de' }
	],
	age: 27,
	study: 'Soziale Arbeit im Master',
	hobbies: 'Klavier spielen, Podcast hören, Freunde treffen',
	disability: 'Grüner Star (Glaukom)',
	disability_icon: 'glaucoma',
	previousPersona: 'Hannah',
	nextPersona: 'Maxi',
	visualDescription:
		'Hi, ich bin Gabriel. Ich bin 1,80 m groß und habe lockige, braune Haare. Heute trage ich ein orangefarbenes Hemd über einem weißen T-Shirt. Meistens krempel ich die Ärmel hoch bis zu den Ellenbogen. Und eigentlich habe ich auch immer eine Sonnenbrille dabei, die ich an den Kragen vom T-Shirt hänge.',
	shortVisualDescription:
		'Er hat braune lockige Haare und dazu ein knall-leuchtendes orangenes Hemd sowie eine Sonnenbrille, die er mit sich trägt.'
};
