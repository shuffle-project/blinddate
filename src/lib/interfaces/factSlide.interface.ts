export interface Enumeration {
	amount: number;
	total: number;
}

export interface EnumerationFactSlide {
	type: 'enumeration';
	text: string;
	decoration: Enumeration;
}

export interface BoldTextFactSlide {
	type: 'boldText';
	boldText: string;
	normalText: string;
}

export interface FactSlide {
	source: {
		title: string;
		titleLang: 'de' | 'en';
		url: string;
	};
	content: EnumerationFactSlide | BoldTextFactSlide;
}
