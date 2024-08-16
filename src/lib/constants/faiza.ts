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
		'Barrierefreiheit, Studium mit Kind, familienfreundliche Hochschule, Mutter, Vater, Eltern, Familie und Studium, Pflegeverantwortung',
	facts: [
		{
			text: 'Unter den Studierenden liegt der Anteil Pflegender laut einer Sozialerhebung von 2023 bei rund 12 Prozent. ',
			source: {
				title: 'CHE kurz + kompakt – Studieren und Angehörige pflegen',
				titleLang: 'de',
				url: 'https://www.che.de/download/pflegende-studierende/'
			},
			decoration: { amount: 12, total: 100 }
		},
		{
			text: 'Fünf Prozent aller Studierenden, die ihr Studium unterbrochen haben, haben dies wegen der Pflege von Angehörigen getan (Stand 2016). ',
			source: {
				title: 'CHE kurz + kompakt – Studieren und Angehörige pflegen',
				titleLang: 'de',
				url: 'https://www.che.de/download/pflegende-studierende/'
			},
			decoration: { amount: 5, total: 100 }
		}
	]
};
