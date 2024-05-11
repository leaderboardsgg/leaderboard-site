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
  CategoryViewModel,
  CreateRunRequest,
  RunViewModel,
} from './data-contracts'

export namespace Runs {
  /**
   * No description
   * @tags Runs
   * @name RunsDetail
   * @summary Gets a Run by its ID.
   * @request GET:/api/Runs/{id}
   * @secure
   * @response `200` `RunViewModel` The `Run` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` No `Run` with the requested ID could be found.
   */
  export namespace RunsDetail {
    export type RequestParams = {
      /**
       * The ID of the `Run` which should be retrieved.<br />
       * It must be possible to parse this to `long` for this request to complete.
       * @pattern ^[a-zA-Z0-9-_]{22}$
       */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = RunViewModel
  }

  /**
   * No description
   * @tags Runs
   * @name RunsCreate
   * @summary Creates a new Run.
   * @request POST:/api/Runs
   * @secure
   * @response `201` `void` The `Run` was created and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` Not Found
   * @response `422` `ValidationProblemDetails` Client Error
   */
  export namespace RunsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateRunRequest
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags Runs
   * @name RunsCategoryDetail
   * @request GET:/api/Runs/{id}/category
   * @secure
   * @response `200` `CategoryViewModel` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` Not Found
   */
  export namespace RunsCategoryDetail {
    export type RequestParams = {
      /** @pattern ^[a-zA-Z0-9-_]{22}$ */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = CategoryViewModel
  }
}
