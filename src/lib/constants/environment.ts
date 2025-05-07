// only used for the meta tags, change to the correct URL before deploying
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

export const ENVIRONMENT: Environment = {
	accessiblePersonas: [MAXI, MICHELLE, ALEKSANDR, HANNAH, KILIAN, GABRIEL, FAIZA, OLIVER],
	redirectToStartpage: true,
	allowPrivacyPage: true,
	allowImprintPage: true,
	personaCardOtherPersonas: true,
	sitemap: true,
	footerPersonas: true,
	backLinkToStartpage: true,
	displayLowerStartpageContent: true,
	allowFeedbackLink: true,
	generalFeedbackLink: 'https://survey.hdm-stuttgart.de/464342?lang=de',
	lecturerFeedbackLink: 'https://survey.hdm-stuttgart.de/521184?lang=de',
	showNewContentAd: true,
	showDevEnvInfo: false
};
