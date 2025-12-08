export interface DownloadInterface {
    id: number;

    title: string;
    description: string;

    type: 'Postkarte' | 'Poster';
    persona?: 'Maxi' | 'Michelle' | 'Aleksandr' | 'Hannah' | 'Kilian' | 'Gabriel' | 'Faiza' | 'Oliver';
    sendable: boolean;

    previewImage: {
        imageLink: string;
        imageAlt: string;
    };

    backgroundImage: {
        imageLink: string;
        imageAlt: string;
    };

    downloadLink: string;
}