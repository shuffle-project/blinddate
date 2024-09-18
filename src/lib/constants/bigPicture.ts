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
	| '0'
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| 'accessible-documents';

export interface BigPictureStudent {
	id: StudentId;
	name: string;
	active: boolean;
	benefitsFrom: {
		[key in SupportOptionId]?: string;
	};
}

export const BIG_PICTURE_STUDENTS: BigPictureStudent[] = [
	{
		id: 'gabriel',
		name: 'Gabriel',
		active: false,
		benefitsFrom: {
			'1': 'Fehlerhafte Untertitel verwirren mich oft und ich verbrauche ultra viel Zeit, herauszufinden, welche Wörter tatsächlich gemeint sind. Bis ich damit fertig bin, sind die Dozierenden schon dreimal durch mit dem Inhalt und ich muss alles nacharbeiten.'
		}
	},
	{
		id: 'faiza',
		name: 'Faiza',
		active: false,
		benefitsFrom: {
			1: 'Blub'
		}
	},
	{
		id: 'sarah',
		name: 'Sarah',
		active: false,
		benefitsFrom: {
			1: 'Blub'
		}
	},
	{
		id: 'mara',
		name: 'Mara',
		active: false,
		benefitsFrom: {
			1: 'Blub'
		}
	},
	{
		id: 'fredo',
		name: 'Fredo',
		active: false,
		benefitsFrom: {
			1: 'Blub'
		}
	},
	{
		id: 'aleksandr',
		name: 'Aleksandr',
		active: false,
		benefitsFrom: {
			'2': 'Ein weiterer Platzhaltertext, der wirklich nur dazu dient, dass hier was steht und niemand unglücklich ist.',
			1: 'Blub'
		}
	},
	{
		id: 'kyle',
		name: 'Kyle',
		active: false,
		benefitsFrom: {
			1: 'Blub'
		}
	},
	{
		id: 'maxi',
		name: 'Maxi',
		active: false,
		benefitsFrom: {
			'accessible-documents':
				'Dann kann ich mit meinem Screenreader die Unterlagen besser verstehen.',
			1: 'Blub'
		}
	},
	{
		id: 'michelle',
		name: 'Michelle',
		active: false,
		benefitsFrom: {
			'1': 'Platzhalter-Text damit hier was steht und die Sprechblase nicht leer ist.'
		}
	},
	{
		id: 'hannah',
		name: 'Hannah',
		active: false,
		benefitsFrom: {
			1: 'Blub'
		}
	},
	{
		id: 'kilian',
		name: 'Kilian',
		active: false,
		benefitsFrom: {
			1: 'Blub'
		}
	}
];

export const SUPPORT_OPTIONS = [
	{ id: '0', name: 'Noch keine Auswahl' },
	{ id: '1', name: 'Adipiscing rhoncus' },
	{ id: '2', name: 'Verwenden eines soliden Mikros' },
	{ id: '3', name: 'Hochwertige Scans mit OCR Software' },
	{ id: '4', name: 'Lorem ipsum dolor sit amet consectetur' },
	{ id: '5', name: 'Ultricies porttitor egestas scelerisque id lorem' },
	{ id: '6', name: 'Bereitstellen der Unterlagen vor der Vorlesung' },
	{ id: '7', name: 'Aufnahme der Vorlesung' },
	{ id: '8', name: 'Untertitel bei Videos' },
	{ id: '9', name: 'Regelmäßige Pausen' },
	{
		id: 'accessible-documents',
		name: 'Ich überprüfe die Barrierefreiheit meiner Dokumente'
	}
] as const;
