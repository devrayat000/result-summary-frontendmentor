import { sveltekit } from '@sveltejs/kit/vite';
import svelteSVG from 'vite-plugin-svelte-svg';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		svelteSVG({
			svgoConfig: {}, // See https://github.com/svg/svgo#configuration
			requireSuffix: true // Set false to accept '.svg' without the '?component'
		}),
		sveltekit()
	]
});
