import Glaucoma from '$lib/components/disabilityExplanation/Glaucoma.svelte';
import type { Persona } from '../interfaces/persona.interfaces';

export const GABRIEL: Persona = {
	id: 'gabriel',
	name: 'Gabriel',
	subheading: 'Studieren mit Sehbeeinträchtigung',
	tags: [
		{ content: 'Screenreader', lang: 'en' },
		{ content: 'Vergrößerung', lang: 'de' },
		{ content: 'Dokumentenstruktur', lang: 'de' },
		{ content: 'Blindheit', lang: 'de' }
	],
	age: 27,
	study: 'Soziale Arbeit im Master',
	hobbies: 'Klavier spielen, Podcast hören, Freunde treffen',
	pronouns: 'Er / ihm',
	disability: 'Grüner Star (Glaukom)',
	disabilityIcon: 'glaucoma',
	disabilityExplanation: Glaucoma,
	previousPersona: 'Kilian',
	nextPersona: 'Faiza',
	visualDescription:
		'Hi, ich bin Gabriel. Ich bin 1,80 m groß und habe lockige, braune Haare. Heute trage ich ein orangefarbenes Hemd über einem weißen T-Shirt. Meistens krempel ich die Ärmel hoch bis zu den Ellenbogen. Und eigentlich habe ich auch immer eine Sonnenbrille dabei, die ich an den Kragen vom T-Shirt hänge.',
	metaDescription:
		'Gabriel zeigt Ihnen, wie man eine Vorlesung barrierefreier für Menschen mit Sehbehinderung gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Inklusion, Vorlesung, Didaktik, Screenreader, Studium mit Sehbehinderung, Barrierefreie Lehre, assistive Technologien'
};
