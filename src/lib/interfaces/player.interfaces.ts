export interface Caption {
	path: string;
	label: string;
	lang: string;
}

export interface Video {
	title: string;
	videoPathMp4: string;
	poster: string;
	captionsArray: Caption[];
}

export interface Transcript {
	title: string;
	body: string;
}

export interface ExtendedPlayerConfig {
	title: string;
	videos: Video[];
	transcripts: Transcript[];
}
