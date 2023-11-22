// for user tests
// to decide which pages/ personas are viewable

import type { Persona } from '$lib/interfaces/persona.interfaces';
import { GABRIEL } from './gabriel';
import { HANNAH } from './hannah';

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
	// accessiblePersonas: [MAXI, ALEKSANDR, HANNAH, KILIAN, GABRIEL],
	accessiblePersonas: [HANNAH, GABRIEL],
	redirectToStartpage: true,
	allowPrivacyPage: true,
	allowImprintPage: true,
	personaCardOtherPersonas: false,
	sitemap: false,
	footerPersonas: false,
	backLinkToStartpage: false,
	displayLowerStartpageContent: false
};
