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
				'Hannah freut sich auf ihren Kurs in Linearer Algebra, da sie letztes Jahr in den Einführungskursen eine 1,3 bekommen hat. Sie sitzt im vorderen Teil des Hörsaals und dreht die Lautstärke ihrer Hörgeräte ein wenig auf. Der Dozent erinnert sich daran, die FM-Anlage einzuschalten und sich das Mikrofon umzuhängen, sodass sie mit normaler Lautstärke zuhören kann. Das ist wirklich gut, denn wenn der Dozent sich umdreht, um Diagramme an die Tafel zu zeichnen, und sich von der Klasse abwendet, kann sie ihn immer noch deutlich hören. Der Dozent hat letzte Woche auch die Notizen in ILIAS veröffentlicht, so dass sie sich gut auf die Vorlesung vorbereitet fühlt.		',
			text_sad:
				'Hannah freut sich auf ihren Kurs in Linearer Algebra, da sie letztes Jahr in den Einführungskursen eine 1,3 bekommen hat. Sie setzt sich in den vorderen Teil des Hörsaals und dreht die Lautstärke ihrer Hörgeräte ein wenig auf. Der Dozent hat leider nicht daran gedacht, die Höranlage zu benutzen und sich ein Mikrofon umzuhängen, weshalb Hannah die Vorlesung nicht sehr deutlich hören kann. Sie ist sich nicht sicher, ob sie ihn unterbrechen sollte, um ihn zu bitten, dies zu tun. Die Töne sind noch weniger klar, wenn der Dozent sich umdreht, um Diagramme an die Tafel zu zeichnen und sich von der Klasse abwendet. So ist Hannah auch nicht in der Lage, den Schlüsselbegriffen zu folgen, weil die Vorlesungsunterlagen nicht vor der Vorlesung ausgehängt/geschickt worden waren. Eine Vorbereitung war so nicht möglich. Deshalb ist Hannah nicht in der Lage, einigen Teilen der Vorlesung zu folgen und fühlt sich frustriert'
		},
		{
			day: 'Di',
			dayFull: 'Dienstag',
			date: 11,
			activity: 'Gebärdensprachkurs',
			smiley: 'sad',
			time: '17:45 Uhr',
			text_happy:
				'Hannah kommt etwas früher zu ihrem Gebärdensprachkurs für Fortgeschrittene an der VHS, damit sie sich mit einigen ihrer Freund*innen unterhalten kann. Maria und Joachim, die den Kurs unterrichten, sind beide gesetzlich gehörlos und studieren ebenfalls an der Hochschule. Sie nutzen Gebärdensprachdolmetschende für ihre Seminare und Vorlesungen an der Hochschule. Hannah überlegt, im nächsten Semester einen Politikkurs bei ihnen zu belegen.',
			text_sad:
				'Hannah kommt etwas früher zu ihrem Gebärdensprachkurs für Fortgeschrittene an der VHS, damit sie sich mit einigen ihrer Freund*innen unterhalten kann. Maria und Joachim, die den Kurs unterrichten, sind beide gesetzlich gehörlos und studieren ebenfalls an der Hochschule. Dort setzen sie Gebärdensprachdolmetschende für ihre Seminare und Vorlesungen ein. Sie erzählen Hannah von ihrer Frustration darüber, dass ihre Dozent*innen die Materialien nicht vor dem Unterricht hochladen. Sie erklären, dass es für technische Kurse sehr hilfreich ist, wenn die dolmetschende Person die Materialien im Voraus bekommen und somit das für den Unterricht benötigte Vokabular vorbereiten kann. '
		},
		{
			day: 'Mi',
			dayFull: 'Mittwoch',
			date: 12,
			activity: 'Tutorium',
			smiley: 'happy',
			time: '11:30 Uhr',
			text_happy:
				'Hannah ist ein wenig nervös vor ihrem zweiten Tutorium für den Kalkulationskurs. Sie hat fleißig an der Hausaufgabe gearbeitet, die letzte Woche aufgegeben wurde, hat aber noch ein paar Fragen an den Tutor. Es sind nur 15 Studierende in der Gruppe und der Tutor achtet darauf, dass er sich der Gruppe zuwendet, wenn er spricht. Hannah stellt ihre Fragen und kann ihre Notizen im Dokument notieren, das der Tutor jede Woche zur Vorbereitung auf das Tutorium verschickt.',
			text_sad:
				'Hannah ist ein wenig nervös vor ihrem zweiten Tutorium für den Kalkulationskurs. Sie hat fleißig an der Hausaufgabe gearbeitet, die letzte Woche aufgegeben wurde, hat dennoch ein paar Fragen an den Tutor. Die Gruppe besteht aus 15 Studierenden und der Tutor achtet darauf, dass er der Gruppe gegenübersitzt, wenn er spricht. Hannah stellt ihre Fragen und schreibt die Antworten von der Tafel ab. Ein Arbeitsblatt mit Beispielantworten wäre nützlich und Hannah erinnert den Tutor die zweite Woche in Folge daran, eines an die Klasse zu schicken.'
		},
		{
			day: 'Do',
			dayFull: 'Donnerstag',
			date: 13,
			activity: 'Praktikum',
			smiley: 'sad',
			time: '8:00 Uhr',
			text_happy:
				'Hannah ist eine von 20 Studierenden im Labor für das Computerpraktikum. Sie müssen ein Arbeitsblatt bearbeiten, bei dem sie sich Videos mit Anweisungen ansehen müssen und die Tutorin steht zur Verfügung, um zusätzliche Fragen zu klären. Hannah verbindet ihre Hörgeräte schnell per Bluetooth mit dem Computer und legt los. Sie ist froh, dass die Videos mit Untertiteln versehen sind, sodass sie wählen kann, ob sie die Untertitel hören oder lesen möchte',
			text_sad:
				'Hannah ist eine von 20 Studierenden im Labor für das Computerpraktikum. Sie müssen ein Arbeitsblatt bearbeiten, bei dem sie sich Videos mit Anleitungen ansehen. Eine Tutorin steht zur Verfügung, um zusätzliche Fragen zu klären. Hannah möchte ihre Hörgeräte über Bluetooth mit dem Computer verbinden, um den Ton direkt auf ihre Hörgeräte zu übertragen. Frustriert stellt sie fest, dass die Videos nicht mit Untertiteln versehen sind, sodass sie diese Option nicht nutzen kann. Hannah geht die Videos langsam durch und pausiert häufig, um zurückzuspulen, wenn der Ton nicht ganz klar ist. Sie ist nicht in der Lage, das Arbeitsblatt während der Sitzung zu beenden.	'
		},
		{
			day: 'Fr',
			dayFull: 'Freitag',
			date: 14,
			activity: 'Gruppenprojekt',
			smiley: 'happy',
			time: '11:30 Uhr',
			text_happy:
				'Hannah und drei andere Studierende haben ein Treffen mit einer Dozentin, um ihr Gruppenprojekt zu besprechen. Die Dozentin erinnerte sich daran, dass Hannah sich unsicher fühlt, vor dem ganzen Seminar zu sprechen, da ihre Sprache nicht immer verständlich ist. Die Dozentin schlägt vor, dass sie (und der Rest des Seminars) ein Video mit Untertiteln für ihre Präsentation machen können, wenn sie das wollen. Hannah und ihre Gruppe stimmen zu und planen ihr Projekt.',
			text_sad:
				'Hannah und drei andere Studierende haben ein Treffen mit einer Dozentin, um ihr Gruppenprojekt zu besprechen. Die Dozentin erinnert sich leider nicht daran, dass Hannah sich unsicher fühlt, vor dem ganzen Seminar zu sprechen, da ihre Sprache nicht immer verständlich ist. Daher fragt sie die Dozentin, ob sie (und der Rest des Seminars) ein Video mit Untertiteln für ihre Präsentation machen können, wenn sie das wollen. Die Dozentin stimmt zu und die Gruppen beginnen mit der Planung ihres Projekts.'
		}
	]
};

export const HANNAH: Persona = {
	id: 'hannah',
	name: 'Hannah',
	tags: [
		{ content: 'Hörbeeinträchtigung', lang: 'de' },
		{ content: 'Cochlea-Implantat', lang: 'de' },
		{ content: 'Untertitel', lang: 'de' },
		{ content: 'Gebärdensprache', lang: 'de' },
		{ content: 'Mundbild', lang: 'de' }
	],
	age: 25,
	hobbies: 'Handball spielen, Essen gehen, Filme und Serien schauen',
	study: 'Mathematik auf Lehramt',
	disability: 'Hochgradige Schwerhörigkeit',
	disability_icon: 'ear',
	previousPersona: 'Maxi',
	nextPersona: 'Gabriel',
	week: hannahsWeek,
	visualDescription:
		'Ich bin Hannah. Ich habe mittelblonde Haare, bin sportlich gebaut und knapp 1,80m groß. Meine Haare hab ich meistens zum Pferdeschwanz gebunden, so wie heute auch. Ich trage ein knielanges oranges Kleid mit kurzem Arm. Und an den Füßen noch weiße Sneaker.',
	metaDescription:
		'Hannah zeigt Ihnen, wie man eine Vorlesung barrierefreier für Menschen mit Hörbehinderung gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Inklusion, Vorlesung,  Hörbeeinträchtigung, Studium mit Hörbeeinträchtigung, Gebärdensprache, Cochlea-Implantat, Barrierefreie Lehre, assistive Technologien'
};
