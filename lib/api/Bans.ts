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
   * @summary Get bans by leaderboard ID
   * @request GET:/api/Bans/leaderboard/{leaderboardId}
   * @response `200` `(Ban)[]` A list of bans. Can be an empty array.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No bans found for the Leaderboard.
   */
  bansLeaderboardDetail = (leaderboardId: number, params: RequestParams = {}) =>
    this.request<Ban[], ProblemDetails>({
      path: `/api/Bans/leaderboard/${leaderboardId}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
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
  bansLeaderboardDetail2 = (bannedUserId: string, params: RequestParams = {}) =>
    this.request<Ban[], ProblemDetails>({
      path: `/api/Bans/leaderboard/${bannedUserId}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Bans
   * @name BansDetail
   * @summary Get a Ban from its ID.
   * @request GET:/api/Bans/{id}
   * @response `200` `Ban` The found Ban.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If no Ban can be found.
   */
  bansDetail = (id: number, params: RequestParams = {}) =>
    this.request<Ban, ProblemDetails>({
      path: `/api/Bans/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
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
  bansCreate = (data: CreateSiteBanRequest, params: RequestParams = {}) =>
    this.request<Ban, ProblemDetails>({
      path: `/api/Bans`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
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
  bansLeaderboardCreate = (
    data: CreateLeaderboardBanRequest,
    params: RequestParams = {},
  ) =>
    this.request<Ban, ProblemDetails>({
      path: `/api/Bans/leaderboard`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
