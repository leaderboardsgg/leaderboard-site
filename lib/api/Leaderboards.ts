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
  GetLeaderboardBySlugParams,
  GetLeaderboardsParams,
  LeaderboardViewModel,
  ProblemDetails,
  ValidationProblemDetails,
} from './data-contracts'
import { ContentType, HttpClient, type RequestParams } from './http-client'

export class Leaderboards<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
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
  getLeaderboard = (id: number, params: RequestParams = {}) =>
    this.request<LeaderboardViewModel, ProblemDetails | void>({
      path: `/api/leaderboard/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
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
  getLeaderboardBySlug = (
    query: GetLeaderboardBySlugParams,
    params: RequestParams = {},
  ) =>
    this.request<LeaderboardViewModel, ProblemDetails | void>({
      path: `/api/leaderboard`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Leaderboards
   * @name GetLeaderboards
   * @summary Gets leaderboards by their IDs.
   * @request GET:/api/leaderboards
   * @secure
   * @response `200` `(LeaderboardViewModel)[]` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `500` `void` Internal Server Error
   */
  getLeaderboards = (
    query: GetLeaderboardsParams,
    params: RequestParams = {},
  ) =>
    this.request<LeaderboardViewModel[], ProblemDetails | void>({
      path: `/api/leaderboards`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
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
  createLeaderboard = (
    data: CreateLeaderboardRequest,
    params: RequestParams = {},
  ) =>
    this.request<
      LeaderboardViewModel,
      ProblemDetails | void | ValidationProblemDetails
    >({
      path: `/leaderboards/create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
