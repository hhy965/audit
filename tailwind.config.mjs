/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      screens: {
        'phone': '400px'
      },
      width: {
        'img-max': '840px'
      },
      height: {
        'img-max': '400px'
      }
    },
	},
	plugins: [],
}
