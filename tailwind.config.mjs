/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'swhite-color':'#FFFFFF',
				'text-color':'#606060',
				'sblue-general':'#1D70B6',
				'sblue-dark':'#15497C',
				'sblue-medium':'#0095DA',
				'sgreen-spad':'#92BF1F'
			},
			animation: {
				'loop-scroll': 'loop-scroll 50s linear infinite',
			  },
			  keyframes: {
				'loop-scroll': {
				  from: { transform: 'translateX(0)' },
				  to: { transform: 'translateX(-100%)' },
				}
			  },
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
}
