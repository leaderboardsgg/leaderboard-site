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

import type {
  CreateLeaderboardRequest,
  LeaderboardViewModel,
} from './data-contracts'

export namespace Leaderboards {
  /**
   * No description
   * @tags Leaderboards
   * @name GetLeaderboard
   * @summary Gets a leaderboard by its ID.
   * @request GET:/api/leaderboard/{id}
   * @secure
   * @response `200` `LeaderboardViewModel` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` Not Found
   * @response `500` `void` Internal Server Error
   */
  export namespace GetLeaderboard {
    export type RequestParams = {
      /** @format int64 */
      id: number
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = LeaderboardViewModel
  }

  /**
   * No description
   * @tags Leaderboards
   * @name GetLeaderboardBySlug
   * @summary Gets a Leaderboard by its slug.
   * @request GET:/api/leaderboard
   * @secure
   * @response `200` `LeaderboardViewModel` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` Not Found
   * @response `500` `void` Internal Server Error
   */
  export namespace GetLeaderboardBySlug {
    export type RequestParams = {}
    export type RequestQuery = {
      slug: string
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = LeaderboardViewModel
  }

  /**
   * No description
   * @tags Leaderboards
   * @name GetLeaderboards
   * @summary Gets leaderboards by their IDs.
   * @request GET:/api/leaderboards
   * @secure
   * @response `200` `(LeaderboardViewModel)[]` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `500` `void` Internal Server Error
   */
  export namespace GetLeaderboards {
    export type RequestParams = {}
    export type RequestQuery = {
      ids?: number[]
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = LeaderboardViewModel[]
  }

  /**
   * No description
   * @tags Leaderboards
   * @name CreateLeaderboard
   * @summary Creates a new leaderboard. This request is restricted to Administrators.
   * @request POST:/leaderboards/create
   * @secure
   * @response `201` `LeaderboardViewModel` Created
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` The requesting `User` is unauthorized to create `Leaderboard`s.
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  export namespace CreateLeaderboard {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateLeaderboardRequest
    export type RequestHeaders = {}
    export type ResponseBody = LeaderboardViewModel
  }
}
