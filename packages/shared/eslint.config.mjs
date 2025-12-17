// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

/**
 * Shared ESLint configuration for the turntablehq monorepo
 * This config can be imported and used across all packages
 */
export const sharedNuxtEslintConfig = {
  features: {
    stylistic: {
      semi: false,
      indent: "tab",
      quotes: "double",
      commaDangle: "never",
      braceStyle: "1tbs"
    }
  }
}

/**
 * Default export for the shared package itself
 */
// @ts-expect-error - Type inference issue, but runtime types are correct
export default createConfigForNuxt(sharedNuxtEslintConfig)
