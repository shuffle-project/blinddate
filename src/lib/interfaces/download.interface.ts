export interface DownloadInterface {
    id: number;
    title: string;
    type: 'postcard' | 'poster';

    previewImage: {
        imageLink: string;
        imageAlt: string;
    };

    downloadLink: string;
}