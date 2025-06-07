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
  CategoryViewModel,
  CreateRunPayload,
  RunViewModelListView,
  ScoredRunViewModel,
  TimedRunViewModel,
} from './data-contracts'

export namespace Runs {
  /**
   * No description
   * @tags Runs
   * @name GetRun
   * @summary Gets a Run by its ID.
   * @request GET:/api/run/{id}
   * @secure
   * @response `200` `(TimedRunViewModel | ScoredRunViewModel)` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` The Run with ID `id` could not be found.
   * @response `500` `void` Internal Server Error
   */
  export namespace GetRun {
    export type RequestParams = {
      /** @pattern ^[a-zA-Z0-9-_]{22}$ */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = TimedRunViewModel | ScoredRunViewModel
  }

  /**
   * No description
   * @tags Runs
   * @name CreateRun
   * @summary Creates a new Run for a Category with ID `id`. This request is restricted to confirmed Users and Administrators.
   * @request POST:/category/{id}/runs/create
   * @secure
   * @response `201` `(TimedRunViewModel | ScoredRunViewModel)` Created
   * @response `400` `ValidationProblemDetails` Bad Request
   * @response `401` `ProblemDetails` The client is not logged in.
   * @response `403` `ProblemDetails` The requesting User is unauthorized to create Runs.
   * @response `404` `ProblemDetails` The Category with ID `id` could not be found, or has been deleted. Read `title` for more information.
   * @response `422` `ProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  export namespace CreateRun {
    export type RequestParams = {
      /** @format int64 */
      id: number
    }
    export type RequestQuery = {}
    export type RequestBody = CreateRunPayload
    export type RequestHeaders = {}
    export type ResponseBody = TimedRunViewModel | ScoredRunViewModel
  }

  /**
   * No description
   * @tags Runs
   * @name GetRunsForCategory
   * @summary Gets the Runs for a Category.
   * @request GET:/api/category/{id}/runs
   * @secure
   * @response `200` `RunViewModelListView` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` The Category with ID `id` could not be found, or has been deleted. Read `title` for more information.
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  export namespace GetRunsForCategory {
    export type RequestParams = {
      /** @format int64 */
      id: number
    }
    export type RequestQuery = {
      /**
       * The maximum number of records to return. Fewer records may be returned.
       * @format int32
       */
      limit?: number
      /**
       * The zero-based index at which to begin selecting records to return.
       * @format int32
       * @default 0
       */
      offset?: number
      /**
       * Whether to include deleted runs. Defaults false.
       * @default false
       */
      includeDeleted?: boolean
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = RunViewModelListView
  }

  /**
   * No description
   * @tags Runs
   * @name GetRunCategory
   * @summary Gets the category a run belongs to.
   * @request GET:/api/run/{id}/category
   * @secure
   * @response `200` `CategoryViewModel` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` Not Found
   * @response `500` `void` Internal Server Error
   */
  export namespace GetRunCategory {
    export type RequestParams = {
      /** @pattern ^[a-zA-Z0-9-_]{22}$ */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = CategoryViewModel
  }

  /**
   * No description
   * @tags Runs
   * @name DeleteRun
   * @summary Deletes a Run.
   * @request DELETE:/run/{id}
   * @secure
   * @response `204` `void` No Content
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `ProblemDetails` The run does not exist (Not Found) or was already deleted (Already Deleted). Use the `title` field of the response to differentiate between the two cases if necessary.
   * @response `500` `void` Internal Server Error
   */
  export namespace DeleteRun {
    export type RequestParams = {
      /** @pattern ^[a-zA-Z0-9-_]{22}$ */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }
}
