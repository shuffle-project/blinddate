import type { Persona } from '$lib/interfaces/persona.interfaces';

export const OLIVER = {
	id: 'oliver',
	name: 'Oliver',
	subheading: 'Studieren mit Teilleistungsstörung',
	tags: [
		{ label: 'Rechtschreibkorrektur', id: 'rechtschreibkorrektur', lang: 'de' },
		{ label: 'Vorlesefunktion', id: 'vorlesefunktion', lang: 'de' },
		{ label: 'Vorurteile', id: 'vorurteile', lang: 'de' },
		{ label: 'Ablenkung', id: 'ablenkung', lang: 'de' }
	],
	age: 31,
	hobbies: 'Musik jammen und mit Freunden kochen',
	study: 'Lebensmittelchemie im Master',
	pronouns: 'Er / ihm',
	disability: 'LRS & ADHS',
	disablityCategory: 'Teilleistungsstörung',
	disabilityIcon: 'lrs_adhs',
	visualDescription:
		'Hey, ich heiße Oliver. Meine dunkelblonden, langen Haare trage ich in einem lockeren Männerdutt, damit sie mich nicht stören. Um meinen Hals habe ich eine Kette, und an meinen Handgelenken mehrere Armbänder. Heute habe ich ein schlichtes braunes T-Shirt an, und darüber meinen Laborkittel. Der ist Pflicht, wenn ich im Uni-Chemielabor bin – und gehört inzwischen auch zu meinem Look.',
	metaDescription:
		'Oliver zeigt Ihnen, wie man eine Vorlesung barrierefreier für Menschen mit Teilleistungsstörung gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Inklusion, Vorlesung, Unsichtbare Beeinträchtigung, ADHS, Legasthenie, Lese-Rechtschreib-Schwäche, Hyperaktivität, Studium mit ADHS, Neurodiversität, Teilleistungsstörung',
	facts: [
		{
			source: {
				title: 'Die Studierendenbefragung in Deutschland: best3',
				titleLang: 'de',
				url: 'https://www.studierendenwerke.de/beitrag/die-studierendenbefragung-in-deutschland-best3-studieren-mit-einer-gesundheitlichen-beeintraechtigung'
			},
			content: {
				type: 'boldText',
				boldText: '3,7%',
				normalText:
					'der Studierenden haben eine Teilleistungsstörung (=Legasthenie oder Dyskalkulie)'
			}
		},
		{
			source: {
				title: 'Die Studierendenbefragung in Deutschland: best3',
				titleLang: 'de',
				url: 'https://www.studierendenwerke.de/beitrag/die-studierendenbefragung-in-deutschland-best3-studieren-mit-einer-gesundheitlichen-beeintraechtigung'
			},
			content: {
				type: 'boldText',
				boldText: '52,4%',
				normalText:
					'der Studierenden mit Teilleistungsstörungen geben an, dass die Symptome von außen durch Dritte nicht wahrnehmbar sind'
			}
		},
		{
			source: {
				title: 'Die Studierendenbefragung in Deutschland: best3',
				titleLang: 'de',
				url: 'https://www.studierendenwerke.de/beitrag/die-studierendenbefragung-in-deutschland-best3-studieren-mit-einer-gesundheitlichen-beeintraechtigung'
			},
			content: {
				type: 'boldText',
				boldText: '37,8%',
				normalText:
					'der Studierenden mit Teilleistungsstörungen berichten, dass ihnen Leistungen nicht zugetraut wurden'
			}
		}
	]
} as const satisfies Persona;
