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
   * @summary Gets all Bans associated with a Leaderboard ID.
   * @request GET:/api/Bans/leaderboard/{leaderboardId}
   * @response `200` `(Ban)[]` The list of `Ban`s was retrieved successfully. The result can be an empty collection.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `Leaderboard` with the requested ID could be found.
   */
  export namespace BansLeaderboardDetail {
    export type RequestParams = {
      /**
       * The ID of the `Leaderboard` whose `Ban`s should be listed.
       * @format int64
       */
      leaderboardId: number
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Ban[]
  }

  /**
   * No description
   * @tags Bans
   * @name BansLeaderboardDetail2
   * @summary Gets all Bans associated with a User ID.
   * @request GET:/api/Bans/leaderboard/{bannedUserId}
   * @originalName bansLeaderboardDetail
   * @duplicate
   * @response `200` `(Ban)[]` The list of `Ban`s was retrieved successfully. The result can be an empty collection.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `User` with the requested ID could be found.
   */
  export namespace BansLeaderboardDetail2 {
    export type RequestParams = {
      /**
       * The ID of the `User` whose `Ban`s should be listed.
       * @format uuid
       */
      bannedUserId: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Ban[]
  }

  /**
   * No description
   * @tags Bans
   * @name BansDetail
   * @summary Gets a Ban by its ID.
   * @request GET:/api/Bans/{id}
   * @response `200` `Ban` The `Ban` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` No `Ban` with the requested ID could be found.
   */
  export namespace BansDetail {
    export type RequestParams = {
      /**
       * The ID of the `Ban` which should be retrieved.
       * @format int64
       */
      id: number
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Ban
  }

  /**
 * No description
 * @tags Bans
 * @name BansDelete
 * @summary Lifts a Leaderboard-scoped or site-scoped Ban.
This request is restricted to Administrators.
 * @request DELETE:/api/Bans/{id}
 * @response `204` `void` The `Ban` was removed successfully.
 * @response `400` `ProblemDetails` Bad Request
 * @response `401` `ProblemDetails` The requesting `User` is not logged-in.
 * @response `403` `ProblemDetails` The requesting `User` is unauthorized to lift `Ban`s.
 * @response `404` `ProblemDetails` No `Ban` with the requested ID could be found.
*/
  export namespace BansDelete {
    export type RequestParams = {
      /**
       * The ID of the `Ban` to remove.
       * @format int64
       */
      id: number
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
 * No description
 * @tags Bans
 * @name BansCreate
 * @summary Issues a site-scoped Ban.
This request is restricted to Administrators.
 * @request POST:/api/Bans
 * @response `201` `Ban` The `Ban` was created and returned successfully.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` The requesting `User` is unauthorized to issue site-scoped `Ban`s.
 * @response `403` `ProblemDetails` The `User` to be banned was also an Administrator. This operation is forbidden.
 * @response `404` `ProblemDetails` The `User` to be banned was not found.
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
 * @summary Issues a Leaderboard-scoped Ban.
This request is restricted to Moderators and Administrators.
 * @request POST:/api/Bans/leaderboard
 * @response `201` `Ban` The `Ban` was created and returned successfully.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` The requesting `User` is unauthorized to issue `Leaderboard`-scoped `Ban`s.
 * @response `403` `ProblemDetails` The `User` to be banned was also an Administrator. This operation is forbidden.
 * @response `404` `ProblemDetails` The `User` to be banned was not found.
*/
  export namespace BansLeaderboardCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateLeaderboardBanRequest
    export type RequestHeaders = {}
    export type ResponseBody = Ban
  }

  /**
 * No description
 * @tags Bans
 * @name BansLeaderboardsDelete
 * @summary Lift a Leaderboard-scoped Ban.
This request is restricted to Moderators and Administrators.
 * @request DELETE:/api/Bans/{id}/leaderboards/{leaderboardId}
 * @response `204` `void` The `Ban` was removed successfully.
 * @response `400` `ProblemDetails` Bad Request
 * @response `401` `ProblemDetails` The requesting `User` is not logged-in.
 * @response `403` `ProblemDetails` The requesting `User` is unauthorized to lift `Ban`s.
 * @response `404` `ProblemDetails` No `Ban` with the requested ID could be found.
*/
  export namespace BansLeaderboardsDelete {
    export type RequestParams = {
      /**
       * The ID of the `Ban` to remove.
       * @format int64
       */
      id: number
      /**
       * The ID of the `Leaderboard` the `Ban` is scoped to.
       * @format int64
       */
      leaderboardId: number
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }
}
