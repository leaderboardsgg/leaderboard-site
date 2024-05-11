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
   * @name LeaderboardsDetail
   * @summary Gets a Leaderboard by its ID.
   * @request GET:/api/Leaderboards/{id}
   * @secure
   * @response `200` `LeaderboardViewModel` The `Leaderboard` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `Leaderboard` with the requested ID or slug could be found.
   */
  export namespace LeaderboardsDetail {
    export type RequestParams = {
      /**
       * The ID of the `Leaderboard` which should be retrieved.
       * @format int64
       */
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
   * @name LeaderboardsDetail2
   * @summary Gets a Leaderboard by its slug.
   * @request GET:/api/Leaderboards/{slug}
   * @originalName leaderboardsDetail
   * @duplicate
   * @secure
   * @response `200` `LeaderboardViewModel` The `Leaderboard` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `Leaderboard` with the requested ID or slug could be found.
   */
  export namespace LeaderboardsDetail2 {
    export type RequestParams = {
      /** The slug of the `Leaderboard` which should be retrieved. */
      slug: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = LeaderboardViewModel
  }

  /**
   * No description
   * @tags Leaderboards
   * @name LeaderboardsList
   * @summary Gets Leaderboards by their IDs.
   * @request GET:/api/Leaderboards
   * @secure
   * @response `200` `(LeaderboardViewModel)[]` The list of `Leaderboard`s was retrieved successfully. The result can be an empty collection.
   */
  export namespace LeaderboardsList {
    export type RequestParams = {}
    export type RequestQuery = {
      /** The IDs of the `Leaderboard`s which should be retrieved. */
      ids?: number[]
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = LeaderboardViewModel[]
  }

  /**
 * No description
 * @tags Leaderboards
 * @name LeaderboardsCreate
 * @summary Creates a new Leaderboard.
This request is restricted to Administrators.
 * @request POST:/api/Leaderboards
 * @secure
 * @response `201` `LeaderboardViewModel` The `Leaderboard` was created and returned successfully.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` Unauthorized
 * @response `403` `ProblemDetails` Forbidden
 * @response `404` `ProblemDetails` The requesting `User` is unauthorized to create `Leaderboard`s.
 * @response `422` `ValidationProblemDetails` Client Error
*/
  export namespace LeaderboardsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateLeaderboardRequest
    export type RequestHeaders = {}
    export type ResponseBody = LeaderboardViewModel
  }
}
