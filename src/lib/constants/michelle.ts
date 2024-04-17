import MorbusCrohn from '$lib/components/disabilityExplanation/MorbusCrohn.svelte';
import type { Week } from '$lib/interfaces/week.interfaces';
import type { Persona } from '../interfaces/persona.interfaces';

const michellesWeek: Week = {
	month: 'März',
	year: 2024,
	days: [
		{
			day: 'Mo',
			dayFull: 'Montag',
			date: 18,
			activity: 'Arzttermin',
			smiley: 'sad',
			time: '8:30 Uhr',
			text_happy:
				'Michelle hat einen wichtigen Arzttermin, der sich zeitlich mit einem Seminar überschneidet. Glücklicherweise hat die Dozentin die Studieninhalte online zur Verfügung gestellt, und das sogar schon einige Stunden vor dem eigentlichem Seminartermin. Michelle nutzt die Zeit im Wartezimmer, um die Materialien schon einmal anzuschauen. Den Rest bearbeitet sie später am Nachmittag. Sie ist erleichtert und dankbar, dass sie die Möglichkeit hat, den versäumten Stoff selbstständig nachzuholen. Michelle fühlt sich unterstützt und motiviert.',
			text_sad:
				'Michelle hat einen wichtigen Arzttermin, der sich zeitlich mit einem Seminar überschneidet. Schon im Wartezimmer sieht sie nach, ob die Studieninhalte bereits hochgeladen wurden, was jedoch nicht der Fall ist. Sie sitzt die Wartezeit gelangweilt ab. Zu Michelles Enttäuschung werden die Folien auch nach dem Seminar nicht online bereitgestellt, sodass sie keine Möglichkeit hat, die verpassten Inhalte nachzuholen. Michelle ist besorgt, dass sie den Anschluss verlieren könnte. Erst nach der dritten E-Mail, die Michelle der Dozentin schreibt, lädt diese die Folien - Tage später - endlich hoch.'
		},
		{
			day: 'Di',
			dayFull: 'Dienstag',
			date: 19,
			activity: 'Exkursion',
			smiley: 'happy',
			time: '10:00 Uhr',
			text_happy:
				'Michelle freut sich sehr darauf, an einer Exkursion in ein Tonstudio teilzunehmen. Schon eine Woche vorher erhält sie eine Rundmail, in der Infos zum Ort und zum Zeitplan geteilt werden. Dank eines Raumplans auf der Internetseite des Tonstudios kann Michelle sich ausreichend informieren, wo sie vor Ort Toiletten finden wird. Sie freut sich sehr auf die Exkursion und muss sich nur wenige Sorgen um das Auftreten eines zusätzlichen Schubs ihrer Krankheit machen. Dankbar über die stabile Planung, packt Michelle ihre Tasche mit einigen Snacks und läuft zum Bahnhof, um ihre Kommiliton*innen zu treffen.',
			text_sad:
				'Michelle freut sich sehr darauf, an einer Exkursion in ein Tonstudio teilzunehmen. Einen Tag zuvor wird plötzlich bekanntgegeben, dass ein anderes Studio besucht werden soll. Michelle hat nicht mehr genug Zeit und Informationen, um zu schauen, wo sie vor Ort Toiletten finden kann. Ihre Angst vor einem Unfall ist zu groß, sodass sie sich entscheidet, zu Hause zu bleiben. Noch dazu hat der kurzfristige Stress einen Schub ihrer Krankheit ausgelöst und Michelle hat den ganzen Tag Bauchschmerzen. Sie weiß, dass ihre Lehrenden nichts dafür können - dennoch ist sie wütend und traurig, dass sie nicht mitgehen kann und ihre Gesundheit zudem beeinträchtigt wurde.'
		},
		{
			day: 'Mi',
			dayFull: 'Mittwoch',
			date: 20,
			activity: 'Block-Seminar',
			smiley: 'sad',
			time: '9:30 Uhr',
			text_happy:
				'Nach einem ungeplanten Toilettengang betritt Michelle ihren Vorlesungssaal einige Minuten zu spät. Der Dozent wirft ihr ein kurzes Lächeln zu, macht dann aber direkt mit der Vorlesung weiter, um keine weitere Aufmerksamkeit auf Michelle zu lenken. Michelle ist ihm sehr dankbar. Das heutige Blockseminar geht einen halben Tag lang. Zum Glück macht der Dozent alle 45 Minuten eine Pause, in der Michelle ihre Energiereserven aufladen, etwas trinken und die Toilette besuchen kann, ohne gleichzeitig etwas zu verpassen.',
			text_sad:
				'Nach einem ungeplanten Toilettengang betritt Michelle ihren Vorlesungssaal einige Minuten zu spät. Der Dozent wirft ihr einen verärgerten Blick zu. Als er sie mit den Worten „Auch schon da?“ zurechtweist, zieht der Wortwechsel auch die Aufmerksamkeit aller Kommiliton*innen auf sich. Michelle möchte im Boden versinken! Das heutige Blockseminar geht einen halben Tag lang. Leider arbeitet der Dozent den Stoff ohne Pause durch. Nach zwei Stunden kann Michelle sich überhaupt nicht mehr konzentrieren, weil ihre Energiereserven erschöpft sind und ihr Magen schmerzhaft krampft.'
		},
		{
			day: 'Do',
			dayFull: 'Donnerstag',
			date: 21,
			activity: 'StudiCED-Treffen',
			smiley: 'happy',
			time: '18:30 Uhr',
			text_happy:
				'In der Nacht hat Michelle wegen starker Bauchkrämpfe nur schlecht geschlafen, entsprechend wenig „Energie-Löffel“ hat sie heute zur Verfügung. Dabei steht heute viel an: Eine Bandprobe, eine Vorlesung und ein StudiCED-Gruppentreffen. Die Bandprobe sagt Michelle ab – Sie weiß, dass sie heute sonst nichts Anderes mehr schafft. Die Teilnahme an der Onlinevorlesung am Vormittag kostet sie glücklicherweise nur wenig Energie. Daher kann sie abends noch an dem Treffen der StudiCED-Gruppe teilnehmen. Zusammen mit ihren dortigen Freunden sendet Michelle einige Infomaterialien zum Thema „Unsichtbare Beeinträchtigungen“ an Lehrende heraus. Die Rückmeldungen sind positiv und zwei Wochen später erkennt Michelle ihre Worte auf einigen PowerPoint-Folien wieder.',
			text_sad:
				'In der Nacht hat Michelle wegen starker Bauchkrämpfe nur schlecht geschlafen, entsprechend wenig „Energie-Löffel“ hat sie heute zur Verfügung. Dabei steht heute viel an: Eine Bandprobe, eine Vorlesung und ein StudiCED-Gruppentreffen. Die Bandprobe sagt Michelle ab – Sie weiß, dass sie heute sonst nichts Anderes mehr schafft. Für die Anfahrt und Teilnahme an der Präsenzvorlesung am Vormittag verbraucht sie aber fast alle Löffel. Am StudiCED-Treffen kann sie daher nicht mehr teilnehmen. Ihre dortigen Freunde senden - ohne Michelle - einige Infomaterialien zum Thema „Unsichtbare Beeinträchtigungen“ an Lehrende heraus. Leider erhalten sie keinerlei Rückmeldung und die Lehrenden verwenden die Materialien nicht.'
		},
		{
			day: 'Fr',
			dayFull: 'Freitag',
			date: 22,
			activity: 'Gruppenarbeit',
			smiley: 'sad',
			time: '15:00 Uhr',
			text_happy:
				'Eigentlich wollte Michelle sich heute mit drei Kommiliton*innen treffen, um an einer benoteten Gruppenpräsentation zu arbeiten. Leider muss sie kurzfristig wegen starker Bauchschmerzen absagen. Ihre Kommiliton*innen schreiben ein Protokoll dessen, was sie gemeinsam besprochen haben, und teilen Michelle ein Thema der anstehenden Recherche zu. So kann sie daran arbeiten, sobald es ihr wieder gut genug geht, und fühlt sich weiterhin als Mitglied der Gruppe. Schließlich bekommen alle Gruppenmitglieder die gleiche Note für das Projekt - Und die möchte Michelle sich auch fair verdienen!',
			text_sad:
				'Eigentlich wollte Michelle sich heute mit drei Kommiliton*innen treffen, um an einer benoteten Gruppenpräsentation zu arbeiten. Leider muss sie kurzfristig wegen starker Bauchschmerzen absagen. Ihre Kommiliton*innen informieren Michelle nicht über das, was sie besprochen haben. Als Michelle nachfragt, welche weiteren Aufgaben sie übernehmen kann, bekommt sie zur Antwort, dass bereits alles erledigt sei. Michelle weiß, dass das gut gemeint ist. Dennoch hat sie ein schlechtes Gewissen, weil sie gar nichts zu der Gruppenarbeit beitragen konnte, obwohl sie es gerne getan hätte. Sie denkt darüber nach, ob sie den Dozenten lieber um eine Einzelleistung bitten soll, um sich zu beweisen.'
		}
	]
};

export const MICHELLE: Persona = {
	id: 'michelle',
	name: 'Michelle',
	subheading: 'Studieren mit chronischer Erkrankung',
	tags: [
		{ content: 'Selbsthilfe', lang: 'de' },
		{ content: 'Spoon theory', lang: 'en' },
		{ content: 'Unsichtbare Beeinträchtigung', lang: 'de' }
	],
	age: 19,
	hobbies: 'Schlagzeug spielen und Kleidung nähen',
	study: 'Popmusikdesign',
	pronouns: 'Sie / ihr',
	disability: 'Morbus Crohn',
	disabilityIcon: 'spoon',
	disabilityExplanation: MorbusCrohn,
	previousPersona: 'Maxi',
	nextPersona: 'Aleksandr',
	week: michellesWeek,
	visualDescription:
		'Hey, ich bin Chelle.  Ich habe schwarze, lange Haare, die zu Dreads geflochten sind. Heute trage ich eine Mom-Jeans und ein orangenes Kurzarm-Shirt, das ich selbst genäht habe. Dazu natürlich die passenden Chucks. Ich trage leichtes Make-Up, das sehr natürlich aussieht. Ich bin eine ziemliche Bohnenstange, das liegt am Morbus Crohn. Und ich bin eine Person of Color.',
	metaDescription:
		'Michelle zeigt Ihnen, wie man eine Vorlesung barrierefreier für Menschen mit chronischen Erkrankungen gestalten kann.',
	metaKeywords:
		'Barrierefreiheit, Inklusion, Vorlesung, Unsichtbare Beeinträchtigung, Studium mit chronischer Krankheit, Morbus Crohn, CED, Spoon Theory, Barrierefreie Lehre'
};
