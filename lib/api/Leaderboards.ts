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
  CreateLeaderboardRequest,
  Leaderboard,
  LeaderboardsListParams,
  ProblemDetails,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Leaderboards<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Leaderboards
   * @name LeaderboardsDetail
   * @summary Gets a leaderboard.
   * @request GET:/api/Leaderboards/{id}
   * @response `200` `Leaderboard` The Leaderboard.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If no Leaderboard can be found.
   */
  leaderboardsDetail = (id: number, params: RequestParams = {}) =>
    this.request<Leaderboard, ProblemDetails>({
      path: `/api/Leaderboards/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Leaderboards
   * @name LeaderboardsList
   * @summary Gets leaderboards. Can be an empty array.
   * @request GET:/api/Leaderboards
   * @response `200` `(Leaderboard)[]` An array of Leaderboards. Can be empty.
   */
  leaderboardsList = (
    query: LeaderboardsListParams,
    params: RequestParams = {},
  ) =>
    this.request<Leaderboard[], any>({
      path: `/api/Leaderboards`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Leaderboards
   * @name LeaderboardsCreate
   * @summary Creates a new Leaderboard. Admin-only.
   * @request POST:/api/Leaderboards
   * @response `201` `Leaderboard` The created Leaderboard.
   * @response `400` `ProblemDetails` If the request is malformed.
   * @response `404` `ProblemDetails` If a non-admin calls this.
   */
  leaderboardsCreate = (
    data: CreateLeaderboardRequest,
    params: RequestParams = {},
  ) =>
    this.request<Leaderboard, ProblemDetails>({
      path: `/api/Leaderboards`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
