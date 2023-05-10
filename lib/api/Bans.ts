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
  ProblemDetails,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Bans<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Bans
   * @name BansLeaderboardDetail
   * @summary Gets all Bans associated with a Leaderboard ID.
   * @request GET:/api/Bans/leaderboard/{leaderboardId}
   * @secure
   * @response `200` `(Ban)[]` The list of `Ban`s was retrieved successfully. The result can be an empty collection.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `Leaderboard` with the requested ID could be found.
   */
  bansLeaderboardDetail = (leaderboardId: number, params: RequestParams = {}) =>
    this.request<Ban[], ProblemDetails>({
      path: `/api/Bans/leaderboard/${leaderboardId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Bans
   * @name BansLeaderboardDetail2
   * @summary Gets all Bans associated with a User ID.
   * @request GET:/api/Bans/leaderboard/{bannedUserId}
   * @originalName bansLeaderboardDetail
   * @duplicate
   * @secure
   * @response `200` `(Ban)[]` The list of `Ban`s was retrieved successfully. The result can be an empty collection.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `User` with the requested ID could be found.
   */
  bansLeaderboardDetail2 = (bannedUserId: string, params: RequestParams = {}) =>
    this.request<Ban[], ProblemDetails>({
      path: `/api/Bans/leaderboard/${bannedUserId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Bans
   * @name BansDetail
   * @summary Gets a Ban by its ID.
   * @request GET:/api/Bans/{id}
   * @secure
   * @response `200` `Ban` The `Ban` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` No `Ban` with the requested ID could be found.
   */
  bansDetail = (id: number, params: RequestParams = {}) =>
    this.request<Ban, ProblemDetails>({
      path: `/api/Bans/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
 * No description
 *
 * @tags Bans
 * @name BansDelete
 * @summary Lifts a Leaderboard-scoped or site-scoped Ban.
This request is restricted to Administrators.
 * @request DELETE:/api/Bans/{id}
 * @secure
 * @response `204` `void` The `Ban` was removed successfully.
 * @response `400` `ProblemDetails` Bad Request
 * @response `401` `ProblemDetails` The requesting `User` is not logged-in.
 * @response `403` `ProblemDetails` The requesting `User` is unauthorized to lift `Ban`s.
 * @response `404` `ProblemDetails` No `Ban` with the requested ID could be found.
 */
  bansDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Bans/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
 * No description
 *
 * @tags Bans
 * @name BansCreate
 * @summary Issues a site-scoped Ban.
This request is restricted to Administrators.
 * @request POST:/api/Bans
 * @secure
 * @response `201` `Ban` The `Ban` was created and returned successfully.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` The requesting `User` is unauthorized to issue site-scoped `Ban`s.
 * @response `403` `ProblemDetails` The `User` to be banned was also an Administrator. This operation is forbidden.
 * @response `404` `ProblemDetails` The `User` to be banned was not found.
 */
  bansCreate = (data: CreateSiteBanRequest, params: RequestParams = {}) =>
    this.request<Ban, ProblemDetails>({
      path: `/api/Bans`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
 * No description
 *
 * @tags Bans
 * @name BansLeaderboardCreate
 * @summary Issues a Leaderboard-scoped Ban.
This request is restricted to Moderators and Administrators.
 * @request POST:/api/Bans/leaderboard
 * @secure
 * @response `201` `Ban` The `Ban` was created and returned successfully.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` The requesting `User` is unauthorized to issue `Leaderboard`-scoped `Ban`s.
 * @response `403` `ProblemDetails` The `User` to be banned was also an Administrator. This operation is forbidden.
 * @response `404` `ProblemDetails` The `User` to be banned was not found.
 */
  bansLeaderboardCreate = (
    data: CreateLeaderboardBanRequest,
    params: RequestParams = {},
  ) =>
    this.request<Ban, ProblemDetails>({
      path: `/api/Bans/leaderboard`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
 * No description
 *
 * @tags Bans
 * @name BansLeaderboardsDelete
 * @summary Lift a Leaderboard-scoped Ban.
This request is restricted to Moderators and Administrators.
 * @request DELETE:/api/Bans/{id}/leaderboards/{leaderboardId}
 * @secure
 * @response `204` `void` The `Ban` was removed successfully.
 * @response `400` `ProblemDetails` Bad Request
 * @response `401` `ProblemDetails` The requesting `User` is not logged-in.
 * @response `403` `ProblemDetails` The requesting `User` is unauthorized to lift `Ban`s.
 * @response `404` `ProblemDetails` No `Ban` with the requested ID could be found.
 */
  bansLeaderboardsDelete = (
    id: number,
    leaderboardId: number,
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails>({
      path: `/api/Bans/${id}/leaderboards/${leaderboardId}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
}
