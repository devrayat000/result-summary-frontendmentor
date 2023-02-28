const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					'light-red': 'hsl(0, 100%, 67%)',
					'orangey-yellow': 'hsl(39, 100%, 56%)',
					'green-teal': 'hsl(166, 100%, 37%)',
					'cobalt-blue': 'hsl(234, 85%, 45%)'
				},
				neutral: {
					'pale-blue': 'hsl(221, 100%, 96%)',
					'light-lavender': 'hsl(241, 100%, 89%)',
					'dark-gray-blue': 'hsl(224, 30%, 27%)'
				},
				'light-slate-blue': 'hsl(252, 100%, 67%)',
				'light-royal-blue': 'hsl(241, 81%, 54%)',
				'violet-blue': 'hsl(256, 72%, 46%)',
				'persian-blue': 'hsl(241, 72%, 46%)'
			}
		},
		fontFamily: {
			sans: ['Hanken Grotesk', ...defaultTheme.fontFamily.sans]
		}
	},

	plugins: []
};

module.exports = config;
