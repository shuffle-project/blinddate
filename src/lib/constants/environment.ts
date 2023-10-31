// for user tests
// to decide which pages/ personas are viewable

import type { Persona } from '$lib/interfaces/persona.interfaces';
import { GABRIEL } from './gabriel';
import { HANNAH } from './hannah';

interface Environment {
	accessiblePersonas: Persona[];
	personaCardOtherPersonas: boolean;
	sitemap: boolean;
	footerPersonas: boolean;
}

export const ENVIRONMENT: Environment = {
	accessiblePersonas: [HANNAH, GABRIEL],
	personaCardOtherPersonas: true,
	sitemap: true,
	footerPersonas: true
};
