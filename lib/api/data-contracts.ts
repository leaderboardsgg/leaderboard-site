/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CalendarSystem {
  id: string
  name: string
  /** @format int32 */
  minYear: number
  /** @format int32 */
  maxYear: number
  eras: Era[]
}

/** Represents a `Category` tied to a `Leaderboard`. */
export interface CategoryViewModel {
  /**
   * The unique identifier of the `Category`.<br />
   * @format int64
   */
  id: number
  /**
   * The display name of the `Category`.
   * @example "Foo Bar Baz%"
   */
  name: string
  /**
   * The URL-scoped unique identifier of the `Category`.<br />
   * @example "foo-bar-baz"
   */
  slug: string
  /**
   * The rules of the `Category`.
   * @example "Video proof is required."
   */
  rules?: string | null
}

export interface ChangePasswordRequest {
  password: string
}

/** This request object is sent when creating a `Category`. */
export interface CreateCategoryRequest {
  /**
   * The display name of the `Category`.
   * @minLength 1
   * @example "Foo Bar Baz%"
   */
  name: string
  /**
   * The URL-scoped unique identifier of the `Category`.<br />
   * Must be [2, 25] in length and consist only of alphanumeric characters and hyphens.
   * @minLength 1
   * @example "foo-bar-baz"
   */
  slug: string
  /**
   * The rules of the `Category`.
   * @example "Video proof is required."
   */
  rules?: string | null
  /**
   * The ID of the `Leaderboard` the `Category` is a part of.
   * @format int64
   */
  leaderboardId: number
}

/** This request object is sent when creating a `Leaderboard`. */
export interface CreateLeaderboardRequest {
  /**
   * The display name of the `Leaderboard` to create.
   * @example "Foo Bar"
   */
  name: string
  /**
   * The URL-scoped unique identifier of the `Leaderboard`.<br />
   * Must be [2, 80] in length and consist only of alphanumeric characters and hyphens.
   * @example "foo-bar"
   */
  slug: string
}

/** This request object is sent when creating a `Run`. */
export interface CreateRunRequest {
  playedOn: LocalDate
  submittedAt: Instant
  /**
   * The ID of the `Category` for the `Run`.
   * @format int64
   */
  categoryId: number
}

export interface Era {
  name: string
}

export type Instant = object

/** @format int32 */
export type IsoDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

/** Represents a collection of `Leaderboard` entities. */
export interface LeaderboardViewModel {
  /**
   * The unique identifier of the `Leaderboard`.<br />
   * Generated on creation.
   * @format int64
   */
  id: number
  /**
   * The display name of the `Leaderboard` to create.
   * @example "Foo Bar"
   */
  name: string
  /**
   * The URL-scoped unique identifier of the `Leaderboard`.<br />
   * Must be [2, 80] in length and consist only of alphanumeric characters and hyphens.
   * @example "foo-bar"
   */
  slug: string
  /**
   * The general rules for the Leaderboard.
   * @example "Timer starts on selecting New Game and ends when the final boss is beaten."
   */
  rules?: string | null
  /** A collection of `Category` entities for the `Leaderboard`. */
  categories: CategoryViewModel[]
}

export interface LocalDate {
  calendar: CalendarSystem
  /** @format int32 */
  year: number
  /** @format int32 */
  month: number
  /** @format int32 */
  day: number
  dayOfWeek: IsoDayOfWeek
  /** @format int32 */
  yearOfEra: number
  era: Era
  /** @format int32 */
  dayOfYear: number
}

/** This request object is sent when a `User` is attempting to log in. */
export interface LoginRequest {
  /**
   * The `User`'s email address.
   * @format email
   * @minLength 1
   * @example "john.doe@example.com"
   */
  email: string
  /**
   * The `User`'s password. It:
   * <ul><li>supports Unicode;</li><li>must be [8, 80] in length;</li><li>must have at least:</li><ul><li>one uppercase letter;</li><li>one lowercase letter; and</li><li>one number.</li></ul></ul>
   * @minLength 1
   * @example "P4ssword"
   */
  password: string
}

/** This response object is received upon a successful log-in request. */
export interface LoginResponse {
  /**
   * A JSON Web Token to authenticate and authorize queries with.
   * @minLength 1
   */
  token: string
}

export interface ProblemDetails {
  type?: string | null
  title?: string | null
  /** @format int32 */
  status?: number | null
  detail?: string | null
  instance?: string | null
  [key: string]: any
}

export interface RecoverAccountRequest {
  /**
   * The user's name.
   * @minLength 1
   */
  username: string
  /**
   * The user's email address.
   * @format email
   * @minLength 1
   */
  email: string
}

/** This request object is sent when a `User` is attempting to register. */
export interface RegisterRequest {
  /**
   * The username of the `User`. It:
   * <ul><li>must be [2, 25] in length;</li><li>must be made up of letters sandwiching zero or one of:</li><ul><li>hyphen;</li><li>underscore; or</li><li>apostrophe</li></ul></ul>
   * Usernames are saved case-sensitively, but matched against case-insensitively.
   * A `User` may not register with the name 'Cool' when another `User` with the name 'cool'
   * exists.
   * @example "J'on-Doe"
   */
  username: string
  /**
   * The `User`'s email address.
   * @example "john.doe@example.com"
   */
  email: string
  /**
   * The `User`'s password. It:
   * <ul><li>supports Unicode;</li><li>must be [8, 80] in length;</li><li>must have at least:</li><ul><li>one uppercase letter;</li><li>one lowercase letter; and</li><li>one number.</li></ul></ul>
   * @example "P4ssword"
   */
  password: string
}

export interface RunViewModel {
  /**
   * The unique identifier of the `Run`.<br />
   * Generated on creation.
   * @pattern ^[a-zA-Z0-9-_]{22}$
   */
  id: string
  submittedAt: Instant
  /**
   * The ID of the `Category` for `Run`.
   * @format int64
   */
  categoryId: number
}

export interface UserViewModel {
  /**
   * The unique identifier of the `User`.<br />
   * Generated on creation.
   * @pattern ^[a-zA-Z0-9-_]{22}$
   */
  id: string
  /**
   * The username of the `User`. It:
   * <ul><li>must be [2, 25] in length;</li><li>must be made up of alphanumeric characters around zero or one of:</li><ul><li>hyphen;</li><li>underscore; or</li><li>apostrophe</li></ul></ul>
   * Usernames are saved case-sensitively, but matcehd against case-insensitively.
   * A `User` may not register with the name 'Cool' when another `User` with the name 'cool'
   * exists.
   * @example "J'on-Doe"
   */
  username: string
}

export interface ValidationProblemDetails {
  type?: string | null
  title?: string | null
  /** @format int32 */
  status?: number | null
  detail?: string | null
  instance?: string | null
  errors: Record<string, string[]>
  [key: string]: any
}

export interface LeaderboardsListParams {
  /** The IDs of the `Leaderboard`s which should be retrieved. */
  ids?: number[]
}
