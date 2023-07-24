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

export default {
  isProblemDetails,
  isValidationProblemDetails,
}
