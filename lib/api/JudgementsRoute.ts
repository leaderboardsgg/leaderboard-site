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

import { CreateJudgementRequest, JudgementViewModel } from './data-contracts'

export namespace Judgements {
  /**
   * No description
   * @tags Judgements
   * @name JudgementsDetail
   * @summary Gets a Judgement by its ID.
   * @request GET:/api/Judgements/{id}
   * @secure
   * @response `200` `JudgementViewModel` The `Judgement` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `Judgement` with the requested ID could be found.
   */
  export namespace JudgementsDetail {
    export type RequestParams = {
      /**
       * The ID of the `Judgement` which should be retrieved.
       * @format int64
       */
      id: number
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = JudgementViewModel
  }

  /**
 * No description
 * @tags Judgements
 * @name JudgementsCreate
 * @summary Creates a new Judgement for a Run.
This request is restricted to Moderators.
 * @request POST:/api/Judgements
 * @secure
 * @response `201` `JudgementViewModel` The `Judgement` was created and returned successfully.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` Unauthorized
 * @response `403` `ProblemDetails` The requesting `User` is unauthorized to create `Judgement`s.
 * @response `404` `ProblemDetails` No `Run` with the ID from the request could be found.
*/
  export namespace JudgementsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateJudgementRequest
    export type RequestHeaders = {}
    export type ResponseBody = JudgementViewModel
  }
}
