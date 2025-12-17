// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        "@nuxt/eslint",
        "@nuxt/ui",
        "@nuxt/content",
        "@nuxt/image"
    ],

    devtools: {
        enabled: true
    },

    css: ["~/assets/css/main.css"],

    routeRules: {
        "/": { prerender: true }
    },

    compatibilityDate: "2025-01-15",

    eslint: {
        config: {
            stylistic: {
                semi: false,
                indent: "tab",
                quotes: "double",
                commaDangle: "never",
                braceStyle: "1tbs"
            }
        }
    }
})
// prettier
// {
//   "semi": false,
//   "singleQuote": false,
//   "bracketSpacing": true,
//   "arrowParens": "always",
//   "endOfLine": "lf",
//   "printWidth": 120,
//   "quoteProps": "as-needed",
//   "singleAttributePerLine": true,
//   "tabWidth": 4,
//   "useTabs": true,
//   "vueIndentScriptAndStyle": false
// }
