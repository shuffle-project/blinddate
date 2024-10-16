import LRSandADHS from '$lib/components/disabilityExplanation/LRSandADHS.svelte';
import type { Persona } from '$lib/interfaces/persona.interfaces';
// TODO OLIVER - add meta image
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
	disabilityExplanation: LRSandADHS,
	previousPersona: 'Faiza',
	nextPersona: 'Maxi',
	visualDescription: '',
	metaDescription: '',
	metaKeywords:
		'Barrierefreiheit, Inklusion, Vorlesung, Unsichtbare Beeinträchtigung, ADHS, Legasthenie, Lese-Rechtschreib-Schwäche, Hyperaktivität, Studium mit ADHS, Neurodiversität'
};
