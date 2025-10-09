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

export interface MelvinVideo {
	title: string;
	url: string;
}

export interface ExtendedPlayerConfig {
	title: string;
	melvinVideos: MelvinVideo[];
	videos: Video[];
	transcripts: Transcript[];
}
