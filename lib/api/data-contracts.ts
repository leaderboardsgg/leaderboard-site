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

/**
 * Represents a site-scoped or `Leaderboard`-scoped `Ban` tied to a `User`.
 */
export interface Ban {
  /**
   * The unique identifier of the `Ban`.<br />
   * Generated on creation.
   * @format int64
   */
  id?: number
  createdAt: Instant
  deletedAt?: Instant
  /**
   * The ID of the `User` who issued the `Ban`.<br />
   * Must be a *Moderator* or *Administrator*.
   * @format uuid
   */
  banningUserId?: string | null
  /**
   * The ID of the `User` who received the `Ban`.
   * @format uuid
   */
  bannedUserId: string
  /**
   * ID of the `Leaderboard` the `Ban` belongs to.<br />
   * If this value is null, the `Ban` is site-wide.
   * @format int64
   */
  leaderboardId?: number | null
  /**
   * The reason for the issued `Ban`.<br />
   * Must not be null.
   */
  reason: string
}

export interface CalendarSystem {
  id?: string | null
  name?: string | null
  /** @format int32 */
  minYear?: number
  /** @format int32 */
  maxYear?: number
  eras?: Era[] | null
}

/**
 * Represents a `Category` tied to a `Leaderboard`.
 */
export interface Category {
  /**
   * The unique identifier of the `Category`.<br />
   * Generated on creation.
   * @format int64
   */
  id?: number
  /**
   * The ID of the `Leaderboard` the `Category` is a part of.
   * @format int64
   */
  leaderboardId: number
  /**
   * The display name of the `Category`.
   * @example Foo Bar Baz%
   */
  name: string
  /**
   * The URL-scoped unique identifier of the `Category`.<br />
   * Must be [2, 25] in length and consist only of alphanumeric characters and hyphens.
   * @example foo-bar-baz
   */
  slug: string
  /**
   * The rules of the `Category`.
   * @example Video proof is required.
   */
  rules?: string | null
  /**
   * The minimum player count of the `Category`. The default is 1.
   * @format int32
   */
  playersMin: number
  /**
   * The maximum player count of the `Category`. The default is `PlayersMin`.
   * @format int32
   */
  playersMax: number
}

/**
 * This request object is sent when creating a `Category`.
 */
export interface CreateCategoryRequest {
  /**
   * The display name of the `Category`.
   * @example Foo Bar Baz%
   */
  name: string
  /**
   * The URL-scoped unique identifier of the `Category`.<br />
   * Must be [2, 25] in length and consist only of alphanumeric characters and hyphens.
   * @example foo-bar-baz
   */
  slug: string
  /**
   * The rules of the `Category`.
   * @example Video proof is required.
   */
  rules?: string | null
  /**
   * The minimum player count of the `Category`. The default is 1.
   * @format int32
   * @min 1
   * @max 2147483647
   */
  playersMin?: number | null
  /**
   * The maximum player count of the `Category`. The default is `PlayersMin`.
   * @format int32
   * @min 1
   * @max 2147483647
   */
  playersMax?: number | null
  /**
   * The ID of the `Leaderboard` the `Category` is a part of.
   * @format int64
   */
  leaderboardId: number
}

/**
 * This request object is sent when creating a `Judgement`.
 */
export interface CreateJudgementRequest {
  /**
   * The ID of the `Run` that is being judged.
   * @format uuid
   */
  runId?: string
  /**
   * A comment elaborating on the `Judgement`'s decision. Must have a value when the
   * affected `Run` is not approved (`Approved` is null or false).
   * @example The video proof is not of sufficient quality.
   */
  note?: string | null
  /** The `Judgement`'s decision. May be null, true, or false. */
  approved?: boolean | null
}

/**
 * This request object is sent when banning a `User` from a `Leaderboard`.
 */
export interface CreateLeaderboardBanRequest {
  /**
   * The ID of the `User` which is banned.
   * @format uuid
   */
  userId: string
  /**
   * The reason for the `User`'s ban.
   * @example Abusive or hateful conduct.
   */
  reason: string
  /**
   * The ID of the `Leaderboard` from which the `User` is banned.
   * @format int64
   */
  leaderboardId: number
}

/**
 * This request object is sent when creating a `Leaderboard`.
 */
export interface CreateLeaderboardRequest {
  /**
   * The display name of the `Leaderboard` to create.
   * @example Foo Bar
   */
  name?: string | null
  /**
   * The URL-scoped unique identifier of the `Leaderboard`.<br />
   * Must be [2, 80] in length and consist only of alphanumeric characters and hyphens.
   * @example foo-bar
   */
  slug?: string | null
}

/**
 * This request object is sent when promoting a `User` to *Moderator* for a `Leaderboard`.
 */
export interface CreateModshipRequest {
  /**
   * The ID of the `Leaderboard` the `User` should become a *Moderator* for.
   * @format int64
   */
  leaderboardId: number
  /**
   * The ID of the `User` who should be promoted.
   * @format uuid
   */
  userId: string
}

/**
 * This request object is sent when creating a `Participation` for a `User` on a `Run`.
 */
export interface CreateParticipationRequest {
  /** An optional comment about the `Participation`. */
  comment?: string | null
  /** An optional link to video proof of the `Run`. */
  vod?: string | null
  /**
   * The ID of the `User` who is participating.
   * @format uuid
   */
  runnerId: string
  /**
   * The ID of the `Run` the `Participation` is created on.
   * @format uuid
   */
  runId: string
  /** Indicates whether the `Participation` is for the `User` who is creating it. */
  isSubmitter: boolean
}

/**
 * This request object is sent when creating a `Run`.
 */
export interface CreateRunRequest {
  playedOn: LocalDate
  submittedAt: Instant
  /**
   * The status of the `Run`.<br />
   *     - 0: Created<br />
   *     - 1: Submitted<br />
   *     - 2: Pending<br />
   *     - 3: Approved<br />
   *     - 4: Rejected
   */
  status: RunStatus
  /**
   * The ID of the `Category` for the `Run`.
   * @format int64
   */
  categoryId: number
}

/**
 * This request object is sent when banning a `User` from the site.
 */
export interface CreateSiteBanRequest {
  /**
   * The ID of the `User` which is banned.
   * @format uuid
   */
  userId: string
  /**
   * The reason as to the `User`'s ban.
   * @example Abusive or hateful conduct.
   */
  reason: string
}

export interface Era {
  name?: string | null
}

export type Instant = object

/**
 * @format int32
 */
export type IsoDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

/**
 * Represents a decision made by a *Moderator* (`User`) about a `Run`.
 */
export interface Judgement {
  /**
   * The unique identifier of the `Judgement`.<br />
   * Generated on creation.
   * @format int64
   */
  id?: number
  createdAt: Instant
  /**
   * The ID of the `Run` which is being judged.
   * @format uuid
   */
  runId: string
  /** Represents an entry on a `Category`. */
  run: Run
  /**
   * The ID of the *Moderator* (`User`) who is making the `Judgement`.
   * @format uuid
   */
  judgeId: string
  /** Represents a user account registered on the website. */
  judge: User
  /** The `Judgement`'s decision. May be null, true, or false. */
  approved?: boolean | null
  /**
   * A comment elaborating on the `Judgement`'s decision. Must have a value when the
   * affected `Run` is not approved (`Approved` is null or false).
   * @example The video proof is not of sufficient quality.
   */
  note: string
}

/**
* Represents a decision made by a *Moderator* (`User`) about a `Run`.<br />
See: LeaderboardBackend.Models.Entities.Judgement.
*/
export interface JudgementViewModel {
  /**
   * The unique identifier of the `Judgement`.
   * @format int64
   */
  id?: number
  /**
   * The `Judgement`'s decision. May be null, true, or false.<br />
   * `Note` will be non-empty when the decision is null or false.
   */
  approved?: boolean | null
  /**
   * The time the `Judgement` was made.
   * @example 2022-01-01T12:34:56Z / 2022-01-01T12:34:56+01:00
   */
  createdAt?: string | null
  /**
   * A comment elaborating on the `Judgement`'s decision. Will have a value when the
   * affected `Run` is not approved (`Approved` is null or false).
   */
  note?: string | null
  /**
   * The ID of the *Moderator* (`User`) who made the `Judgement`.
   * @format uuid
   */
  modId?: string
  /**
   * The ID of the `Run` which was judged.
   * @format uuid
   */
  runId?: string
}

/**
 * Represents a collection of `Category` entities.
 */
export interface Leaderboard {
  /**
   * The unique identifier of the `Leaderboard`.<br />
   * Generated on creation.
   * @format int64
   */
  id?: number
  /**
   * The display name of the `Leaderboard` to create.
   * @example Foo Bar
   */
  name: string
  /**
   * The URL-scoped unique identifier of the `Leaderboard`.<br />
   * Must be [2, 80] in length and consist only of alphanumeric characters and hyphens.
   * @example foo-bar
   */
  slug: string
  /**
   * The general rules for the Leaderboard.
   * @example Timer starts on selecting New Game and ends when the final boss is beaten.
   */
  rules?: string | null
}

export interface LocalDate {
  calendar?: CalendarSystem
  /** @format int32 */
  year?: number
  /** @format int32 */
  month?: number
  /** @format int32 */
  day?: number
  dayOfWeek?: IsoDayOfWeek
  /** @format int32 */
  yearOfEra?: number
  era?: Era
  /** @format int32 */
  dayOfYear?: number
}

/**
 * This request object is sent when a `User` is attempting to log in.
 */
export interface LoginRequest {
  /**
   * The `User`'s email address.
   * @format email
   * @example john.doe@example.com
   */
  email: string
  /**
   * The `User`'s password. It:
   * <ul><li>supports Unicode;</li><li>must be [8, 80] in length;</li><li>must have at least:</li><ul><li>one uppercase letter;</li><li>one lowercase letter; and</li><li>one number.</li></ul></ul>
   * @example P4ssword
   */
  password: string
}

/**
 * This response object is received upon a successful log-in request.
 */
export interface LoginResponse {
  /** A JSON Web Token to authenticate and authorize queries with. */
  token: string
}

/**
 * Represents the *Moderator* status of a `User`.
 */
export interface Modship {
  /**
   * The unique identifier of the `Modship`.<br />
   * Generated on creation.
   * @format int64
   */
  id?: number
  /**
   * The ID of the *Moderator* (`User`).
   * @format uuid
   */
  userId: string
  /** Represents a user account registered on the website. */
  user?: User
  /**
   * The ID of the `Leaderboard` the `User` is a *Moderator* for.
   * @format int64
   */
  leaderboardId: number
  /** Represents a collection of `Category` entities. */
  leaderboard?: Leaderboard
}

/**
 * Represents the participation of a `User` on a `Run`.
 */
export interface Participation {
  /**
   * The unique identifier of the `Participation`.<br />
   * Generated on creation.
   * @format int64
   */
  id?: number
  /**
   * The ID of the `User` who is participating.
   * @format uuid
   */
  runnerId: string
  /** Represents a user account registered on the website. */
  runner: User
  /**
   * The ID of the `Run` the `Participation` is created on.
   * @format uuid
   */
  runId: string
  /** Represents an entry on a `Category`. */
  run: Run
  /** An optional comment about the `Participation`. */
  comment?: string | null
  /** An optional link to video proof of the `Run`. */
  vod?: string | null
}

export interface ProblemDetails {
  type?: string | null
  title?: string | null
  /** @format int32 */
  status?: number | null
  detail?: string | null
  instance?: string | null
}

/**
 * This request object is sent when a `User` is attempting to register.
 */
export interface RegisterRequest {
  /**
   * The username of the `User`. It:
   * <ul><li>must be [2, 25] in length;</li><li>must be made up of letters sandwiching zero or one of:</li><ul><li>hyphen;</li><li>underscore; or</li><li>apostrophe</li></ul></ul>
   * Usernames are saved case-sensitively, but matcehd against case-insensitively.
   * A `User` may not register with the name 'Cool' when another `User` with the name 'cool'
   * exists.
   * @pattern (?:[a-zA-Z0-9][-_']?){1,12}[a-zA-Z0-9]
   * @example J'on-Doe
   */
  username: string
  /**
   * The `User`'s email address.
   * @format email
   * @example john.doe@example.com
   */
  email: string
  /**
   * The `User`'s password. It:
   * <ul><li>supports Unicode;</li><li>must be [8, 80] in length;</li><li>must have at least:</li><ul><li>one uppercase letter;</li><li>one lowercase letter; and</li><li>one number.</li></ul></ul>
   * @example P4ssword
   */
  password: string
  /** The password confirmation. This value must match `Password`. */
  passwordConfirm: string
}

/**
 * This request object is sent when demoting a `User` as a *Moderator* from a `Leaderboard`.
 */
export interface RemoveModshipRequest {
  /**
   * The ID of the `Leaderboard` the `User` should be demoted from.
   * @format int64
   */
  leaderboardId: number
  /**
   * The ID of the `User` who should be demoted.
   * @format uuid
   */
  userId: string
}

/**
 * Represents an entry on a `Category`.
 */
export interface Run {
  /**
   * The unique identifier of the `Run`.<br />
   * Generated on creation.
   * @format uuid
   */
  id?: string
  playedOn: LocalDate
  submittedAt: Instant
  /**
   * The status of the `Run`.<br />
   *     - 0: Created<br />
   *     - 1: Submitted<br />
   *     - 2: Pending<br />
   *     - 3: Approved<br />
   *     - 4: Rejected
   */
  status: RunStatus
  /** A collection of `Judgement`s made about the `Run`. */
  judgements?: Judgement[] | null
  /** A collection of `Participation`s on the `Run`. */
  participations: Participation[]
  /**
   * The ID of the `Category` for `Run`.
   * @format int64
   */
  categoryId: number
  /** Represents a `Category` tied to a `Leaderboard`. */
  category?: Category
}

/**
* The status of the `Run`.<br />
    - 0: Created<br />
    - 1: Submitted<br />
    - 2: Pending<br />
    - 3: Approved<br />
    - 4: Rejected
* @format int32
*/
export type RunStatus = 0 | 1 | 2 | 3 | 4

/**
 * This request object is sent when updating a `Participation`.
 */
export interface UpdateParticipationRequest {
  /** A comment about the `Participation`. */
  comment?: string | null
  /** A link to video proof of the `Run`. */
  vod: string
}

/**
 * Represents a user account registered on the website.
 */
export interface User {
  /**
   * The unique identifier of the `User`.<br />
   * Generated on creation.
   * @format uuid
   */
  id?: string
  /**
   * The username of the `User`. It:
   * <ul><li>must be [2, 25] in length;</li><li>must be made up of alphanumeric characters around zero or one of:</li><ul><li>hyphen;</li><li>underscore; or</li><li>apostrophe</li></ul></ul>
   * Usernames are saved case-sensitively, but matcehd against case-insensitively.
   * A `User` may not register with the name 'Cool' when another `User` with the name 'cool'
   * exists.
   * @example J'on-Doe
   */
  username: string
  /**
   * The `User`'s email address.
   * @example john.doe@example.com
   */
  email: string
  /** The `User`'s personal description, displayed on their profile. */
  about?: string | null
  /** The `User`'s administrator status. */
  admin: boolean
  /** The `Ban`s the `User` has issued. */
  bansGiven?: Ban[] | null
  /** The `Ban`s the `User` has received. */
  bansReceived?: Ban[] | null
  /** The `Modship`s associated with the `User`. */
  modships?: Modship[] | null
  /** The `Participation`s associated with the `User`. */
  participations?: Participation[] | null
}

export interface LeaderboardsListParams {
  /** The IDs of the `Leaderboard`s which should be retrieved. */
  ids?: number[]
}
