// only used for the meta tags, change to the correct URL before deploying

// TODO: Remove '/blinddate' in variables.scss font urls before deploying
// export const HOSTNAME = 'https://shuffle-project.github.io/blinddate/';
export const HOSTNAME = 'https://barrierefreies-blinddate.de/';

import type { Persona } from '$lib/interfaces/persona.interfaces';
import { ALEKSANDR } from './aleksandr';
import { FAIZA } from './faiza';
import { GABRIEL } from './gabriel';
import { HANNAH } from './hannah';
import { KILIAN } from './kilian';
import { MAXI } from './maxi';
import { MICHELLE } from './michelle';
import { OLIVER } from './oliver';

interface Environment {
	accessiblePersonas: Persona[];
	redirectToStartpage: boolean; //if true, users can only visit pages of the accessible personas ...or imprint and privacy if you allow so
	allowPrivacyPage: boolean;
	allowImprintPage: boolean;
	personaCardOtherPersonas: boolean;
	sitemap: boolean;
	footerPersonas: boolean;
	backLinkToStartpage: boolean;
	displayLowerStartpageContent: boolean;
	allowFeedbackLink: boolean;
	generalFeedbackLink: string;
	lecturerFeedbackLink: string;
	showNewContentAd: boolean;
	showDevEnvInfo: boolean;
}

export const ENVIRONMENT = {
	accessiblePersonas: [MAXI, MICHELLE, ALEKSANDR, HANNAH, KILIAN, GABRIEL, FAIZA, OLIVER],
	redirectToStartpage: true,
	allowPrivacyPage: true,
	allowImprintPage: true,
	personaCardOtherPersonas: true,
	sitemap: true,
	footerPersonas: true,
	backLinkToStartpage: true,
	displayLowerStartpageContent: true,
	allowFeedbackLink: false,
	generalFeedbackLink: 'https://survey.hdm-stuttgart.de/464342?lang=de',
	lecturerFeedbackLink: 'https://survey.hdm-stuttgart.de/521184?lang=de',
	showNewContentAd: false,
	showDevEnvInfo: false
} as const satisfies Environment;

type TagsOf<
	Personas extends readonly Persona[],
	Id extends Personas[number]['id']
> = Personas[number] extends infer P
	? P extends { id: Id; tags: readonly { id: infer T }[] }
		? T
		: never
	: never;

function buildPersonaTags<const Personas extends readonly Persona[]>(personas: Personas) {
	const result = {} as {
		[K in Personas[number]['id']]?: Record<string, string>;
	};

	personas.forEach((persona) => {
		const map = {} as Record<string, string>;

		persona.tags.forEach((tag) => {
			map[tag.id] = tag.id;
		});

		result[persona.id as keyof typeof result] = { ...map } as const;
	});

	return { ...result } as {
		readonly [K in Personas[number]['id']]: { readonly [T in TagsOf<Personas, K>]: T };
	};
}

export const personaTagIds = buildPersonaTags(ENVIRONMENT.accessiblePersonas);
