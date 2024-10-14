export type StudentId =
	| 'maxi'
	| 'hannah'
	| 'michelle'
	| 'gabriel'
	| 'aleksandr'
	| 'faiza'
	| 'kilian'
	| 'fredo'
	| 'kyle'
	| 'sarah'
	| 'mara';

export type SupportOptionId =
	| 'idle'
	| 'subtitles'
	| 'documents-before-lecture'
	| 'recording-lecture'
	| 'regular-breaks'
	| 'format-templates'
	| 'ocr-scans'
	| 'transparency-of-requirements'
	| 'image-descriptions';

export const SUPPORT_OPTIONS = [
	{ id: 'idle', name: 'Kein Auswahl' },
	{ id: 'subtitles', name: 'Korrekte Untertitel' },
	{ id: 'documents-before-lecture', name: 'Bereitstellung der Unterlagen VOR der Veranstaltung' },
	{ id: 'recording-lecture', name: 'Aufnahme der Veranstaltung' },
	{ id: 'regular-breaks', name: 'Regelmäßige Pausen' },
	{ id: 'format-templates', name: 'Nutzen von Formatvorlagen in Dokumenten' },
	{ id: 'ocr-scans', name: 'Hochwertige Scans mit OCR Software' },
	{
		id: 'transparency-of-requirements',
		name: 'Transparenz der Anforderungen & Veranstaltungsstruktur'
	},
	{ id: 'image-descriptions', name: 'Verbale oder schriftliche Bildbeschreibung' }
] as const;

export interface BigPictureStudent {
	id: StudentId;
	name: string;
	icon?: string;
	disability?: string;
	active: boolean;
	benefitsFrom: {
		[key in SupportOptionId]?: string;
	};
}

export const BIG_PICTURE_STUDENTS: BigPictureStudent[] = [
	{
		id: 'gabriel',
		name: 'Gabriel',
		icon: 'glaucoma',
		disability: 'Grüner Star (Glaukom)',
		active: false,
		benefitsFrom: {
			'documents-before-lecture':
				'Wenn Unterlagen vorab bereitgestellt werden, kann ich mir schonmal in Ruhe Abbildungen, Tabellen oder Grafiken anschauen, um mich in den Veranstaltungen auf den Inhalt und nicht auf das Sehen konzentrieren zu können.',
			'recording-lecture':
				'Meine Augen werden schnell müde. Wird eine Aufnahme gemacht, kann ich der Veranstaltung zuhören, ohne mich um das Mitschreiben sorgen zu müssen. Ich weiß, dass ich die Inhalte später in Ruhe nacharbeiten kann.',
			'regular-breaks':
				'Wenn ich in einer Veranstaltung viel visuell arbeiten muss, werden meine Augen schnell müde. In den Pausen versuche ich dann auch meinen Augen etwas Ruhe zu gönnen.',
			'format-templates':
				'Durch Formatvorlagen kann man sich die Überschriften als Inhaltsverzeichnis anzeigen lassen. So kann ich mich wesentlich effizienter in Dokumenten orientieren, ohne Zeit und Energie für die visuelle Suche nach bestimmten Inhalten aufwenden zu müssen.',
			'ocr-scans':
				'Mithilfe von guten Scans kann ich mir die Texte vorlesen lassen, was wiederum die Last von meinen Augen nimmt. Außerdem muss ich mich so nicht damit beschäftigen, ob das jetzt Text oder ein eingescannter Daumen ist.',
			'image-descriptions':
				'Durch mein Glaukom ist mein Gesichtsfeld eingeschränkt. Ich sehe selten alles auf einmal. Große oder komplexe Abbildungen muss ich in kleinen Abschnitten anschauen. Bildbeschreibungen helfen mir, nichts zu übersehen und sparen Zeit.'
		}
	},
	{
		id: 'faiza',
		name: 'Faiza',
		icon: 'bottle',
		disability: 'Studieren mit Kind',
		active: false,
		benefitsFrom: {
			subtitles: 'Untertitel helfen mir, Videos auch ohne Ton anzuschauen, wenn mein Kind schläft.',
			'recording-lecture':
				'Oh, Aufnahmen der Veranstaltungen sind super! Wenn Jonas krank ist oder ich keine Betreuung habe und ihn nicht mitnehmen kann, sind Aufnahmen goldwert. Ich muss einfach flexibel lernen können.',
			'regular-breaks':
				'Pausen sind das A und O…schnell mal nach Jonas schauen oder noch einen Kaffee holen, weil die Nacht wieder kurz war, damit die Aufmerksamkeit wiederkommt.',
			'ocr-scans':
				'Ich lasse mir gerne Texte vorlesen - wie ein Hörbuch quasi. So kann ich  Jonas dabei Essen geben oder andere Dinge erledigen. Wenn ein Text halt nur als Bild eingescannt wurde, kann das die Software leider nicht vorlesen.',
			'transparency-of-requirements':
				'Anwesenheitspflicht? Wann sind die Prüfungen? Was wird von mir erwartet? - Das sind unglaublich wichtige Informationen, die ich unbedingt zu Beginn brauche, um zu sehen, welche Veranstaltungen ich realistisch belegen kann.'
		}
	},
	{
		id: 'sarah',
		name: 'Sarah',
		active: false,
		benefitsFrom: {
			'recording-lecture':
				'Studium geht vor Job. Aber Studium, Essen und Wohnung müssen auch bezahlt werden. Ich bin auf meinen Job angewiesen. Wenn es Aufnahmen einer Veranstaltung gibt, ist das organisatorisch für mich einfacher.',
			'regular-breaks':
				'Ich lerne viel besser in kleinen Häppchen. Wenn ich meinem Kopf zwischendurch eine Pause gönne, passt mehr rein.',
			'image-descriptions': 'Ja, das wäre für mich auch hilfreich!'
		}
	},
	{
		id: 'mara',
		name: 'Mara',
		active: false,
		benefitsFrom: {
			subtitles:
				'Ich ziehe mir aus den Untertiteln das Transkript, um gleich damit lernen zu können.',
			'documents-before-lecture': 'Ich bin gerne vorbereitet, um dann Fragen stellen zu können.',
			'format-templates':
				'Ich will lernen und keine Zeit verschwenden. Wenn ich aber Daten von Folien einzeln in meine Excel-Datei kopieren muss, weil die "Tabelle" des Profs nur wie eine aussieht, aber keine ist, passiert genau das.'
		}
	},
	{
		id: 'fredo',
		name: 'Fredo',
		active: false,
		benefitsFrom: {
			subtitles:
				'Mein Deutsch ist okay, aber es ist sehr anstrengend, wenn ich nur höre. Wenn ich die Untertitel lese, lerne ich auch neue Worte besser.',
			'documents-before-lecture':
				'Ich lese die Texte vorher. Dann benutze ich den Translator für Worte, die ich nicht kenne. Das hilft mir.',
			'recording-lecture':
				'Ich schaue mir die Aufnahmen langsamer an. Man sagt Italiener sprechen schnell… die haben nicht meine deutschen Dozenten gehört…',
			'ocr-scans':
				'Gut gescannte Texte kann ich direkt in die Übersetzungsapp kopieren. Lange Texte auf Deutsch sind sehr anstrengend. Lieber auf Italienisch in doppelter Geschwindigkeit!'
		}
	},
	{
		id: 'aleksandr',
		name: 'Aleksandr',
		icon: 'sunflower',
		disability: 'Autismus-Spektrum-Störung',
		active: false,
		benefitsFrom: {
			subtitles:
				'Umweltreize lenken mich oft ab. Deshalb trage ich fast immer Geräusch-unterdrückende Kopfhörer. Wenn Videos Untertitel haben, lese ich lieber, anstatt noch mehr Geräusche zu hören.',
			'recording-lecture':
				'Wenn ich weiß, dass eine Veranstaltung oder etwas Ähnliches an der Uni ist, gehe ich nicht hin. Dann sind dort noch mehr Menschen, das überreizt mich. Aufnahmen der Veranstaltungen lassen mich nichts verpassen.',
			'transparency-of-requirements':
				'Gerade zu Beginn eines Semesters gibt es sehr viele wichtige Informationen. Es fällt mir schwer, alles immer zu filtern. Klar kommunizierte Anforderungen und Regeln helfen mir da sehr.'
		}
	},
	{
		id: 'kyle',
		name: 'Kyle',
		active: false,
		benefitsFrom: {
			subtitles:
				'Hier im Wohnheim ist es häufig super laut, da helfen Untertitel. Außerdem lerne ich besser, wenn ich die Worte auch geschrieben sehe.',
			'recording-lecture':
				'Letztes Semester saß ich mit gebrochenem Bein erst im Krankenhaus und dann zuhause. Die Aufnahmen anzuschauen hat sehr geholfen, den Lernstoff nachzuholen und auch zu verstehen!',
			'regular-breaks':
				'Nicht nur weil ich Sport studiere, weiß ich, dass kurze Bewegungspausen super wichtig sind für den Körper. Gerade, wenn man den ganzen Tag nur vorm Bildschirm klebt.',
			'ocr-scans':
				'Wenn ich mir Texte aus Scans vorlesen lassen kann, nutze ich die gerne als Podcast während dem Laufen. Da ist mein Kopf perfekt frei dafür.',
			'transparency-of-requirements':
				'Die Regeln zu kennen, ist immer wichtig, nicht nur bei einem Fußballspiel. So lässt sich ein Semester besser planen!',
			'image-descriptions':
				'Manche Diagramme sind sehr komplex. Wenn es eine verbale Beschreibung durch die Dozierenden gibt, versteh ich das manchmal einfach besser'
		}
	},
	{
		id: 'maxi',
		name: 'Maxi',
		icon: 'mental-health',
		disability: 'Depressionen',
		active: false,
		benefitsFrom: {
			'documents-before-lecture':
				'Es nimmt einfach so viel Druck, die Unterlagen vorher zu haben. Ich schaue sie dann vorher durch. Dadurch fühle ich mich in der Vorlesung sicherer und kann dem Stoff besser folgen.',
			'regular-breaks':
				'Regelmäßige Pausen helfen mir, durchzuatmen, meine Gedanken zu sammeln und mich mental wieder zu stabilisieren. Ohne Pausen verliere ich leichter den Fokus, und es wird schwieriger, der Veranstaltung zu folgen.',
			'recording-lecture':
				'Es gibt immer wieder Tage, an denen mich meine Depression ans Bett fesselt. Wenn die Vorlesung aufgezeichnet wird, gibt es mir die Sicherheit, dass ich nichts verpasse.',
			'transparency-of-requirements':
				'Wenn die Anforderungen und der Ablauf klar sind, kann ich besser planen. Das hilft manchmal, Überforderung zu vermeiden. Es gibt mir das Gefühl von Kontrolle und Sicherheit. Transparenz hilft mir, meine Energie besser einzuteilen und den Druck zu reduzieren.'
		}
	},
	{
		id: 'michelle',
		name: 'Michelle',
		icon: 'spoon',
		disability: 'Morbus Crohn',
		active: false,
		benefitsFrom: {
			subtitles:
				'Das hilft mir auch sehr für mein Lernen. Gerade, wenn ich flexibel an unterschiedlichen Orten - wie einem Wartezimmer - lernen muss.',
			'documents-before-lecture':
				'Ich muss sehr mit meiner Energie haushalten und weiß nie vorher, ob ich es zu einer Veranstaltung schaffe, oder nicht. Habe ich die Unterlagen, kann ich trotzdem mitarbeiten und verpasse nicht so viel.',
			'recording-lecture':
				'Es gibt Tage, an denen kann ich nicht an die Uni, weil ich wichtige Arzttermine habe oder weil es die Schmerzen nicht erlauben. Wenn ich mir die Veranstaltung dann zuhause anschauen kann, verpasse ich nicht so viel.',
			'regular-breaks':
				'Ich kann gar nicht anders, als regelmäßig und auch unregelmäßig Pausen zu machen. Da zwingt mich mein Körper sowieso zu. Wenn die Pausen aber auch eingeplant sind, verpasse ich nicht jedes Mal super viele Inhalte!',
			'ocr-scans':
				'Wenn ich mal wieder im Wartezimmer sitze, höre ich mir die Vorlesungsfolien oder Texte gerne an. Funktioniert aber halt nur, wenn die Texte mit einer OCR-Software gescannt und nicht als Bild abgespeichert wurden.'
		}
	},
	{
		id: 'hannah',
		name: 'Hannah',
		icon: 'ear',
		disability: 'Hochgradige Schwerhörigkeit',
		active: false,
		benefitsFrom: {
			subtitles:
				'Fehlerhafte Untertitel verwirren mich oft und ich verbrauche sehr viel Zeit, herauszufinden, welche Wörter tatsächlich gemeint sind. Bis ich damit fertig bin, sind die Dozierenden schon dreimal durch mit dem Inhalt und ich muss alles nacharbeiten.',
			'documents-before-lecture':
				'Da ich während der Veranstaltung nicht jedes Wort wahrnehme oder alles verstehe, hilft es mir sehr, die Unterlagen im Vorfeld anzusehen. So kann ich mich besser auf das Thema vorbereiten und den Kontext während der Veranstaltung leichter erfassen.',
			'recording-lecture':
				'Veranstaltungen können für mich sehr anstrengend sein, besonders wenn ich zwischendurch Wörter nicht verstehe. Durch Aufnahmen habe ich die Möglichkeit, das Gesprochene später in Ruhe noch einmal anzuhören und, wenn möglich, mit Untertiteln zu verfolgen.'
		}
	},
	{
		id: 'kilian',
		name: 'Kilian',
		icon: 'wheelchair',
		disability: 'Zerebralparese',
		active: false,
		benefitsFrom: {
			'documents-before-lecture':
				'Mitschreiben ist für mich der absolute Horror. Bis ich was notiert habe, ist die Veranstaltung rum und ich habe die Hälfte verpasst. Eine Vorbereitung im eigenen Tempo ist dagegen jolly good. Dann habe ich mal Zeit für Fragen in der Vorlesung.',
			'recording-lecture':
				'Mein Literatur-Prof weicht gerne mal von seinem Skript ab. Wenn dann noch wichtige Fragen gestellt werden, bin ich mit meinem Schreibtempo teilweise echt verloren. Aufnahmen fangen mich in diesen Situationen zum Glück auf.',
			'regular-breaks':
				'Pausen sind für mich sehr wichtig. Ich muss oft mehr Energie für Bewegungen aufwenden als andere. Pausen helfen auch, Verspannungen zu lösen, Muskelkrämpfe zu verhindern und Überlastung zu vermeiden.',
			'format-templates':
				'Mein Screenreader, und infolgedessen auch ich, benötigen Formatvorlagen. Ohne sie wird der Albtraum zur traurigen Realität: Unübersichltiche Layouts und der Kampf mit der Navigation durch das Dokument.',
			'ocr-scans':
				'Weil mir das Sitzen im Rollstuhl oder auf dem Schreibtischstuhl schnell wehtut, muss ich immer wieder die Position wechseln. Wenn ich mir Texte auch vorlesen lassen kann, weil sie richtig eingescannt wurden, kann ich auch mal im Bett lernen.',
			'transparency-of-requirements':
				'Für die Planung meiner Assistenz sowie die Taxi-Fahrten an die Uni muss ich zu Beginn des Semesters wissen, wann welche Veranstaltungen und Exkursionen geplant sind. Wenn Raum- oder Zeitänderungen kurzfristig kommen, hab ich kaum Chance das zu koordinieren.'
		}
	}
];
