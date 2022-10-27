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

import { CreateLeaderboardRequest, Leaderboard } from './data-contracts'

export namespace Leaderboards {
  /**
   * No description
   * @tags Leaderboards
   * @name LeaderboardsDetail
   * @summary Gets a Leaderboard by its ID.
   * @request GET:/api/Leaderboards/{id}
   * @response `200` `Leaderboard` The `Leaderboard` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `Leaderboard` with the requested ID could be found.
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
    export type ResponseBody = Leaderboard
  }

  /**
   * No description
   * @tags Leaderboards
   * @name LeaderboardsList
   * @summary Gets Leaderboards by their IDs.
   * @request GET:/api/Leaderboards
   * @response `200` `(Leaderboard)[]` The list of `Leaderboard`s was retrieved successfully. The result can be an empty collection.
   */
  export namespace LeaderboardsList {
    export type RequestParams = {}
    export type RequestQuery = {
      /** The IDs of the `Leaderboard`s which should be retrieved. */
      ids?: number[]
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Leaderboard[]
  }

  /**
 * No description
 * @tags Leaderboards
 * @name LeaderboardsCreate
 * @summary Creates a new Leaderboard.
This request is restricted to Administrators.
 * @request POST:/api/Leaderboards
 * @response `201` `Leaderboard` The `Leaderboard` was created and returned successfully.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` Unauthorized
 * @response `403` `ProblemDetails` Forbidden
 * @response `404` `ProblemDetails` The requesting `User` is unauthorized to create `Leaderboard`s.
*/
  export namespace LeaderboardsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateLeaderboardRequest
    export type RequestHeaders = {}
    export type ResponseBody = Leaderboard
  }
}
