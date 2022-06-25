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

import { CreateRunRequest, Participation, Run } from './data-contracts'

export namespace Runs {
  /**
   * No description
   * @tags Runs
   * @name RunsDetail
   * @summary Gets a Run.
   * @request GET:/api/Runs/{id}
   * @response `200` `Run` The Run with the provided ID.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If no Run is found with the provided ID.
   */
  export namespace RunsDetail {
    export type RequestParams = { id: string }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Run
  }

  /**
   * No description
   * @tags Runs
   * @name RunsCreate
   * @summary Creates a Run.
   * @request POST:/api/Runs
   * @response `201` `void` Success
   * @response `400` `ProblemDetails` Bad Request
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
   * @summary Gets the participations for a run.
   * @request GET:/api/Runs/{id}/participations
   * @response `200` `(Participation)[]` An array with all participations.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If the run or no participations are found.
   */
  export namespace RunsParticipationsDetail {
    export type RequestParams = { id: string }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Participation[]
  }
}
