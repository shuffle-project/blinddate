import type { Persona } from '$lib/interfaces/persona.interfaces';

export const OLIVER: Persona = {
	id: 'oliver',
	name: 'Oliver',
	subheading: 'Studieren mit Teilleistungsstörung',
	tags: [
		{ content: 'Unterstützungssoftware', lang: 'de' },
		{ content: 'Konzentration', lang: 'de' },
		{ content: 'Mitschreibassistenz', lang: 'de' }
	],
	age: 31,
	hobbies: 'Musik jammen und mit Freunden kochen',
	study: 'Lebensmittelchemie im Master',
	pronouns: 'Er / ihm',
	disability: 'LRS & ADHS',
	disabilityIcon: 'lrs_adhs',
	previousPersona: 'Faiza',
	nextPersona: 'Maxi',
	// TODO
	visualDescription: '',
	metaDescription:
		'Oliver zeigt Ihnen, wie man eine Vorlesung barrierefreier für Menschen mit Teilleistungsstörung gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Inklusion, Vorlesung, Unsichtbare Beeinträchtigung, ADHS, Legasthenie, Lese-Rechtschreib-Schwäche, Hyperaktivität, Studium mit ADHS, Neurodiversität',
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
};
