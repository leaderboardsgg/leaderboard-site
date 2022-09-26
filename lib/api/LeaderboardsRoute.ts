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
   * @summary Gets a leaderboard.
   * @request GET:/api/Leaderboards/{id}
   * @response `200` `Leaderboard` The Leaderboard.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If no Leaderboard can be found.
   */
  export namespace LeaderboardsDetail {
    export type RequestParams = { id: number }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Leaderboard
  }

  /**
   * No description
   * @tags Leaderboards
   * @name LeaderboardsList
   * @summary Gets leaderboards. Can be an empty array.
   * @request GET:/api/Leaderboards
   * @response `200` `(Leaderboard)[]` An array of Leaderboards. Can be empty.
   */
  export namespace LeaderboardsList {
    export type RequestParams = {}
    export type RequestQuery = { ids?: number[] }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Leaderboard[]
  }

  /**
   * No description
   * @tags Leaderboards
   * @name LeaderboardsCreate
   * @summary Creates a new Leaderboard. Admin-only.
   * @request POST:/api/Leaderboards
   * @response `201` `Leaderboard` The created Leaderboard.
   * @response `400` `ProblemDetails` If the request is malformed.
   * @response `404` `ProblemDetails` If a non-admin calls this.
   */
  export namespace LeaderboardsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateLeaderboardRequest
    export type RequestHeaders = {}
    export type ResponseBody = Leaderboard
  }
}
