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
      Object.keys(o).includes('status') &&
      Object.keys(o).includes('title'),
  )
}

export default {
  isProblemDetails,
}
