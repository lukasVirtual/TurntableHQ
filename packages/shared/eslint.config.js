import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: false,
      indent: 4, // 4 or 'tab'
      quotes: 'double',
      commaDangle: 'never',
      braceStyle: '1tbs'
    }
  }
})