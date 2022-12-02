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
   * @summary Gets a Leaderboard by its ID.
   * @request GET:/api/Leaderboards/{id}
   * @response `200` `Leaderboard` The `Leaderboard` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `Leaderboard` with the requested ID could be found.
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
   * @summary Gets Leaderboards by their IDs.
   * @request GET:/api/Leaderboards
   * @response `200` `(Leaderboard)[]` The list of `Leaderboard`s was retrieved successfully. The result can be an empty collection.
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
 * @summary Creates a new Leaderboard.
This request is restricted to Administrators.
 * @request POST:/api/Leaderboards
 * @response `201` `Leaderboard` The `Leaderboard` was created and returned successfully.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` Unauthorized
 * @response `403` `ProblemDetails` Forbidden
 * @response `404` `ProblemDetails` The requesting `User` is unauthorized to create `Leaderboard`s.
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
