import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		css: (css) => {
			css.write('public/bundle.css');
		}
	}),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'public',
			assets: 'public',
			fallback: null,
			precompress: false,
			strict: true
		}),
		// trailingSlash: 'always',
		//  add '/blinddate' for deploy on pages, add '' for local build
		paths: { base: process.env.NODE_ENV === 'pages' ? '/blinddate' : '' }
	}
};
export default config;
