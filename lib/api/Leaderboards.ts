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
  LeaderboardsListParams,
  LeaderboardViewModel,
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
   * @summary Gets a Leaderboard by its ID.
   * @request GET:/api/Leaderboards/{id}
   * @secure
   * @response `200` `LeaderboardViewModel` The `Leaderboard` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `Leaderboard` with the requested ID or slug could be found.
   */
  leaderboardsDetail = (id: number, params: RequestParams = {}) =>
    this.request<LeaderboardViewModel, ProblemDetails>({
      path: `/api/Leaderboards/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
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
  leaderboardsDetail2 = (slug: string, params: RequestParams = {}) =>
    this.request<LeaderboardViewModel, ProblemDetails>({
      path: `/api/Leaderboards/${slug}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Leaderboards
   * @name LeaderboardsList
   * @summary Gets Leaderboards by their IDs.
   * @request GET:/api/Leaderboards
   * @secure
   * @response `200` `(LeaderboardViewModel)[]` The list of `Leaderboard`s was retrieved successfully. The result can be an empty collection.
   */
  leaderboardsList = (
    query: LeaderboardsListParams,
    params: RequestParams = {},
  ) =>
    this.request<LeaderboardViewModel[], any>({
      path: `/api/Leaderboards`,
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
 */
  leaderboardsCreate = (
    data: CreateLeaderboardRequest,
    params: RequestParams = {},
  ) =>
    this.request<LeaderboardViewModel, ProblemDetails>({
      path: `/api/Leaderboards`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
