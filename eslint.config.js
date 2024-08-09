import typescriptEslint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import tailwindcss from 'eslint-plugin-tailwindcss'
import vue from 'eslint-plugin-vue'
import vuejsAccessibility from 'eslint-plugin-vuejs-accessibility'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import withNuxt from './.nuxt/eslint.config.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default withNuxt(
  {
    ignores: [
      '**/.nuxt',
      '**/.output',
      '**/.github',
      '**/.husky',
      '**/.vscode',
      '**/coverage',
      '**/node_modules',
      '**/static',
      '**/testUtils.ts',
      '**/vite*.ts',
      '**/*.d.ts',
      '**/lib/api',
    ],
  },
  ...compat.extends(
    // '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:nuxt/recommended',
    '@vue/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:tailwindcss/recommended',
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      // nuxt,
      prettier,
      tailwindcss,
      vue,
      'vuejs-accessibility': vuejsAccessibility,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    settings: {
      'vue-i18n': {
        localedir: '',
      },
    },

    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      'arrow-parens': ['error', 'always'],
      'comma-dangle': 'off',
      'eol-last': ['error', 'always'],
      semi: 'off',
      'space-before-function-paren': 'off',
      'tailwindcss/no-custom-classname': 'off',
      'vue/html-self-closing': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vuejs-accessibility/no-onchange': 'off',
    },
  },
)
