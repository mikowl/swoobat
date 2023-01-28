/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#FFcb05",
					secondary: "#326fba",
					accent: "#fca5a5",
					neutral: "#414558",
					"base-100": "#f3f4f6",
					info: "#38bdf8",
					success: "#86efac",
					warning: "#F1FA89",
					error: "#FF5757",
				},
			},
		],
		styled: true,
		base: true,
		utils: true,
		prefix: "",
		darkTheme: "dark",
	},
	theme: {
		extend: {
			backgroundImage: {
				"main-background": "url('/src/assets/images/pokemon.jpg')",
			},
		},
	},
};
