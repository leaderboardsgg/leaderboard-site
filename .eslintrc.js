module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'plugin:vuejs-accessibility/recommended',
    'prettier',
  ],
  ignorePatterns: [
    '.husky',
    '.nuxt',
    'coverage',
    'node_modules',
    'static',
    'jest.*.js',
    'testUtils.ts',
  ],
  plugins: ['jest', 'prettier', 'vue', 'vuejs-accessibility'],
  root: true,
  // add your custom rules here
  rules: {
    'eol-last': ['error', 'always'],
    'vue/sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        ignoreChildrenOf: ['model'],
        ignoreGrandchildrenOf: [
          'computed',
          'directives',
          'inject',
          'props',
          'watch',
        ],
        minKeys: 2,
        natural: false,
      },
    ],
  },
};
