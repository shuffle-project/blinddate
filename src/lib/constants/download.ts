import type { DownloadInterface } from '$lib/interfaces/download.interface';

export const DownloadConstant: DownloadInterface[] =
    [
        // reihenfolge: maxi, michelle, aleksandr, hannah, kiliam, gabriel, faiza, oliver
        {
            id: 1,

            title: "Übersicht<br>BlindDate Plattform",
            description: "Doppelseitige Postkarte (DIN A6) mit allen Personas und allgemeinen Informationen zur Begegnungsplattform “BlindDate”.",

            type: 'Postkarte',
            // persona: '',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-BlindDate.jpg",
                imageAlt: "Vorschau der Postkarte über BlindDate"
            },

            downloadLink: "Postkarte-BlindDate.pdf"
        },
        {
            id: 2,

            title: "Statistiken<br>Psychische Erkrankung",
            description: "Doppelseitige Postkarte (DIN A6) mit der Persona “Maxi” und statistischen Angaben zu Studierenden mit psychischer Erkrankung.",

            type: 'Postkarte',
            persona: 'Maxi',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Statistik-Maxi.jpg",
                imageAlt: "Vorschau der Postkarte über Statistiken mit der Persona Maxi"
            },

            downloadLink: "Postkarte-Statistik-Maxi.pdf"
        },
        {
            id: 3,

            title: "Statistiken<br>Pflegeverantwortung",
            description: "Doppelseitige Postkarte (DIN A6) mit der Persona “Faiza” und statistischen Angaben zu Studierenden mit Pflegeverantwortung.",

            type: 'Postkarte',
            persona: 'Faiza',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Statistik-Faiza.jpg",
                imageAlt: "Vorschau der Postkarte über Statistiken mit der Persona Faiza"
            },

            downloadLink: "Postkarte-Statistik-Faiza.pdf"
        },
        {
            id: 9,

            title: "Vorurteile<br>Psychische Erkrankung",
            description: "Doppelseitige Postkarte (DIN A6) mit der Persona “Maxi” und einem Vorurteil gegenüber Studierenden mit psychischer Erkrankung.",

            type: 'Postkarte',
            persona: 'Maxi',
            sendable: false,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Vorurteil-Maxi.jpg",
                imageAlt: "Vorschau der Postkarte über Vorurteile gegenüber der Persona Maxi"
            },

            downloadLink: "Postkarte-Vorurteil-Maxi.pdf"
        },
        {
            id: 4,

            title: "Vorurteile<br>Chronische Erkrankung",
            description: "Doppelseitige Postkarte (DIN A6) mit der Persona “Michelle” und einem Vorurteil gegenüber Studierenden mit chronischer Erkrankung.",

            type: 'Postkarte',
            persona: 'Michelle',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Vorurteil-Michelle.jpg",
                imageAlt: "Vorschau der Postkarte über Vorurteile gegenüber der Persona Michelle"
            },

            downloadLink: "Postkarte-Vorurteil-Michelle.pdf"
        },
        {
            id: 5,

            title: "Vorurteile<br>Autismus Spektrum",
            description: "Doppelseitige Postkarte (DIN A6) mit der Persona “Aleksandr” und einem Vorurteil gegenüber Studierenden auf dem Autismus Spektrum.",

            type: 'Postkarte',
            persona: 'Aleksandr',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Vorurteil-Aleksandr.jpg",
                imageAlt: "Vorschau der Postkarte über Vorurteile gegenüber der Persona Aleksandr"
            },

            downloadLink: "Postkarte-Vorurteil-Aleksandr.pdf"
        },
        {
            id: 6,

            title: "Vorurteile<br>Motorische Beeinträchtigung",
            description: "Doppelseitige Postkarte (DIN A6) mit der Persona “Kilian” und einem Vorurteil gegenüber Studierenden mit motorischer Beeinträchtigung.",

            type: 'Postkarte',
            persona: 'Kilian',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Vorurteil-Kilian.jpg",
                imageAlt: "Vorschau der Postkarte über Vorurteile gegenüber der Persona Kilian"
            },

            downloadLink: "Postkarte-Vorurteil-Kilian.pdf"
        },
        {
            id: 7,

            title: "Gefühlspuzzle<br>Psychische Erkrankung",
            description: "Doppelseitige Postkarte (DIN A6) mit der Persona “Maxi” und den Gefühlen von Studierenden mit psychischer Erkrankung.",

            type: 'Postkarte',
            persona: 'Maxi',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Puzzle-Maxi.jpg",
                imageAlt: "Vorschau der Postkarte über Gefühle der Persona Maxi"
            },

            downloadLink: "Postkarte-Puzzle-Maxi.pdf"
        },
        {
            id: 10,

            title: "Gefühlspuzzle<br>Autismus Spektrum",
            description: "Doppelseitige Postkarte (DIN A6) mit der Persona “Aleksandr” und den Gefühlen von Studierenden auf dem Autismus Spektrum.",

            type: 'Postkarte',
            persona: 'Aleksandr',
            sendable: false,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Puzzle-Aleksandr.jpg",
                imageAlt: "Vorschau der Postkarte über Gefühle der Persona Aleksandr"
            },

            downloadLink: "Postkarte-Puzzle-Aleksandr.pdf"
        },
        {
            id: 8,

            title: "Gefühlspuzzle<br>Teilleistungsstörung",
            description: "Doppelseitige Postkarte (DIN A6) mit der Persona “Oliver” und den Gefühlen von Studierenden mit Teilleistungsstörung.",

            type: 'Postkarte',
            persona: 'Oliver',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Puzzle-Oliver.jpg",
                imageAlt: "Vorschau der Postkarte über Gefühle der Persona Oliver"
            },

            downloadLink: "Postkarte-Puzzle-Oliver.pdf"
        },
        {
            id: 15,

            title: "Gefühlspuzzle<br>Ausfüllbar",
            description: "Doppelseitige Postkarte (DIN A6) zum Ausfüllen - ein Platz für die Gefühle und Gedanken Ihrer Studierenden.",

            type: 'Postkarte',
            // persona: '',
            sendable: false,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Puzzle-Ausfuellbar.jpg",
                imageAlt: "Vorschau der Postkarte über Gefühle der ausfüllenden Person"
            },

            downloadLink: "Postkarte-Puzzle-Ausfuellbar.pdf"
        },
        {
            id: 11,

            title: "Fragen und Antworten<br>Chronische Erkrankung",
            description: "Doppelseitige Postkarte (DIN A6) mit der Persona “Michelle” und Fragen an Studierende mit chronischer Erkrankung.",

            type: 'Postkarte',
            persona: 'Michelle',
            sendable: false,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Fragen-Michelle.jpg",
                imageAlt: "Vorschau der Postkarte über Fragen an die Persona Michelle"
            },

            downloadLink: "Postkarte-Fragen-Michelle.pdf"
        },
        {
            id: 12,

            title: "Fragen und Antworten<br>Autismus Spektrum",
            description: "Doppelseitige Postkarte (DIN A6) mit der Persona “Aleksandr” und Fragen an Studierende auf dem Autismus Spektrum.",

            type: 'Postkarte',
            persona: 'Aleksandr',
            sendable: false,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Fragen-Aleksandr.jpg",
                imageAlt: "Vorschau der Postkarte über Fragen an die Persona Aleksandr"
            },

            downloadLink: "Postkarte-Fragen-Aleksandr.pdf"
        },
        {
            id: 13,

            title: "Fragen und Antworten<br>Motorische Beeinträchtigung",
            description: "Doppelseitige Postkarte (DIN A6) mit der Persona “Kilian” und Fragen an Studierende mit motorischer Beeinträchtigung.",

            type: 'Postkarte',
            persona: 'Kilian',
            sendable: false,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Fragen-Kilian.jpg",
                imageAlt: "Vorschau der Postkarte über Fragen an die Persona Kilian"
            },

            downloadLink: "Postkarte-Fragen-Kilian.pdf"
        },
        {
            id: 14,

            title: "Fragen und Antworten<br>Pflegeverantwortung",
            description: "Doppelseitige Postkarte (DIN A6) mit der Persona “Faiza” und Fragen an Studierende mit Pflegeverantwortung.",

            type: 'Postkarte',
            persona: 'Faiza',
            sendable: false,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Fragen-Faiza.jpg",
                imageAlt: "Vorschau der Postkarte über Fragen an die Persona Faiza"
            },

            downloadLink: "Postkarte-Fragen-Faiza.pdf"
        },
        {
            id: 16,

            title: "Fragen und Antworten<br>Ausfüllbar",
            description: "Doppelseitige Postkarte (DIN A6) zum Ausfüllen - ein Platz für die Fragen und Antworten Ihrer Studierenden.",

            type: 'Postkarte',
            // persona: '',
            sendable: false,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Fragen-Ausfuellbar.jpg",
                imageAlt: "Vorschau der Postkarte über Fragen an die ausfüllende Person"
            },

            downloadLink: "Postkarte-Fragen-Ausfuellbar.pdf"
        },
        {
            id: 17,

            title: "Studieren mit<br>psychischer Erkrankung",
            description: "Einseitiges Poster (DIN A2) mit der Persona “Maxi” und Informationen zum Studium mit psychischer Erkrankung.",

            type: 'Poster',
            persona: 'Maxi',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Poster-Maxi.jpg",
                imageAlt: "Vorschau des Posters über die Persona Maxi"
            },

            downloadLink: "Poster-Maxi.pdf"
        },
        {
            id: 18,

            title: "Studieren mit<br>chronischer Erkrankung",
            description: "Einseitiges Poster (DIN A2) mit der Persona “Michelle” und Informationen zum Studium mit chronischer Erkrankung.",

            type: 'Poster',
            persona: 'Michelle',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Poster-Michelle.jpg",
                imageAlt: "Vorschau des Posters über die Persona Michelle"
            },

            downloadLink: "Poster-Michelle.pdf"
        },
        {
            id: 19,

            title: "Studieren mit<br>Autismus Spektrum Störung",
            description: "Einseitiges Poster (DIN A2) mit der Persona “Aleksandr” und Informationen zum Studium mit Autismus Spektrum Störung.",

            type: 'Poster',
            persona: 'Aleksandr',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Poster-Aleksandr.jpg",
                imageAlt: "Vorschau des Posters über die Persona Aleksandr"
            },

            downloadLink: "Poster-Aleksandr.pdf"
        },
        {
            id: 20,

            title: "Studieren mit<br>Hörbeeinträchtigung",
            description: "Einseitiges Poster (DIN A2) mit der Persona “Hannah” und Informationen zum Studium mit Hörbeeinträchtigung.",

            type: 'Poster',
            persona: 'Hannah',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Poster-Hannah.jpg",
                imageAlt: "Vorschau des Posters über die Persona Hannah"
            },

            downloadLink: "Poster-Hannah.pdf"
        },
        {
            id: 21,

            title: "Studieren mit<br>motorischer Beeinträchtigung",
            description: "Einseitiges Poster (DIN A2) mit der Persona “Kilian” und Informationen zum Studium mit motorischer Beeinträchtigung.",

            type: 'Poster',
            persona: 'Kilian',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Poster-Kilian.jpg",
                imageAlt: "Vorschau des Posters über die Persona Kilian"
            },

            downloadLink: "Poster-Kilian.pdf"
        },
        {
            id: 22,

            title: "Studieren mit<br>Sehbeeinträchtigung",
            description: "Einseitiges Poster (DIN A2) mit der Persona “Gabriel” und Informationen zum Studium mit Sehbeeinträchtigung.",

            type: 'Poster',
            persona: 'Gabriel',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Poster-Gabriel.jpg",
                imageAlt: "Vorschau des Posters über die Persona Gabriel"
            },

            downloadLink: "Poster-Gabriel.pdf"
        },
        {
            id: 23,

            title: "Studieren mit<br>Pflegeverantwortung",
            description: "Einseitiges Poster (DIN A2) mit der Persona “Faiza” und Informationen zum Studium mit Pflegeverantwortung.",

            type: 'Poster',
            persona: 'Faiza',
            sendable: true,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Poster-Faiza.jpg",
                imageAlt: "Vorschau des Posters über die Persona Faiza"
            },

            downloadLink: "Poster-Faiza.pdf"
        },
        {
            id: 24,

            title: "Studieren mit<br>Teilleistungsstörung",
            description: "Einseitiges Poster (DIN A2) mit der Persona “Oliver” und Informationen zum Studium mit Teilleistungsstörung.",

            type: 'Poster',
            persona: 'Oliver',
            sendable: false,

            previewImage: {
                imageLink: "",
                imageAlt: ""
            },

            backgroundImage: {
                imageLink: "backgrounds/Background-Poster-Oliver.jpg",
                imageAlt: "Vorschau des Posters über die Persona Oliver"
            },

            downloadLink: "Poster-Oliver.pdf"
        }

    ] as const satisfies DownloadInterface[];