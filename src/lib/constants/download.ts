import type { DownloadInterface } from '$lib/interfaces/download.interface';

export const DownloadConstant: DownloadInterface[] =
    [
        {
            id: 1,
            title: "Poster 'Test 1'",
            type: 'poster',

            previewImage: {
                imageLink: "Poster-Test-JPG.jpg",
                imageAlt: "Poster von Test"
            },

            downloadLink: "Poster-Test-PDF.pdf"

        },
        {
            id: 2,
            title: "Poster 'Test 2'",
            type: 'poster',

            previewImage: {
                imageLink: "Poster-Test-JPG.jpg",
                imageAlt: "Poster von Test"
            },

            downloadLink: "Poster-Test-PDF.pdf"

        }
    ] as const satisfies DownloadInterface[];