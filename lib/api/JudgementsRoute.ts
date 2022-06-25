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
   * @summary Gets a Judgement from its ID.
   * @request GET:/api/Judgements/{id}
   * @response `200` `JudgementViewModel` The Judgement with the provided ID.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If no Judgement can be found.
   */
  export namespace JudgementsDetail {
    export type RequestParams = { id: number }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = JudgementViewModel
  }

  /**
   * No description
   * @tags Judgements
   * @name JudgementsCreate
   * @summary Creates a judgement for a run.
   * @request POST:/api/Judgements
   * @response `201` `JudgementViewModel` The created judgement.
   * @response `400` `ProblemDetails` The request body is malformed.
   * @response `404` `ProblemDetails` For an invalid judgement.
   */
  export namespace JudgementsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateJudgementRequest
    export type RequestHeaders = {}
    export type ResponseBody = JudgementViewModel
  }
}
