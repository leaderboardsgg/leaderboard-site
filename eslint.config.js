import typescriptEslint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-plugin-prettier'
import tailwindcss from 'eslint-plugin-tailwindcss'
import vuejsAccessibility from 'eslint-plugin-vuejs-accessibility'
import globals from 'globals'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import pluginVue from 'eslint-plugin-vue'

export default createConfigForNuxt(
  {
    name: 'Configs',
    ...prettier.configs['recommended'],
    ...tailwindcss.configs['recommended'],
    ...typescriptEslint.configs['recommended'],
    ...pluginVue.configs['flat/recommended'],
    ...vuejsAccessibility.configs['flat/recommended'],
  },
  {
    name: 'Plugins',
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
      tailwindcss,
      pluginVue,
      'vuejs-accessibility': vuejsAccessibility,
    },
  },
  {
    name: 'Ignores',
    ignores: [
      './.nuxt/',
      './.output/',
      './.github/',
      './.husky/',
      './.vscode/',
      './node_modules/',
      './testUtils.ts',
      './vitest.config.ts',
      './vitest.setup.ts',
      './types/shims-vue.d.ts',
      './lib/api/',
    ],
  },
  {
    name: 'Leaderboards.gg config',
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
