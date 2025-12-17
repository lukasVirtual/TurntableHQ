// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"
import { sharedNuxtEslintConfig } from "@turntablehq/shared/eslint.config.mjs"

// @ts-expect-error - withNuxt accepts the config object, TypeScript inference issue
export default withNuxt(sharedNuxtEslintConfig)
