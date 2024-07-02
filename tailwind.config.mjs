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
			backgroundImage:{
				'spad-linecard': "url('/assets/img/spad_line.jpg')"
			}
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
}
