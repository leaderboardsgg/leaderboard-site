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
  CreateLeaderboardPayload,
  GetLeaderboardBySlugParams,
  LeaderboardViewModel,
  LeaderboardViewModelConflictDetails,
  LeaderboardViewModelListView,
  ListLeaderboardsParams,
  ProblemDetails,
  SearchLeaderboardsParams,
  UpdateLeaderboardPayload,
  ValidationProblemDetails,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

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
   * @summary Gets a leaderboard by its slug. Will not return deleted boards.
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
   * @name ListLeaderboards
   * @summary Gets all leaderboards.
   * @request GET:/api/leaderboards
   * @secure
   * @response `200` `LeaderboardViewModelListView` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  listLeaderboards = (
    query: ListLeaderboardsParams,
    params: RequestParams = {},
  ) =>
    this.request<
      LeaderboardViewModelListView,
      ProblemDetails | ValidationProblemDetails | void
    >({
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
   * @name SearchLeaderboards
   * @summary Search leaderboards by name or slug.
   * @request GET:/api/leaderboards/search
   * @secure
   * @response `200` `LeaderboardViewModelListView` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `422` `ProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  searchLeaderboards = (
    query: SearchLeaderboardsParams,
    params: RequestParams = {},
  ) =>
    this.request<LeaderboardViewModelListView, ProblemDetails | void>({
      path: `/api/leaderboards/search`,
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
   * @response `409` `LeaderboardViewModelConflictDetails` A Leaderboard with the specified slug already exists and will be returned in the `conflicting` field.
   * @response `422` `ValidationProblemDetails` The request contains errors. The following errors can occur: NotEmptyValidator, SlugFormat
   * @response `500` `void` Internal Server Error
   */
  createLeaderboard = (
    data: CreateLeaderboardPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      LeaderboardViewModel,
      | ProblemDetails
      | void
      | LeaderboardViewModelConflictDetails
      | ValidationProblemDetails
    >({
      path: `/leaderboards/create`,
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
   * @tags Leaderboards
   * @name RestoreLeaderboard
   * @summary Restores a deleted leaderboard.
   * @request PUT:/leaderboard/{id}/restore
   * @secure
   * @response `200` `LeaderboardViewModel` The restored `Leaderboard`s view model.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` The requesting `User` is unauthorized to restore `Leaderboard`s.
   * @response `404` `ProblemDetails` The `Leaderboard` was not found, or it wasn't deleted in the first place. Includes a field, `title`, which will be "Not Found" in the former case, and "Not Deleted" in the latter.
   * @response `409` `LeaderboardViewModelConflictDetails` Another `Leaderboard` with the same slug has been created since and will be returned in the `conflicting` field, and therefore can't be restored.
   * @response `500` `void` Internal Server Error
   */
  restoreLeaderboard = (id: number, params: RequestParams = {}) =>
    this.request<
      LeaderboardViewModel,
      ProblemDetails | void | LeaderboardViewModelConflictDetails
    >({
      path: `/leaderboard/${id}/restore`,
      method: 'PUT',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Leaderboards
   * @name DeleteLeaderboard
   * @summary Deletes a leaderboard. This request is restricted to Administrators.
   * @request DELETE:/leaderboard/{id}
   * @secure
   * @response `204` `void` No Content
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `ProblemDetails` The leaderboard does not exist (Not Found) or was already deleted (Already Deleted). Use the title field of the response to differentiate between the two cases if necessary.
   * @response `500` `void` Internal Server Error
   */
  deleteLeaderboard = (id: number, params: RequestParams = {}) =>
    this.request<void, ProblemDetails | void>({
      path: `/leaderboard/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Leaderboards
   * @name UpdateLeaderboard
   * @summary Updates a leaderboard with the specified new fields. This request is restricted to administrators. This operation is atomic; if an error occurs, the leaderboard will not be updated. All fields of the request body are optional but you must specify at least one.
   * @request PATCH:/leaderboard/{id}
   * @secure
   * @response `204` `void` No Content
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `ProblemDetails` Not Found
   * @response `409` `LeaderboardViewModel` The specified slug is already in use by another leaderboard. Returns the conflicting leaderboard.
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  updateLeaderboard = (
    id: number,
    data: UpdateLeaderboardPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      void,
      ProblemDetails | void | LeaderboardViewModel | ValidationProblemDetails
    >({
      path: `/leaderboard/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
}
