import { resolve } from '$app/paths';
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
			allowedSubpath = pathname.includes('impressum');
		}

		if (ENVIRONMENT.allowPrivacyPage && !allowedSubpath) {
			allowedSubpath = pathname.includes('datenschutz');
		}

		if (!allowedSubpath) {
			allowedSubpath =
				pathname.includes('sitemap') ||
				pathname.includes('kontakt') ||
				pathname.includes('so-funktioniert-es') ||
				pathname.includes('ganze') ||
				pathname.includes('fragen') ||
				pathname.includes('wichtige-begriffe') ||
				pathname.includes('persona-entwicklung') ||
				pathname.includes('erklaerung-zur-barrierefreiheit') ||
				pathname.includes('dgs') ||
				pathname.includes('leichte-sprache');
		}

		if (!allowedSubpath && pathname !== '/') {
			redirect(301, resolve('/'));
		}
	}
};
