module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
    '^~/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jsdom',
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
    "^.+\\.ts$": "ts-jest"
  }
}
