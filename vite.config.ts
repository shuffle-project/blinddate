import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{
					src: 'node_modules/@fontsource/source-sans-pro/files/source-sans-pro-latin-400-normal.woff2',
					dest: 'fonts'
				},
				{
					src: 'node_modules/@fontsource/source-sans-pro/files/source-sans-pro-latin-700-normal.woff2',
					dest: 'fonts'
				},
				{
					src: 'node_modules/@fontsource/comic-neue/files/comic-neue-latin-400-normal.woff2',
					dest: 'fonts'
				}
			]
		})
	]
};

export default config;
