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
  CategoryViewModel,
  CreateRunParams,
  CreateRunPayload,
  DeleteRunParams,
  GetRecordsForCategoryParams,
  GetRunCategoryParams,
  GetRunParams,
  GetRunsForCategoryParams,
  ProblemDetails,
  RunViewModelListView,
  ScoredRunViewModel,
  TimedRunViewModel,
  UpdateRunParams,
  UpdateRunPayload,
  ValidationProblemDetails,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Runs<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Runs
   * @name GetRun
   * @summary Gets a Run by its ID.
   * @request GET:/api/runs/{id}
   * @secure
   * @response `200` `(TimedRunViewModel | ScoredRunViewModel)` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` The Run with ID `id` could not be found.
   * @response `500` `void` Internal Server Error
   */
  getRun = ({ id, ...query }: GetRunParams, params: RequestParams = {}) =>
    this.request<TimedRunViewModel | ScoredRunViewModel, ProblemDetails | void>(
      {
        path: `/api/runs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      },
    );
  /**
   * No description
   *
   * @tags Runs
   * @name CreateRun
   * @summary Creates a new Run for a Category with ID `id`. This request is restricted to confirmed Users and Administrators.
   * @request POST:/categories/{id}/runs
   * @secure
   * @response `201` `(TimedRunViewModel | ScoredRunViewModel)` Created
   * @response `400` `ValidationProblemDetails` Bad Request
   * @response `401` `ProblemDetails` The client is not logged in.
   * @response `403` `ProblemDetails` The requesting User is unauthorized to create Runs.
   * @response `404` `ProblemDetails` The Category with ID `id` could not be found, or has been deleted. Read `title` for more information.
   * @response `422` `ProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  createRun = (
    { id, ...query }: CreateRunParams,
    data: CreateRunPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      TimedRunViewModel | ScoredRunViewModel,
      ValidationProblemDetails | ProblemDetails | void
    >({
      path: `/categories/${id}/runs`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Runs
   * @name GetRunsForCategory
   * @summary Gets the Runs for a Category.
   * @request GET:/api/categories/{id}/runs
   * @secure
   * @response `200` `RunViewModelListView` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` The Category with ID `id` could not be found, or has been deleted. Read `title` for more information.
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  getRunsForCategory = (
    { id, ...query }: GetRunsForCategoryParams,
    params: RequestParams = {},
  ) =>
    this.request<
      RunViewModelListView,
      ProblemDetails | ValidationProblemDetails | void
    >({
      path: `/api/categories/${id}/runs`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Runs
   * @name GetRecordsForCategory
   * @summary Gets the records for a category, a.k.a. the personal bests of every user, ranked best-first.
   * @request GET:/api/categories/{id}/records
   * @secure
   * @response `200` `RunViewModelListView` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` Not Found
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  getRecordsForCategory = (
    { id, ...query }: GetRecordsForCategoryParams,
    params: RequestParams = {},
  ) =>
    this.request<
      RunViewModelListView,
      ProblemDetails | void | ValidationProblemDetails
    >({
      path: `/api/categories/${id}/records`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Runs
   * @name GetRunCategory
   * @summary Gets the category a run belongs to.
   * @request GET:/api/runs/{id}/category
   * @secure
   * @response `200` `CategoryViewModel` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` Not Found
   * @response `500` `void` Internal Server Error
   */
  getRunCategory = (
    { id, ...query }: GetRunCategoryParams,
    params: RequestParams = {},
  ) =>
    this.request<CategoryViewModel, ProblemDetails | void>({
      path: `/api/runs/${id}/category`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Runs
   * @name UpdateRun
   * @summary Updates a run with the specified new fields. This request is restricted to administrators or users updating their own runs. Note: `runType` cannot be updated. This operation is atomic; if an error occurs, the run will not be updated. All fields of the request body are optional but you must specify at least one.
   * @request PATCH:/runs/{id}
   * @secure
   * @response `204` `void` No Content
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `ProblemDetails` The user attempted to update another user's run, the user is banned or not yet confirmed, or the user attempted to change the status of a run.
   * @response `404` `ProblemDetails` The Run with ID `id` could not be found, or has been deleted. Read `title` for more information.
   * @response `422` `ProblemDetails` Response can be a `ProblemDetails` for a request that doesn't match the run type of a category, or a `ValidationProblemDetails` otherwise.
   * @response `500` `void` Internal Server Error
   */
  updateRun = (
    { id, ...query }: UpdateRunParams,
    data: UpdateRunPayload,
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails | void>({
      path: `/runs/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Runs
   * @name DeleteRun
   * @summary Deletes a Run.
   * @request DELETE:/runs/{id}
   * @secure
   * @response `204` `void` No Content
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `ProblemDetails` The run does not exist (Not Found) or was already deleted (Already Deleted). Use the `title` field of the response to differentiate between the two cases if necessary.
   * @response `500` `void` Internal Server Error
   */
  deleteRun = ({ id, ...query }: DeleteRunParams, params: RequestParams = {}) =>
    this.request<void, ProblemDetails | void>({
      path: `/runs/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
