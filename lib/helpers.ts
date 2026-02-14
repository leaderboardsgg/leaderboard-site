import type { Ref } from 'vue'

/**
 * @returns The base URL for the backend API.
 */
export function getBaseUrl(): string {
  let fallbackUrl = 'http://localhost:8000'
  if (process.env.TEST) {
    fallbackUrl = ''
  }

  return (
    process.env.NUXT_PUBLIC_BACKEND_BASE_URL ?? fallbackUrl
  )
}

/**
 * Takes a parameter of an unknown type and returns a
 * boolean indicating whether or not the parameter is
 * an instance of the ProblemDetails interface.
 *
 * @param o The parameter to check.
 * @returns boolean
 */
export function isProblemDetails(o: unknown): boolean {
  return Boolean(
    o &&
      typeof o === 'object' &&
      o instanceof Response &&
      (Object.keys(o).includes('data') || Object.keys(o).includes('error')),
  )
}

/**
 * Takes a parameter of an unknown type and returns a
 * boolean indicating whether or not the parameter is
 * an instance of the ValidationProblemDetails interface.
 *
 * @param o The parameter to check.
 * @returns boolean
 */
export function isValidationProblemDetails(o: unknown): boolean {
  return Boolean(
    o &&
      typeof o === 'object' &&
      o instanceof Response &&
      Object.keys(o).includes('errors'),
  )
}

/**
 * Takes a string and returns a sentence case version of it.
 *
 * **Note:** This function assumes that the string is camelCase or PascalCase.
 *
 * @param string The string to convert.
 * @returns string
 */
export function sentenceCase(string: string): string {
  let words = string.split(/(?=[A-Z])/)
  words = words.map((word) => word.toLowerCase())

  let sentence = words.join(' ')
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1)
  return sentence
}

/**
 * Takes a boolean reference and flips it.
 *
 * @param state The state to toggle
 */
export function toggleState(state: Ref<boolean>): void {
  state.value = !state.value
}

export default {
  isProblemDetails,
  isValidationProblemDetails,
  sentenceCase,
}
