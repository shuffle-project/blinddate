import { ENVIRONMENT } from '$lib/constants/environment.js';
import { redirect } from '@sveltejs/kit';

export const prerender = true;
export const trailingSlash = 'always';

export const load = async (event) => {
	if (ENVIRONMENT.redirectToStartpage) {
		const pathname = event.url.pathname;
		const allowedSubpath = ENVIRONMENT.accessiblePersonas.some((persona) =>
			pathname.includes(persona.id)
		);

		if (!allowedSubpath && pathname !== '/') {
			throw redirect(301, '/');
		}
	}
};
