import type { Persona } from '../interfaces/persona.interfaces';

export const MAXI: Persona = {
	id: 'maxi',
	name: 'Maxi',
	tags: [
		{ content: 'Depression', lang: 'de' },
		{ content: 'Unsichtbare Beeinträchtigung', lang: 'de' },
		{ content: 'Beratung', lang: 'de' },
		{ content: 'Erschöpfung', lang: 'de' },
		{ content: 'Trigger', lang: 'de' }
	],
	age: 29,
	hobbies: 'Skaten und Naturfotografie',
	study: 'Architektur im Master',
	disability: 'Psychische Erkrankung',
	disability_icon: 'mental-health',
	previousPersona: 'Gabriel',
	nextPersona: 'Hannah',
	visualDescription:
		'Hallo, ich bin Maxi. Dass ich gerne skateboarde, seht ihr schon an meinen Klamotten. Ich trage weite Jeans, flache Turnschuhe und einen weiten Kapuzenpulli. Ich bin eine weiße Person. Meine Haare sind jetzt gerade pink gefärbt und kurz. Sie gucken unter meinem schwarzen Beanie hervor . Ich bin relativ klein und ... irgendwie weder dick noch dünn. ',
	metaDescription:
		'Maxi zeigt Ihnen, wie man eine Vorlesung barrierefreier für Menschen mit psychischen Erkrankungen gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Inklusion, Vorlesung, Unsichtbare Beeinträchtigung, Trigger, Studium mit psychischer Krankheit, Depression, Barrierefreie Lehre'
};
