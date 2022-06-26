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
  CreateJudgementRequest,
  JudgementViewModel,
  ProblemDetails,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Judgements<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Judgements
   * @name JudgementsDetail
   * @summary Gets a Judgement from its ID.
   * @request GET:/api/Judgements/{id}
   * @response `200` `JudgementViewModel` The Judgement with the provided ID.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If no Judgement can be found.
   */
  judgementsDetail = (id: number, params: RequestParams = {}) =>
    this.request<JudgementViewModel, ProblemDetails>({
      path: `/api/Judgements/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Judgements
   * @name JudgementsCreate
   * @summary Creates a judgement for a run.
   * @request POST:/api/Judgements
   * @response `201` `JudgementViewModel` The created judgement.
   * @response `400` `ProblemDetails` The request body is malformed.
   * @response `404` `ProblemDetails` For an invalid judgement.
   */
  judgementsCreate = (
    data: CreateJudgementRequest,
    params: RequestParams = {},
  ) =>
    this.request<JudgementViewModel, ProblemDetails>({
      path: `/api/Judgements`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
