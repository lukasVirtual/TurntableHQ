// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@tresjs/nuxt'
  ],

  tres: {
    devtools: true,
    glsl: true,
    
  },
  devtools: {
    enabled: true
  },  

  css: ['assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
    '/render/**': { ssr: false }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
