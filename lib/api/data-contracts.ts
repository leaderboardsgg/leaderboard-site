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

/** Represents a `Category` tied to a `Leaderboard`. */
export interface CategoryViewModel {
  /**
   * The unique identifier of the `Category`.
   * @format int64
   */
  id: number
  /**
   * The display name of the `Category`.
   * @example "Foo Bar Baz%"
   */
  name: string
  /**
   * The URL-scoped unique identifier of the `Category`.
   * @example "foo-bar-baz"
   */
  slug: string
  /**
   * Information pertaining to the `Category`.
   * @example "Video proof is required."
   */
  info: string | null
  type: RunType
  sortDirection: SortDirection
  /** @format int64 */
  leaderboardId: number
  /**
   * @format date-time
   * @example "1984-01-01T00:00:00Z"
   */
  createdAt: string
  /**
   * @format date-time
   * @example "1984-01-01T00:00:00Z"
   */
  updatedAt: string | null
  /**
   * @format date-time
   * @example "1984-01-01T00:00:00Z"
   */
  deletedAt: string | null
  status: Status
}

/** A fake ProblemDetails subclass used for deserialization and documentation. Do not instantiate! */
export interface CategoryViewModelConflictDetails {
  type?: string | null
  title?: string | null
  /** @format int32 */
  status?: number | null
  detail?: string | null
  instance?: string | null
  /** Represents a `Category` tied to a `Leaderboard`. */
  conflicting?: CategoryViewModel | null
  [key: string]: any
}

export interface CategoryViewModelListView {
  data: CategoryViewModel[]
  /**
   * The total number of records matching the given criteria that
   * exist in the database, NOT the total number of records returned.
   * @format int64
   */
  total: number
  /**
   * The default limit that will be applied for this resource type
   * if the client does not specify one in the query string.
   * @format int32
   */
  limitDefault: number
  /**
   * The maximum value the client is allowed to specify as a limt for
   * endpoints return a paginated list of resources of this type.
   * Exceeding this value will result in an error.
   * @format int32
   */
  limitMax: number
}

export interface ChangePasswordRequest {
  /** @minLength 1 */
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
   * The URL-scoped unique identifier of the `Category`.
   *
   * Must be [2, 25] in length and consist only of alphanumeric characters and hyphens.
   * @minLength 1
   * @example "foo-bar-baz"
   */
  slug: string
  /**
   * Information pertaining to the `Category`.
   * @example "Video proof is required."
   */
  info?: string
  sortDirection: SortDirection
  type: RunType
}

/** This request object is sent when creating a `Leaderboard`. */
export interface CreateLeaderboardRequest {
  /**
   * The display name of the `Leaderboard` to create.
   * @minLength 1
   * @example "Foo Bar"
   */
  name: string
  /**
   * The URL-scoped unique identifier of the `Leaderboard`.
   *
   * Must be [2, 80] in length and consist only of alphanumeric characters and hyphens.
   * @minLength 1
   * @example "foo-bar"
   */
  slug: string
  info?: string
}

/**
 * Request sent when creating a Run. Set `runType` to `"Time"` for a timed
 * request, and `"Score"` for a scored one. `runType` *must* be at the top
 * of the request object.
 */
export type CreateRunRequest = BaseCreateRunRequest &
  (
    | BaseCreateRunRequestRunTypeMapping<'Time', CreateTimedRunRequest>
    | BaseCreateRunRequestRunTypeMapping<'Score', CreateScoredRunRequest>
  )

/** `runType: "Score"` */
export type CreateScoredRunRequest = BaseCreateRunRequest & {
  /**
   * The score achieved during the run.
   * @format int64
   */
  score: number
}

/** `runType: "Time"` */
export type CreateTimedRunRequest = BaseCreateRunRequest & {
  /**
   * The duration of the run. Must obey the format 'HH:mm:ss.sss', with leading zeroes.
   * @example "12:34:56.999"
   */
  time: string
}

/** Represents a collection of `Leaderboard` entities. */
export interface LeaderboardViewModel {
  /**
   * The unique identifier of the `Leaderboard`.
   *
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
   * The URL-scoped unique identifier of the `Leaderboard`.
   *
   * Must be [2, 80] in length and consist only of alphanumeric characters and hyphens.
   * @example "foo-bar"
   */
  slug: string
  /**
   * The general information for the Leaderboard.
   * @example "Timer starts on selecting New Game and ends when the final boss is beaten."
   */
  info: string
  /**
   * The time the Leaderboard was created.
   * @format date-time
   * @example "1984-01-01T00:00:00Z"
   */
  createdAt: string
  /**
   * The last time the Leaderboard was updated or null.
   * @format date-time
   * @example "1984-01-01T00:00:00Z"
   */
  updatedAt: string | null
  /**
   * The time at which the Leaderboard was deleted, or null if the Leaderboard has not been deleted.
   * @format date-time
   * @example "1984-01-01T00:00:00Z"
   */
  deletedAt: string | null
  status: Status
}

/** A fake ProblemDetails subclass used for deserialization and documentation. Do not instantiate! */
export interface LeaderboardViewModelConflictDetails {
  type?: string | null
  title?: string | null
  /** @format int32 */
  status?: number | null
  detail?: string | null
  instance?: string | null
  /** Represents a collection of `Leaderboard` entities. */
  conflicting?: LeaderboardViewModel | null
  [key: string]: any
}

export interface LeaderboardViewModelListView {
  data: LeaderboardViewModel[]
  /**
   * The total number of records matching the given criteria that
   * exist in the database, NOT the total number of records returned.
   * @format int64
   */
  total: number
  /**
   * The default limit that will be applied for this resource type
   * if the client does not specify one in the query string.
   * @format int32
   */
  limitDefault: number
  /**
   * The maximum value the client is allowed to specify as a limt for
   * endpoints return a paginated list of resources of this type.
   * Exceeding this value will result in an error.
   * @format int32
   */
  limitMax: number
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
   * @minLength 1
   * @example "J'on-Doe"
   */
  username: string
  /**
   * The `User`'s email address.
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

export type RunType = 'Time' | 'Score'

export type RunViewModel = BaseRunViewModel &
  (
    | BaseRunViewModelRunTypeMapping<'Time', TimedRunViewModel>
    | BaseRunViewModelRunTypeMapping<'Score', ScoredRunViewModel>
  )

export interface RunViewModelListView {
  data: (TimedRunViewModel | ScoredRunViewModel)[]
  /**
   * The total number of records matching the given criteria that
   * exist in the database, NOT the total number of records returned.
   * @format int64
   */
  total: number
  /**
   * The default limit that will be applied for this resource type
   * if the client does not specify one in the query string.
   * @format int32
   */
  limitDefault: number
  /**
   * The maximum value the client is allowed to specify as a limt for
   * endpoints return a paginated list of resources of this type.
   * Exceeding this value will result in an error.
   * @format int32
   */
  limitMax: number
}

export type ScoredRunViewModel = BaseRunViewModel & {
  /**
   * The score achieved during the run.
   * @format int64
   */
  score: number
}

export type SortDirection = 'Ascending' | 'Descending'

/** Used in GetLeaderboards to sort leaderboards by a field. */
export type SortLeaderboardsBy =
  | 'Name_Asc'
  | 'Name_Desc'
  | 'CreatedAt_Asc'
  | 'CreatedAt_Desc'

export type Status = 'Published' | 'Deleted'

export type StatusFilter = 'Published' | 'Deleted' | 'Any'

export type TimedRunViewModel = BaseRunViewModel & {
  /**
   * The duration of the run.
   * @example "25:01:01.001"
   */
  time: string
}

export interface UpdateCategoryRequest {
  name?: string
  slug?: string
  info?: string
  sortDirection?: SortDirection | null
  status?: Status | null
}

export interface UpdateLeaderboardRequest {
  name?: string
  slug?: string
  info?: string
  status?: Status | null
}

/**
 * Request sent when updating a run.
 * All fields are optional but you must specify at least one.
 */
export type UpdateRunRequest = BaseUpdateRunRequest &
  (
    | BaseUpdateRunRequestRunTypeMapping<'Time', UpdateTimedRunRequest>
    | BaseUpdateRunRequestRunTypeMapping<'Score', UpdateScoredRunRequest>
  )

export type UpdateScoredRunRequest = BaseUpdateRunRequest & {
  /** @format int64 */
  score?: number | null
}

export type UpdateTimedRunRequest = BaseUpdateRunRequest & {
  /** @example "25:01:01.001" */
  time?: string | null
}

/**
 * The request object sent when updating a `User`.
 * Currently, only the `Role` field exists, which only accepts
 * `UserRole.Banned` and `UserRole.Confirmed` as valid values.
 */
export interface UpdateUserRequest {
  role?: UserRole
}

export type UserRole = 'Registered' | 'Confirmed' | 'Administrator' | 'Banned'

export interface UserViewModel {
  /**
   * The unique identifier of the `User`.
   *
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
  role: UserRole
  /**
   * @format date-time
   * @example "1984-01-01T00:00:00Z"
   */
  createdAt: string
}

export interface UserViewModelListView {
  data: UserViewModel[]
  /**
   * The total number of records matching the given criteria that
   * exist in the database, NOT the total number of records returned.
   * @format int64
   */
  total: number
  /**
   * The default limit that will be applied for this resource type
   * if the client does not specify one in the query string.
   * @format int32
   */
  limitDefault: number
  /**
   * The maximum value the client is allowed to specify as a limt for
   * endpoints return a paginated list of resources of this type.
   * Exceeding this value will result in an error.
   * @format int32
   */
  limitMax: number
}

export interface ValidationProblemDetails {
  type?: string | null
  title?: string | null
  /** @format int32 */
  status?: number | null
  detail?: string | null
  instance?: string | null
  errors?: Record<string, string[]>
  [key: string]: any
}

/**
 * Request sent when creating a Run. Set `runType` to `"Time"` for a timed
 * request, and `"Score"` for a scored one. `runType` *must* be at the top
 * of the request object.
 */
interface BaseCreateRunRequest {
  runType: RunType
  info?: string
  /**
   * The date the `Run` was played on. Must obey the format 'YYYY-MM-DD', with leading zeroes.
   * @format date
   * @example "2000-01-01"
   */
  playedOn: string
}

type BaseCreateRunRequestRunTypeMapping<Key, Type> = {
  runType: Key
} & Type

interface BaseRunViewModel {
  runType: RunType
  /**
   * The unique identifier of the `Run`.
   *
   * Generated on creation.
   * @pattern ^[a-zA-Z0-9-_]{22}$
   */
  id: string
  /** User-provided details about the run. */
  info: string | null
  /**
   * The date the run was done, *not* when it was submitted.
   * @format date
   * @example "2000-01-01"
   */
  playedOn: string
  /**
   * The time the run was submitted to the DB.
   * @format date-time
   * @example "1984-01-01T00:00:00Z"
   */
  createdAt: string
  /**
   * The last time the run was updated or null.
   * @format date-time
   * @example "1984-01-01T00:00:00Z"
   */
  updatedAt: string | null
  /**
   * The time at which the run was deleted, or null if the run has not been deleted.
   * @format date-time
   * @example "1984-01-01T00:00:00Z"
   */
  deletedAt: string | null
  /**
   * The ID of the `Category` for `Run`.
   * @format int64
   */
  categoryId: number
  /** The user who submitted this run. */
  user: UserViewModel
  status: Status
  /**
   * The record's rank for its category. Will be 0 if it's not part of
   * record retrieval.
   * @format int32
   */
  rank?: number
}

type BaseRunViewModelRunTypeMapping<Key, Type> = {
  runType: Key
} & Type

/**
 * Request sent when updating a run.
 * All fields are optional but you must specify at least one.
 */
interface BaseUpdateRunRequest {
  runType: RunType
  info?: string
  /**
   * @format date
   * @example "2000-01-01"
   */
  playedOn?: string | null
  status?: Status | null
}

type BaseUpdateRunRequestRunTypeMapping<Key, Type> = {
  runType: Key
} & Type

/** This request object is sent when a `User` is attempting to register. */
export type RegisterPayload = RegisterRequest

/** This request object is sent when a `User` is attempting to log in. */
export type LoginPayload = LoginRequest

export type SendRecoveryEmailPayload = RecoverAccountRequest

export type ChangePasswordPayload = ChangePasswordRequest

export interface GetCategoriesForLeaderboardParams {
  /**
   * The maximum number of records to return. Fewer records may be returned.
   * @format int32
   */
  limit?: number
  /**
   * The zero-based index at which to begin selecting records to return.
   * @format int32
   * @default 0
   */
  offset?: number
  /** @default "Published" */
  status?: StatusFilter
  /** @format int64 */
  id: number
}

/** This request object is sent when creating a `Category`. */
export type CreateCategoryPayload = CreateCategoryRequest

export type UpdateCategoryPayload = UpdateCategoryRequest

export interface ListLeaderboardsParams {
  /**
   * The maximum number of records to return. Fewer records may be returned.
   * @format int32
   */
  limit?: number
  /**
   * The zero-based index at which to begin selecting records to return.
   * @format int32
   * @default 0
   */
  offset?: number
  /** @default "Published" */
  status?: StatusFilter
  /**
   * Used in GetLeaderboards to sort leaderboards by a field.
   * @default "Name_Asc"
   */
  sortBy?: SortLeaderboardsBy
}

export interface SearchLeaderboardsParams {
  /** The query string. Must not be empty. */
  q: string
  /**
   * The maximum number of records to return. Fewer records may be returned.
   * @format int32
   */
  limit?: number
  /**
   * The zero-based index at which to begin selecting records to return.
   * @format int32
   * @default 0
   */
  offset?: number
  /** @default "Published" */
  status?: StatusFilter
}

/** This request object is sent when creating a `Leaderboard`. */
export type CreateLeaderboardPayload = CreateLeaderboardRequest

export type UpdateLeaderboardPayload = UpdateLeaderboardRequest

/**
 * Request sent when creating a Run. Set `runType` to `"Time"` for a timed
 * request, and `"Score"` for a scored one. `runType` *must* be at the top
 * of the request object.
 */
export type CreateRunPayload = CreateTimedRunRequest | CreateScoredRunRequest

export interface GetRunsForCategoryParams {
  /**
   * The maximum number of records to return. Fewer records may be returned.
   * @format int32
   */
  limit?: number
  /**
   * The zero-based index at which to begin selecting records to return.
   * @format int32
   * @default 0
   */
  offset?: number
  /** @default "Published" */
  status?: StatusFilter
  /** @format int64 */
  id: number
}

export interface GetRecordsForCategoryParams {
  /**
   * The maximum number of records to return. Fewer records may be returned.
   * @format int32
   */
  limit?: number
  /**
   * The zero-based index at which to begin selecting records to return.
   * @format int32
   * @default 0
   */
  offset?: number
  /** @format int64 */
  id: number
}

/**
 * Request sent when updating a run.
 * All fields are optional but you must specify at least one.
 */
export type UpdateRunPayload = UpdateTimedRunRequest | UpdateScoredRunRequest

export interface ListUsersParams {
  /**
   * The maximum number of records to return. Fewer records may be returned.
   * @format int32
   */
  limit?: number
  /**
   * The zero-based index at which to begin selecting records to return.
   * @format int32
   * @default 0
   */
  offset?: number
  /**
   * Multiple comma-separated values are allowed.
   * @default "Confirmed, Administrator"
   */
  role?: UserRole
}

/**
 * The request object sent when updating a `User`.
 * Currently, only the `Role` field exists, which only accepts
 * `UserRole.Banned` and `UserRole.Confirmed` as valid values.
 */
export type UpdateUserPayload = UpdateUserRequest
