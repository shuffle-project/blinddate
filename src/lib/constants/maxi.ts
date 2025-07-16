import type { Persona } from '$lib/interfaces/persona.interfaces';

export const MAXI = {
	id: 'maxi',
	name: 'Maxi',
	subheading: 'Studieren mit psychischer Erkrankung',
	tags: [
		{ label: 'Erschöpfung', id: 'erschoepfung', lang: 'de' },
		{ label: 'Trigger', id: 'trigger', lang: 'de' },
		{ label: 'Unsichtbare Beeinträchtigung', id: 'unsichtbare-beeintraechtigung', lang: 'de' },
		{ label: 'Beratung', id: 'beratung', lang: 'de' }
	],
	age: 29,
	hobbies: 'Skaten und Naturfotografie',
	study: 'Architektur im Master',
	pronouns: 'They / them',
	disability: 'Depressionen',
	disablityCategory: 'Psychische Erkrankung',
	disabilityIcon: 'mental-health',
	visualDescription:
		'Hallo, ich bin Maxi. Dass ich gerne skateboarde, seht ihr schon an meinen Klamotten. Ich trage weite Jeans, flache Turnschuhe und einen weiten Kapuzenpulli. Auf meinem Pulli habe ich einen Button in den Farben der nichtbinären Geschlechtsidentität. Ich bin eine weiße Person. Meine Haare sind jetzt gerade pink gefärbt und kurz. Sie gucken unter meinem schwarzen Beanie hervor. Ich bin relativ klein und ... irgendwie weder dick noch dünn.',
	metaDescription:
		'Maxi zeigt Ihnen, wie man eine Vorlesung barrierefreier für Menschen mit psychischen Erkrankungen gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Inklusion, Vorlesung, Unsichtbare Beeinträchtigung, Trigger, Studium mit psychischer Krankheit, Depression, Barrierefreie Lehre'
} as const satisfies Persona;
