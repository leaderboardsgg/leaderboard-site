import { sentenceCase } from './helpers'
import type { Ref } from 'vue'

const emailRegex =
  // eslint-disable-next-line
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
/**
 * Given an email reference, returns a boolean of whether or not the
 * email is valid
 *
 * @param email The email reference
 * @returns boolean
 */
export function isEmailValid(email: Ref<string>): boolean {
  return emailRegex.test(email.value)
}

const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
/**
 * Given a password reference, returns a boolean of whether or not the
 * password is valid. A password must:
 * - be between 8 and 80 characters
 * - contain a number
 * - contain a uppercase and lowercase letter
 *
 * @param password The password reference
 * @returns boolean
 */
export function isPasswordValid(password: string): boolean {
  // password length between 8-80 characters
  // must contain a number, uppercase, and lowercase letter
  return (
    passwordRegex.test(password) &&
    password.length > 7 &&
    password.length < 81
  )
}

// Below is our username specification :)
// A valid username must not contain fewer than 2 characters.
// A valid username must not contain greater than 25 characters.
// A valid username must not contain any single character that is not alphanumeric, a hyphen, an underscore, or an apostrophe.
// A valid username must not contain any hyphens, underscores, or apostrophes that are not immediately and individually preceded and followed by one or more alphanumeric characters.
const usernameRegex = /^(?:[a-zA-Z0-9]+[-_']?[a-zA-Z0-9]+)+$/
/**
 * Given a username reference, returns a boolean of whether or not the
 * username is valid. A username must not contain:
 * - fewer than 2 characters
 * - greater than 25 characters
 * - any hyphens, underscores, or apostrophes that are not immediately and individually preceded and followed by one or more alphanumeric characters
 *
 * @param username The username reference
 * @returns boolean
 */
export function isUsernameValid(username: Ref<string>): boolean {
  return (
    usernameRegex.test(username.value) &&
    username.value.length > 1 &&
    username.value.length < 26
  )
}

/**
 * Given a password and a confirmation, returns a boolean of if they're equal
 *
 * @param password The password reference
 * @param passwordConfirm The password confirmation reference
 * @returns boolean
 */
export function passwordsAreTheSame(
  password: Ref<string>,
  passwordConfirm: Ref<string>,
): boolean {
  return password.value === passwordConfirm.value
}

/**
 * Takes in an array of errors from an API response, and transforms
 * them into a single readable string.
 *
 * @param errors The array of errors
 * @returns string
 */
export function renderErrors(errors: string[][]): string {
  const errorText = errors
    .map((errorType) => errorType.map(sentenceCase))
    .join(', ')
  return `Error(s): ${errorText}`
}
