import type { Persona } from '../interfaces/persona.interfaces';
import type { Week } from '../interfaces/week.interfaces';

const hannahsWeek: Week = {
	month: 'Oktober',
	year: 2022,
	days: [
		{
			day: 'Mo',
			dayFull: 'Montag',
			date: 10,
			activity: 'Lineare Algebra',
			smiley: 'sad',
			time: '9:45 Uhr',
			text_happy:
				'Hannah freut sich auf ihren Kurs in Linearer Algebra, da sie letztes Jahr in den Einführungskursen eine 1,3 bekommen hat. Sie sitzt bei ihren Freund*innen im hinteren Teil des Hörsaals und erhöht die Lautstärke ihrer Hörgeräte leicht. Der Dozent schaltet die FM-Anlage ein und hängt sich das Mikrofon um. Das ist wirklich gut, denn wenn der Dozent sich umdreht, um Diagramme an die Tafel zu zeichnen und sich von der Klasse abwendet, kann sie ihn immer noch deutlich hören. Der Dozent hat letzte Woche auch die Vorlesungsfolien auf ILIAS hochgeladen, so dass sie sich gut auf die Vorlesung vorbereitet fühlt.',
			text_sad:
				'Hannah freut sich auf ihren Kurs in Linearer Algebra, da sie letztes Jahr in den Einführungskursen eine 1,3 bekommen hat. Sie setzt sich in den vorderen Teil des Hörsaals und erhöhte die Lautstärke ihrer Hörgeräte leicht. Der Dozent hat leider nicht daran gedacht, die Höranlage zu benutzen und sich ein Mikrofon umzuhängen, weshalb Hannah die Vorlesung nicht sehr deutlich hören kann. Sie ist sich nicht sicher, ob sie ihn unterbrechen sollte, um ihn zu bitten, dies zu tun. Die Tonqualität verschlechtert sich zusätzlich, wenn der Dozent sich umdreht, um Diagramme an die Tafel zu zeichnen. So ist Hannah auch nicht in der Lage, den Schlüsselbegriffen zu folgen. Die Vorlesungsunterlagen sind auch nicht vor der Vorlesung hochgeladen worden. Eine Vorbereitung war daher nicht möglich. Sehr frustrierend!'
		},
		{
			day: 'Di',
			dayFull: 'Dienstag',
			date: 11,
			activity: 'Infoveranstaltung',
			smiley: 'sad',
			time: '17:45 Uhr',
			text_happy:
				'Heute findet eine online Infoveranstaltung zum kommenden Praktikumssemester statt. Hannah loggt sich ein und wartet auf die vortragende Person. Die Vortragende ist neben den eingeblendeten Folien gut erkennbar und sie verwendet ein externes Mikrofon, sodass Hannah sie gut verstehen kann. Zusätzlich lässt sich Hannah die Untertitel des Videokonferenzprogramms anzeigen, die live von Tutor*innen verbessert werden. Die anschließende Fragerunde wird von einer Tutorin moderiert und die Fragen werden zusätzlich schriftlich in den Chat gepostet. So kann Hannah allen Informationen folgen und sich auf die Bewerbungsphase für die Praktika vorbereiten.',
			text_sad:
				'Heute findet eine online Infoveranstaltung zum kommenden Praktikumssemester statt. Hannah loggt sich ein und wartet auf die vortragende Person. Leider hat die Vortragende ihre Kamera ausgeschaltet, sodass Hannah kein Mundbild erkennen kann. Außerdem scheint sie kein externes Mikrofon zu nutzen, da die Tonqualität sehr schlecht ist. Hannah lässt sich die automatischen Untertitel des Videokonferenzprogramms anzeigen und verbringt mehr Zeit damit, Begriffe zu erraten und über Fehler zu stolpern, als inhaltlich aufzupassen. Den Fragen, die anschließend gestellt werden, entnimmt sie, dass sie die Informationen, die nicht auf den Folien stehen, nicht vollständig aufnehmen konnte. Leider werden auch die Fragen nur mündlich gestellt, nicht moderiert und auch nicht schriftlich aufgenommen. Hannah hofft, dass eine*r ihrer Kommiliton*innen ihr Morgen alle wichtigen Zusatzinformationen mitteilen kann.'
		},
		{
			day: 'Mi',
			dayFull: 'Mittwoch',
			date: 12,
			activity: 'Tutorium',
			smiley: 'happy',
			time: '11:30 Uhr',
			text_happy:
				'Hannah ist ein wenig nervös vor ihrem zweiten Tutorium für den Kalkulationskurs. Sie hat fleißig an den Aufgaben gearbeitet, hat aber noch ein paar Fragen an den Tutor. Es sind nur 15 Studierende in der Gruppe und der Tutor achtet darauf, dass sich die Gruppe einander zuwendet und alle nacheinander sprechen. Hannah stellt ihre Fragen und kann ihre Notizen im Dokument notieren, das der Tutor jede Woche zur Vorbereitung auf das Tutorium verschickt.',
			text_sad:
				'Hannah ist ein wenig nervös vor ihrem zweiten Tutorium für den Kalkulationskurs. Sie hat viel an den Aufgaben gearbeitet, hat dennoch ein paar Fragen an den Tutor. Es sind nur 15 Studierende in der Gruppe. Das Tutorium ist wenig strukturiert und Fragen werden in Kleingruppen geklärt. Oft wird gleichzeitig gesprochen, was dazu führt, dass Hannah nicht immer den Erläuterungen und Fragen der anderen folgen kann. Daher stellt sie dieselbe Frage, wie ihr Kommilitone zuvor. Das ist für sie sehr unangenehm und deshalb zögert sie, weitere Fragen zu stellen. Ein Arbeitsblatt mit Beispielantworten wäre nützlich und Hannah erinnert den Tutor die zweite Woche in Folge daran, eines an die Gruppe zu schicken.'
		},
		{
			day: 'Do',
			dayFull: 'Donnerstag',
			date: 13,
			activity: 'Praktikum',
			smiley: 'sad',
			time: '8:00 Uhr',
			text_happy:
				'Hannah ist eine von 20 Studierenden im Labor für das Computerpraktikum. Sie müssen ein Arbeitsblatt bearbeiten, zu dem sie sich Videos mit Anweisungen ansehen müssen. Eine Tutorin ist da, um zusätzliche Fragen zu beantworten. Hannah verbindet ihre Hörgeräte schnell per Bluetooth mit dem Computer und legt los. Sie ist froh, dass die Videos mit Untertiteln versehen sind, sodass sie wählen kann, ob sie die Untertitel hören oder lesen möchte.',
			text_sad:
				'Hannah ist eine von 20 Studierenden im Labor für das Computerpraktikum. Sie müssen ein Arbeitsblatt bearbeiten, zu dem sie sich Videos mit Anleitungen ansehen. Eine Tutorin steht bereit, um zusätzliche Fragen zu beantworten. Hannah möchte ihre Hörgeräte über Bluetooth mit dem Computer verbinden, um den Ton direkt auf ihre Hörgeräte zu übertragen. Frustriert stellt sie fest, dass die Videos nicht mit Untertiteln versehen sind. Hannah muss die Videos langsam durchgehen und bei schlechtem Ton mehrmals zurückspulen. Im Gegensatz zu ihren Mitstudierenden kann sie das Arbeitsblatt nicht rechtzeitig abschließen.'
		},
		{
			day: 'Fr',
			dayFull: 'Freitag',
			date: 14,
			activity: 'Gruppenprojekt',
			smiley: 'happy',
			time: '11:30 Uhr',
			text_happy:
				'Hannah und drei andere Studierende haben ein Treffen mit einer Dozentin, um die Form der Präsentation ihres Gruppenprojekts zu besprechen. Bisher soll es eine mündliche Präsentation geben. Hannah fühlt sich unsicher vor dem gesamten Seminar zu sprechen, da ihre Aussprache nicht immer verständlich ist. Die Dozentin schlägt vor, dass sie ein Video mit Untertiteln für ihre Präsentation machen können, wenn sie das wollen. Hannah und ihre Gruppe stimmen zu und planen ihr Projekt.',
			text_sad:
				'Hannah und drei andere Studierende haben ein Treffen mit einer Dozentin, um die Form der Präsentation ihres Gruppenprojekts zu besprechen. Bisher soll es eine mündliche Präsentation geben. Hannah fühlt sich unsicher vor dem gesamten Seminar zu sprechen, da ihre Aussprache nicht immer verständlich ist. Daher fragt sie die Dozentin, ob sie und der Rest des Seminars auch ein Video mit Untertiteln für ihre Präsentation erstellen können. Leider akzeptiert die Dozentin diesen Vorschlag nicht.'
		}
	]
};

export const HANNAH: Persona = {
	id: 'hannah',
	name: 'Hannah',
	subheading: 'Studieren mit Hörbehinderung',
	tags: [
		{ content: 'Cochlea-Implantat', lang: 'de' },
		{ content: 'Untertitel', lang: 'de' },
		{ content: 'Gebärdensprache', lang: 'de' },
		{ content: 'Mundbild', lang: 'de' }
	],
	age: 25,
	hobbies: 'Handball spielen, Essen gehen, Filme und Serien schauen',
	study: 'Mathematik auf Lehramt',
	pronouns: 'Sie / ihr',
	disability: 'Hochgradige Schwerhörigkeit',
	disablityCategory: 'Hörbehinderung',
	disabilityIcon: 'ear',
	week: hannahsWeek,
	visualDescription:
		'Ich bin Hannah. Ich habe mittelblonde Haare, bin sportlich gebaut und knapp 1,80m groß. Meine Haare hab ich meistens zum Pferdeschwanz gebunden, so wie heute auch. Ich trage ein knielanges oranges Kleid mit kurzem Arm. Und an den Füßen noch weiße Sneaker.',
	metaDescription:
		'Hannah zeigt Ihnen, wie man eine Vorlesung barrierefreier für Menschen mit Hörbehinderung gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Inklusion, Vorlesung,  Hörbeeinträchtigung, Studium mit Hörbeeinträchtigung, Gebärdensprache, Cochlea-Implantat, Barrierefreie Lehre, assistive Technologien'
};
