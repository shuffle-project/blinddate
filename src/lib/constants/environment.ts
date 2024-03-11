// for user tests
// to decide which pages/ personas are viewable

import type { Persona } from '$lib/interfaces/persona.interfaces';
import { GABRIEL } from './gabriel';
import { HANNAH } from './hannah';
import { KILIAN } from './kilian';
import { MAXI } from './maxi';

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
}

export const ENVIRONMENT: Environment = {
	accessiblePersonas: [MAXI, HANNAH, KILIAN, GABRIEL],
	redirectToStartpage: true,
	allowPrivacyPage: true,
	allowImprintPage: true,
	personaCardOtherPersonas: true,
	sitemap: false,
	footerPersonas: true,
	backLinkToStartpage: true,
	displayLowerStartpageContent: false
};
