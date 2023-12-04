import { base } from '$app/paths';
import { ENVIRONMENT } from '$lib/constants/environment.ts';
import { redirect } from '@sveltejs/kit';

export const prerender = true;
export const trailingSlash = 'always';

export const load = async (event) => {
	if (ENVIRONMENT.redirectToStartpage) {
		const pathname = event.url.pathname;
		let allowedSubpath = ENVIRONMENT.accessiblePersonas.some((persona) =>
			pathname.includes(persona.id)
		);

		if (ENVIRONMENT.allowImprintPage && !allowedSubpath) {
			allowedSubpath = pathname.includes('imprint');
		}

		if (ENVIRONMENT.allowPrivacyPage && !allowedSubpath) {
			allowedSubpath = pathname.includes('privacy');
		}

		if (!allowedSubpath && pathname !== '/') {
			throw redirect(301, `${base}/`);
		}
	}
};
