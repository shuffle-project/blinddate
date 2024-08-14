import CareResponsibility from '$lib/components/disabilityExplanation/CareResponsibility.svelte';
import type { Persona } from '$lib/interfaces/persona.interfaces';

export const FAIZA: Persona = {
	id: 'faiza',
	name: 'Faiza',
	subheading: 'Studieren mit Kind',
	tags: [
		{ content: 'Transparenz', lang: 'de' },
		{ content: 'Nebenjob', lang: 'de' },
		{ content: 'Familiäre Verpflichtung', lang: 'de' }
	],
	age: 32,
	hobbies: 'Lesen und Eishockey',
	study: 'Informatik im Bachelor',
	pronouns: 'Sie / ihr',
	disability: 'Pflegeverantwortung',
	disabilityIcon: 'bottle',
	disabilityExplanation: CareResponsibility,
	previousPersona: 'Gabriel',
	nextPersona: 'Maxi',
	visualDescription:
		'Hi, ich bin Faiza. Der Name steht im arabischen für die Gewinnerin, wobei ich das aktuell mit meiner Leggins, den Sneakern und der weiten Strickjacke vielleicht nicht ausstrahle. Bequem und praktisch ist das Outfit aber alle mal. Meine braunen Haare habe ich zu zwei Zöpfen zusammengebunden und ja, ich bin gigantische 157cm groß. ',
	metaDescription:
		'Faiza zeigt Ihnen, wie man eine Vorlesung barrierefreier für Studierende mit Kind gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Studium mit Kind, familienfreundliche Hochschule, Mutter, Vater, Eltern, Familie und Studium, Pflegeverantwortung'
};
