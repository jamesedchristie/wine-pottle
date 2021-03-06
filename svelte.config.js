import preprocess from 'svelte-preprocess';
import path from 'path';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$services: path.resolve('./src/services'),
					$types: path.resolve('./src/global')
				}
			}
		},
		adapter: adapter()
	}
};

export default config;