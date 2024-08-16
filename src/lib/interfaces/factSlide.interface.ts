export interface Enumeration {
	amount: number;
	total: number;
}

export interface FactSlide {
	text: string;
	source: {
		title: string;
		titleLang: 'de' | 'en';
		url: string;
	};
	decoration: Enumeration;
}
