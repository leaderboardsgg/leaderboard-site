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
  Category,
  CreateRunRequest,
  Participation,
  Run,
} from './data-contracts'

export namespace Runs {
  /**
   * No description
   * @tags Runs
   * @name RunsDetail
   * @summary Gets a Run by its ID.
   * @request GET:/api/Runs/{id}
   * @response `200` `Run` The `Run` was found and returned successfully.
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
       * @format uuid
       */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Run
  }

  /**
   * No description
   * @tags Runs
   * @name RunsCreate
   * @summary Creates a new Run.
   * @request POST:/api/Runs
   * @response `201` `void` The `Run` was created and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` Not Found
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
   * @name RunsParticipationsDetail
   * @summary Gets all Participations associated with a Run ID.
   * @request GET:/api/Runs/{id}/participations
   * @response `200` `(Participation)[]` The list of `Participation`s was retrieved successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` No `Run` with the requested ID could be found or the `Run` does not contain any `Participation`s.
   */
  export namespace RunsParticipationsDetail {
    export type RequestParams = {
      /**
       * The ID of the `Run` whose `Participation`s should be retrieved.<br />
       * It must be possible to parse this to `long` for this request to complete.
       * @format uuid
       */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Participation[]
  }

  /**
   * No description
   * @tags Runs
   * @name RunsCategoryDetail
   * @request GET:/api/Runs/{id}/category
   * @response `200` `Category` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` Not Found
   */
  export namespace RunsCategoryDetail {
    export type RequestParams = {
      /** @format uuid */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Category
  }
}
