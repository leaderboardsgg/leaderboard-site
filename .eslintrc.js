module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  root: true,
  // add your custom rules here
  rules: {
    'eol-last': ['error', 'always'],
    "vue/sort-keys": ["error", "asc", {
      "caseSensitive": true,
      "ignoreChildrenOf": ["model"],
      "ignoreGrandchildrenOf": ["computed", "directives", "inject", "props", "watch"],
      "minKeys": 2,
      "natural": false
    }]
  },
}
