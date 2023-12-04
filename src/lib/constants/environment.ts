// for user tests
// to decide which pages/ personas are viewable

import type { Persona } from '$lib/interfaces/persona.interfaces';
import { ALEKSANDR } from './aleksandr';
import { GABRIEL } from './gabriel';
import { HANNAH } from './hannah';
import { KILIAN } from './kilian';
import { MAXI } from './maxi';
import { MICHELLE } from './michelle';

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
	accessiblePersonas: [MAXI, MICHELLE, ALEKSANDR, HANNAH, KILIAN, GABRIEL],
	redirectToStartpage: false,
	allowPrivacyPage: true,
	allowImprintPage: true,
	personaCardOtherPersonas: true,
	sitemap: true,
	footerPersonas: true,
	backLinkToStartpage: true,
	displayLowerStartpageContent: true
};
