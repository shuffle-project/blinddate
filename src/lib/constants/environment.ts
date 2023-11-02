// for user tests
// to decide which pages/ personas are viewable

import type { Persona } from '$lib/interfaces/persona.interfaces';
import { ALEKSANDR } from './aleksandr';
import { GABRIEL } from './gabriel';
import { HANNAH } from './hannah';
import { KILIAN } from './kilian';
import { MAXI } from './maxi';

interface Environment {
	accessiblePersonas: Persona[];
	redirectToStartpage: boolean; //if true, users can only visit pages of the accessible personas
	personaCardOtherPersonas: boolean;
	sitemap: boolean;
	footerPersonas: boolean;
}

export const ENVIRONMENT: Environment = {
	accessiblePersonas: [MAXI, ALEKSANDR, HANNAH, KILIAN, GABRIEL],
	redirectToStartpage: false,
	personaCardOtherPersonas: true,
	sitemap: true,
	footerPersonas: true
};
