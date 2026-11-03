import { defineConfig } from 'vite-plus'

// Vite+ only runs additional checks; Nuxt still owns dev and build.
export default defineConfig({
  check: { fmt: false },
  lint: {
    ignorePatterns: ['.nuxt/**', '.output/**', '.wrangler/**'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
})
