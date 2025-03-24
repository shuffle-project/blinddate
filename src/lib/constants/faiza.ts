import type { Persona } from '$lib/interfaces/persona.interfaces';

export const FAIZA: Persona = {
	id: 'faiza',
	name: 'Faiza',
	subheading: 'Studieren mit Pflegeverantwortung',
	tags: [
		{ content: 'Transparenz', lang: 'de' },
		{ content: 'Nebenjob', lang: 'de' },
		{ content: 'Familiäre Verpflichtung', lang: 'de' }
	],
	age: 32,
	hobbies: 'Lesen und Eishockey',
	study: 'Informatik im Bachelor',
	pronouns: 'Sie / ihr',
	disability: 'Studieren mit Kind',
	disabilityIcon: 'bottle',
	visualDescription:
		'Hi, ich bin Faiza. Der Name steht im arabischen für die Gewinnerin, wobei ich das aktuell mit meiner Leggins, den Sneakern und der weiten Strickjacke vielleicht nicht ausstrahle. Bequem und praktisch ist das Outfit aber alle mal. Meine braunen Haare habe ich zu zwei Zöpfen zusammengebunden und ja, ich bin gigantische 157cm groß. ',
	metaDescription:
		'Faiza zeigt Ihnen, wie man eine Vorlesung barrierefreier für Studierende mit Kind gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Studium mit Kind, familienfreundliche Hochschule, Mutter, Vater, Eltern, Familie und Studium, Pflegeverantwortung',
	facts: [
		{
			content: {
				type: 'enumeration',
				text: '20 Prozent der Studierenden haben eine Pflegeverantwortung <br/> (8% Kinder, 12% ältere Menschen) ',
				decoration: { amount: 20, total: 100 }
			},
			source: {
				title: 'Die Studierendenbefragung in Deutschland: 22. Sozialerhebung',
				titleLang: 'de',
				url: 'https://www.bmbf.de/SharedDocs/Publikationen/de/bmbf/4/31790_22_Sozialerhebung_2021.html'
			}
		},
		{
			content: {
				type: 'enumeration',
				text: 'Fünf Prozent der Studierenden, die ihr Studium unterbrochen haben, taten dies aufgrund der Pflege von Angehörigen (Stand 2016)',
				decoration: { amount: 5, total: 100 }
			},
			source: {
				title: 'Die Studierendenbefragung in Deutschland: 21. Sozialerhebung',
				titleLang: 'de',
				url: 'https://www.bmbf.de/SharedDocs/Publikationen/de/bmbf/4/31338_21_Sozialerhebung_2016_Zusammenfassung.pdf?__blob=publicationFile&v=3'
			}
		},
		{
			content: {
				type: 'enumeration',
				text: 'Fast 30 Prozent der Studierenden mit Pflegeverantwortung wählen ein Teilzeitstudium (16,7% Kinder, 13% ältere Menschen)',
				decoration: { amount: 30, total: 100 }
			},
			source: {
				title: 'Die Studierendenbefragung in Deutschland: 22. Sozialerhebung',
				titleLang: 'de',
				url: 'https://www.bmbf.de/SharedDocs/Publikationen/de/bmbf/4/31790_22_Sozialerhebung_2021.html'
			}
		},
		{
			content: {
				type: 'enumeration',
				text: 'Über 80 % der Kinderlosen studieren in Präsenz, aber nur 55 % der Studierenden mit Kind(ern)',
				decoration: { amount: 55, total: 100 }
			},
			source: {
				title: 'Die Studierendenbefragung in Deutschland: 22. Sozialerhebung',
				titleLang: 'de',
				url: 'https://www.bmbf.de/SharedDocs/Publikationen/de/bmbf/4/31790_22_Sozialerhebung_2021.html'
			}
		}
	]
};
