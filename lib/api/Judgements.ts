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
   * @summary Gets a Judgement by its ID.
   * @request GET:/api/Judgements/{id}
   * @response `200` `JudgementViewModel` The `Judgement` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `Judgement` with the requested ID could be found.
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
 * @summary Creates a new Judgement for a Run.
This request is restricted to Moderators.
 * @request POST:/api/Judgements
 * @response `201` `JudgementViewModel` The `Judgement` was created and returned successfully.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` Unauthorized
 * @response `403` `ProblemDetails` The requesting `User` is unauthorized to create `Judgement`s.
 * @response `404` `ProblemDetails` No `Run` with the ID from the request could be found.
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
