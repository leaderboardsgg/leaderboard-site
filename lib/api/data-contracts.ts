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

export interface Ban {
  /**
   * Generated on creation.
   * @format int64
   */
  id?: number

  /** Can't be <code>null</code>. */
  reason: string

  /**
   * Generated on creation.
   * @format date-time
   */
  time: string

  /**
   * ID of User who set the Ban. Must be either an admin or a mod.
   * @format uuid
   */
  banningUserId?: string | null

  /**
   * ID of User who received the Ban.
   * @format uuid
   */
  bannedUserId: string

  /**
   * ID of Leaderboard this Ban belongs to. If <code>null</code>, then this Ban is site-wide.
   * @format int64
   */
  leaderboardId?: number | null
}

/**
 * A Category tied to a Leaderboard.
 */
export interface Category {
  /**
   * The Category's ID. Generated on creation.
   * @format int64
   */
  id?: number

  /**
   * The Category's name.
   * @example Mongolian Throat Singing%
   */
  name: string

  /**
   * The Category's slug. <br />
   * Must be 2-25 characters inclusive and only consist of letters, numbers, and
   * hyphens.
   * @example mongolian-throat-singing
   */
  slug: string

  /** Category-specific rules. */
  rules?: string | null

  /**
   * Minimum player count for this Category. Defaults to 1.
   * @format int32
   */
  playersMin: number

  /**
   * Maximum player count for this Category. Defaults to PlayersMin.
   * @format int32
   */
  playersMax: number

  /**
   * ID of the Leaderboard this Category belongs to.
   * @format int64
   */
  leaderboardId: number
}

/**
 * Request object sent when creating a Category.
 */
export interface CreateCategoryRequest {
  /**
   * Name for the new Category.
   * @example Mongolian Throat Singing%
   */
  name: string

  /**
   * The bit in the URL that uniquely identifies this Category. <br />
   * E.g.: https://leaderboards.gg/slug-for-board/slug-for-category <br />
   * Must be 2-25 characters inclusive and only consist of letters, numbers, and
   * hyphens.
   * @example mongolian-throat-singing
   */
  slug: string

  /** Category-specific rules. */
  rules?: string | null

  /**
   * Minimum player count for this Category. Defaults to 1.
   * @format int32
   * @min 1
   * @max 2147483647
   */
  playersMin?: number | null

  /**
   * Maximum player count for this Category. Defaults to PlayersMin.
   * @format int32
   * @min 1
   * @max 2147483647
   */
  playersMax?: number | null

  /**
   * ID of the Leaderboard this Category belongs to.
   * @format int64
   */
  leaderboardId: number
}

/**
 * Request object sent when creating a Judgement.
 */
export interface CreateJudgementRequest {
  /**
   * GUID of the run.
   * @format uuid
   * @example e1c010d7-b499-4196-be17-aa27a053f3dc
   */
  runId?: string

  /**
   * Judgement comments. Must be provided if not outright approving a run ("Approved" is false or null).
   * Acts as mod feedback for the runner.
   * @example e1c010d7-b499-4196-be17-aa27a053f3dc
   */
  note?: string | null

  /** The judgement result. Can be true, false, or null. For the latter two, "Note" must be non-empty. */
  approved?: boolean | null
}

export interface CreateLeaderboardBanRequest {
  /**
   * The ID of the user, who should be banned.
   * @format uuid
   */
  userId: string

  /** The reason why the user is banned. */
  reason: string

  /**
   * The ID of the leaderboard on which the user should be banned.
   * @format int64
   */
  leaderboardId?: number
}

export interface CreateLeaderboardRequest {
  name?: string | null
  slug?: string | null
}

/**
 * Request object sent when setting a User as mod for a Leaderboard.
 */
export interface CreateModshipRequest {
  /**
   * The Leaderboard ID.
   * @format int64
   */
  leaderboardId: number

  /**
   * The User ID.
   * @format uuid
   */
  userId: string
}

export interface CreateParticipationRequest {
  comment?: string | null
  vod?: string | null

  /** @format uuid */
  runnerId: string

  /** @format uuid */
  runId: string
  isSubmitter: boolean
}

export interface CreateRunRequest {
  /** @format date-time */
  played: string

  /** @format date-time */
  submitted: string

  /**
   * 0: Created
   * 1: Submitted
   * 2: Pending
   * 3: Approved
   * 4: Rejected
   */
  status: RunStatus
}

export interface CreateSiteBanRequest {
  /**
   * The ID of the user, who should be banned.
   * @format uuid
   */
  userId: string

  /** The reason why the user is banned. */
  reason: string
}

/**
 * A decision by a mod on a run submission.
 */
export interface Judgement {
  /**
   * Generated on creation.
   * @format int64
   */
  id?: number

  /**
   * Defines this judgement, which in turn defines the status of its related run. <br />
   * If:
   *   <ul><li>true, run is approved;</li><li>false, run is rejected;</li><li>null, run is commented on.</li></ul>
   * For the latter two, Note MUST be non-empty.
   */
  approved?: boolean | null

  /**
   * When the judgement was made.
   * @format date-time
   */
  createdAt: string

  /**
   * Comments on the judgement.
   * MUST be non-empty for rejections or comments (Approved ∈ {false, null}).
   */
  note: string

  /**
   * ID of the mod that made this judgement.
   * @format uuid
   */
  modId: string
  mod: User

  /**
   * ID of the related run.
   * @format uuid
   */
  runId: string
  run: Run
}

/**
 * A decision by a mod on a run submission. See Models/Entities/Judgement.cs.
 */
export interface JudgementViewModel {
  /**
   * The newly-made judgement's ID.
   * @format int64
   */
  id?: number

  /** The judgement result. Can be true, false, or null. In the latter two, <code>Note</code> will be non-empty. */
  approved?: boolean | null

  /**
   * When the judgement was made. Follows <a href="https://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a>.
   * @example 2022-01-01T12:34:56Z / 2022-01-01T12:34:56+01:00
   */
  createdAt?: string | null

  /**
   * Judgement comments. Acts as mod feedback for the runner. Will be non-empty for
   * non-approval judgements (Approved is false or null).
   */
  note?: string | null

  /**
   * ID of mod who made this judgement.
   * @format uuid
   */
  modId?: string

  /**
   * ID of run this judgement's for.
   * @format uuid
   */
  runId?: string
}

export interface Leaderboard {
  /**
   * Generated on creation.
   * @format int64
   */
  id?: number

  /**
   * The Leaderboard's aka game's name. Pretty straightforward.
   * @example Mario Goes to Jail II
   */
  name: string

  /**
   * The bit in the URL after the domain that can be used to identify a Leaderboard.
   * Meant to be human-readable. It must be:
   * <ul><li>between 2-80 characters, inclusive</li><li>a string of characters separated by hyphens, if desired</li></ul>
   * @example mario-goes-to-jail-ii
   */
  slug: string

  /**
   * The general rules for the Leaderboard.<br />
   * Category-specific rules are tied to the Category.
   * @example Timer starts on selecting New Game and ends when the first tear drops.
   */
  rules?: string | null
}

/**
 * Request object sent when logging a User in.
 */
export interface LoginRequest {
  /**
   * User's email.
   * @format email
   * @example ayylmao.gaming@alg.gg
   */
  email: string

  /**
   * User's password. It:
   * <ul><li>must be 8-80 characters long, inclusive;</li><li>must have at least:</li><ul><li>an uppercase letter;</li><li>a lowercase letter; and</li><li>a number.</li></ul><li>supports Unicode.</li></ul>
   * @example P4ssword
   */
  password: string
}

/**
 * Response object received on a successful login.
 */
export interface LoginResponse {
  /** A JWT to authenticate and authorize future queries with. */
  token: string
}

export interface Modship {
  /**
   * Generated on creation.
   * @format int64
   */
  id?: number

  /**
   * The mod's ID.
   * @format uuid
   */
  userId: string
  user?: User

  /**
   * ID of the Leaderboard the User is a mod for.
   * @format int64
   */
  leaderboardId: number
  leaderboard?: Leaderboard
}

export interface Participation {
  /** @format int64 */
  id?: number
  comment?: string | null
  vod?: string | null

  /** @format uuid */
  runnerId: string
  runner: User

  /** @format uuid */
  runId: string
  run: Run
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
 * Request object sent when registering a User.
 */
export interface RegisterRequest {
  /**
   * The username to register with. It must be:
   *   <ul><li>2-25 characters long, inclusive;</li><li>made up of letters sandwiching zero or one of:</li><ul><li>hyphen;</li><li>underscore; or</li><li>apostrophe</li></ul></ul>
   * Usernames are also saved with casing, but matched without. This means you won't
   * be able to register as "Cool" if someone already called "cool" exists.
   * @pattern (?:[a-zA-Z0-9][-_']?){1,12}[a-zA-Z0-9]
   * @example Ayy-l'maoGaming
   */
  username: string

  /**
   * User's email.
   * @format email
   * @example ayylmao.gaming@alg.gg
   */
  email: string

  /**
   * User's password. It:
   * <ul><li>must be 8-80 characters long, inclusive;</li><li>must have at least:</li><ul><li>an uppercase letter;</li><li>a lowercase letter; and</li><li>a number.</li></ul><li>supports Unicode.</li></ul>
   * @example P4ssword
   */
  password: string

  /**
   * Password confirmation. It must match <code>password</code>.
   * @example P4ssword
   */
  passwordConfirm: string
}

/**
 * Request object sent when removing a User as mod for a Leaderboard.
 */
export interface RemoveModshipRequest {
  /**
   * The Leaderboard ID.
   * @format int64
   */
  leaderboardId: number

  /**
   * The User ID.
   * @format uuid
   */
  userId: string
}

export interface Run {
  /** @format uuid */
  id?: string

  /** @format date-time */
  played: string

  /** @format date-time */
  submitted: string

  /**
   * 0: Created
   * 1: Submitted
   * 2: Pending
   * 3: Approved
   * 4: Rejected
   */
  status: RunStatus
  judgements?: Judgement[] | null
  participations: Participation[]
}

/**
* 0: Created
1: Submitted
2: Pending
3: Approved
4: Rejected
* @format int32
*/
export type RunStatus = 0 | 1 | 2 | 3 | 4

export interface UpdateParticipationRequest {
  comment?: string | null
  vod: string
}

export interface User {
  /**
   * A GUID that identifies the User. Generated on creation.
   * @format uuid
   * @example 4b3835ca-dee1-4019-82b4-d2d26a7cce74
   */
  id?: string

  /**
   * The User's name. Must be:
   * <ul><li>between 2 - 25 characters inclusive; and</li><li>an alphanumeric sequence, each separated by zero or one of:</li><ul><li>an underscore;</li><li>a hyphen; or</li><li>an apostrophe</li></ul></ul>
   * Saving a name is case-sensitive, but matching against existing Users won't be.
   * @example Ayylmao Gaming
   */
  username: string

  /**
   * The User's email. Must be, well, an email.
   * @example ayylmao.gaming@alg.gg
   */
  email: string

  /** User's about text. I.e. a personal description. */
  about?: string | null

  /** User's admin status. */
  admin: boolean
  bansGiven?: Ban[] | null
  bansReceived?: Ban[] | null
  modships?: Modship[] | null
  participations?: Participation[] | null
}

export interface LeaderboardsListParams {
  /** The IDs. */
  ids?: number[]
}
