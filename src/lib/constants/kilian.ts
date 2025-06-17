import type { Persona } from '$lib/interfaces/persona.interfaces';

export const KILIAN: Persona = {
	id: 'kilian',
	name: 'Kilian',
	subheading: 'Studieren mit motorischer Beeinträchtigung',
	tags: [
		{ content: 'Eingabehilfen', lang: 'de' },
		{ content: 'Zeitmanagement', lang: 'de' },
		{ content: 'Erschöpfung', lang: 'de' },
		{ content: 'Orthesen', lang: 'de' }
	],
	age: 21,
	hobbies: 'Blog über persönliche Reise-Erfahrungen',
	study: 'Anglistik',
	pronouns: 'Er / ihm',
	disability: 'Zerebralparese',
	disablityCategory: 'Motorische Beeinträchtigung',
	disabilityIcon: 'wheelchair',
	visualDescription:
		'Guten Tag, mein Name ist Kilian. Mein Outfit heute ist sehr klassisch: graue Anzughose, hellgraues Hemd und darüber ein blauer Wollpullover. Zu meinem Aktiv-Rollstuhl mit dunkelblauem Metallgestänge trage ich schwarze Brogues. Meine roten Haare trag ich kurz. Meine Augen sind sehr blau und meine Haut sehr hell. Meine rechte Hand hat eine sichtbare Lähmung.',
	metaDescription:
		'Kilian zeigt Ihnen, wie man eine Vorlesung barrierefreier für Menschen mit Mobilitätseinschränkungen gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Inklusion, Vorlesung, Studium mit Mobilitätseinschränkung, Zerebralparese, Rollstuhl, bauliche Barrierefreiheit, assistive Technologien'
};
