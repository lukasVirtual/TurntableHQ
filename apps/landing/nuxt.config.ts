export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/content", "@nuxt/image", "@clerk/nuxt"],

	devtools: {
		enabled: true,
	},

	css: ["~/assets/css/main.css"],

	routeRules: {
		"/": { prerender: true },
		"/dashboard/**": { ssr: false },
		"/sign-in/**": { ssr: false },
		"/sign-up/**": { ssr: false },
	},

	compatibilityDate: "2025-01-15",

	eslint: {
		config: {
			stylistic: {
				semi: false,
				indent: "tab",
				quotes: "double",
				commaDangle: "never",
				braceStyle: "1tbs",
			},
		},
	},
})
