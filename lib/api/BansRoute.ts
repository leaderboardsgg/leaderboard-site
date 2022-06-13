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

import {
  Ban,
  CreateLeaderboardBanRequest,
  CreateSiteBanRequest,
} from './data-contracts'

export namespace Bans {
  /**
   * No description
   * @tags Bans
   * @name BansLeaderboardDetail
   * @summary Get bans by leaderboard ID
   * @request GET:/api/Bans/leaderboard/{leaderboardId}
   * @response `200` `(Ban)[]` A list of bans. Can be an empty array.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No bans found for the Leaderboard.
   */
  export namespace BansLeaderboardDetail {
    export type RequestParams = { leaderboardId: number }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Ban[]
  }

  /**
   * No description
   * @tags Bans
   * @name BansLeaderboardDetail2
   * @summary Get bans by user ID.
   * @request GET:/api/Bans/leaderboard/{bannedUserId}
   * @originalName bansLeaderboardDetail
   * @duplicate
   * @response `200` `(Ban)[]` A list of bans. Can be an empty array.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No bans found for the User.
   */
  export namespace BansLeaderboardDetail2 {
    export type RequestParams = { bannedUserId: string }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Ban[]
  }

  /**
   * No description
   * @tags Bans
   * @name BansDetail
   * @summary Get a Ban from its ID.
   * @request GET:/api/Bans/{id}
   * @response `200` `Ban` The found Ban.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If no Ban can be found.
   */
  export namespace BansDetail {
    export type RequestParams = { id: number }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Ban
  }

  /**
   * No description
   * @tags Bans
   * @name BansCreate
   * @summary Creates a side-wide ban. Admin-only.
   * @request POST:/api/Bans
   * @response `201` `Ban` The created Ban.
   * @response `400` `ProblemDetails` If the request is malformed.
   * @response `401` `ProblemDetails` If a non-admin calls this.
   * @response `403` `ProblemDetails` If the banned user is also an admin.
   * @response `404` `ProblemDetails` If the banned user is not found.
   */
  export namespace BansCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateSiteBanRequest
    export type RequestHeaders = {}
    export type ResponseBody = Ban
  }

  /**
   * No description
   * @tags Bans
   * @name BansLeaderboardCreate
   * @summary Creates a leaderboard-wide ban. Mod-only.
   * @request POST:/api/Bans/leaderboard
   * @response `201` `Ban` The created Ban.
   * @response `400` `ProblemDetails` If the request is malformed.
   * @response `401` `ProblemDetails` If a non-admin or mod calls this.
   * @response `403` `ProblemDetails` If the banned user is an admin or a mod.
   * @response `404` `ProblemDetails` If the banned user is not found.
   */
  export namespace BansLeaderboardCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateLeaderboardBanRequest
    export type RequestHeaders = {}
    export type ResponseBody = Ban
  }
}
