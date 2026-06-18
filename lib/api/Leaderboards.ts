/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
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
  DeleteLeaderboardParams,
  GetLeaderboardBySlugParams,
  GetLeaderboardParams,
  LeaderboardViewModel,
  LeaderboardViewModelConflictDetails,
  LeaderboardViewModelListView,
  ListLeaderboardsParams,
  ProblemDetails,
  SearchLeaderboardsParams,
  UpdateLeaderboardParams,
  UpdateLeaderboardPayload,
  ValidationProblemDetails,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Leaderboards<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Leaderboards
   * @name GetLeaderboard
   * @summary Gets a leaderboard by its ID.
   * @request GET:/api/leaderboards/{id}
   * @secure
   * @response `200` `LeaderboardViewModel` OK
   * @response `404` `ProblemDetails` Not Found
   */
  getLeaderboard = ({ id }: GetLeaderboardParams, params: RequestParams = {}) =>
    this.request<LeaderboardViewModel, ProblemDetails>({
      path: `/api/leaderboards/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Leaderboards
   * @name GetLeaderboardBySlug
   * @summary Gets a leaderboard by its slug. Will not return deleted boards.
   * @request GET:/api/leaderboards/{slug}
   * @secure
   * @response `200` `LeaderboardViewModel` OK
   * @response `404` `ProblemDetails` Not Found
   */
  getLeaderboardBySlug = (
    { slug }: GetLeaderboardBySlugParams,
    params: RequestParams = {},
  ) =>
    this.request<LeaderboardViewModel, ProblemDetails>({
      path: `/api/leaderboards/${slug}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Leaderboards
   * @name ListLeaderboards
   * @summary Gets leaderboards. Includes deleted, if specified.
   * @request GET:/api/leaderboards
   * @secure
   * @response `200` `LeaderboardViewModelListView` OK
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   */
  listLeaderboards = (
    query: ListLeaderboardsParams = {},
    params: RequestParams = {},
  ) =>
    this.request<LeaderboardViewModelListView, ValidationProblemDetails>({
      path: `/api/leaderboards`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Leaderboards
   * @name SearchLeaderboards
   * @summary Search leaderboards by name or slug.
   * @request GET:/api/search/leaderboards
   * @secure
   * @response `200` `LeaderboardViewModelListView` OK
   * @response `422` `ProblemDetails` Unprocessable Content
   */
  searchLeaderboards = (
    query: SearchLeaderboardsParams,
    params: RequestParams = {},
  ) =>
    this.request<LeaderboardViewModelListView, ProblemDetails>({
      path: `/api/search/leaderboards`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Leaderboards
   * @name CreateLeaderboard
   * @summary Creates a new leaderboard. This request is restricted to Administrators.
   * @request POST:/leaderboards
   * @secure
   * @response `201` `LeaderboardViewModel` Created
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` The requesting `User` is unauthorized to create `Leaderboard`s.
   * @response `409` `LeaderboardViewModelConflictDetails` A Leaderboard with the specified slug already exists and will be returned in the `conflicting` field.
   * @response `422` `ValidationProblemDetails` The request contains errors. The following errors can occur: NotEmptyValidator, SlugFormat
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
      path: `/leaderboards`,
      method: "POST",
      body: data,
      secure: true,
      type: "application/json",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Leaderboards
   * @name DeleteLeaderboard
   * @summary Deletes a leaderboard. This request is restricted to Administrators.
   * @request DELETE:/leaderboards/{id}
   * @secure
   * @response `204` `void` No Content
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `ProblemDetails` The leaderboard does not exist (Not Found) or was already deleted (Already Deleted). Use the title field of the response to differentiate between the two cases if necessary.
   */
  deleteLeaderboard = (
    { id }: DeleteLeaderboardParams,
    params: RequestParams = {},
  ) =>
    this.request<void, void | ProblemDetails>({
      path: `/leaderboards/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Leaderboards
   * @name UpdateLeaderboard
   * @summary Updates a leaderboard with the specified new fields. This request is restricted to administrators. This operation is atomic; if an error occurs, the leaderboard will not be updated. All fields of the request body are optional but you must specify at least one.
   * @request PATCH:/leaderboards/{id}
   * @secure
   * @response `204` `void` No Content
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `ProblemDetails` Not Found
   * @response `409` `LeaderboardViewModelConflictDetails` The specified slug is already in use by another leaderboard. Returns the conflicting leaderboard.
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   */
  updateLeaderboard = (
    { id }: UpdateLeaderboardParams,
    data: UpdateLeaderboardPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      void,
      | ProblemDetails
      | void
      | LeaderboardViewModelConflictDetails
      | ValidationProblemDetails
    >({
      path: `/leaderboards/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: "application/json",
      ...params,
    });
}
