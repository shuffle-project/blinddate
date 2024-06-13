export type StudentId = 'maxi' | 'michelle' | 'gabriel' | 'aleksandr';
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
		id: 'maxi',
		name: 'Maxi',
		active: false,
		benefitsFrom: {
			'accessible-documents':
				'Dann kann ich mit meinem Screenreader die Unterlagen besser verstehen.'
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
		id: 'gabriel',
		name: 'Gabriel',
		active: false,
		benefitsFrom: {
			'1': 'Ich hatte letzte Woche einen Arzt-TP-termin und konnte nicht zur Vorlesung kommen. Die Aufzeichnung hat mich und vor allem meine Note gerettet.'
		}
	},
	{
		id: 'aleksandr',
		name: 'Aleksandr',
		active: false,
		benefitsFrom: {
			'2': 'Ein weiterer Platzhaltertext, der wirklich nur dazu dient, dass hier was steht und niemand unglücklich ist.'
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
