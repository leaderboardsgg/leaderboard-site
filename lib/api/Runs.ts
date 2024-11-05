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
  ProblemDetails,
  RunViewModel,
  ScoredRunViewModel,
  TimedRunViewModel,
  ValidationProblemDetails,
} from './data-contracts'
import type { RequestParams } from './http-client'
import { ContentType, HttpClient } from './http-client'

export class Runs<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Runs
   * @name GetRun
   * @summary Gets a Run by its ID.
   * @request GET:/api/run/{id}
   * @secure
   * @response `200` `(RunViewModel | TimedRunViewModel | ScoredRunViewModel)` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` Not Found
   * @response `500` `void` Internal Server Error
   */
  getRun = (id: string, params: RequestParams = {}) =>
    this.request<
      RunViewModel | TimedRunViewModel | ScoredRunViewModel,
      ProblemDetails | void
    >({
      path: `/api/run/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Runs
   * @name CreateRun
   * @summary Creates a new Run.
   * @request POST:/runs/create
   * @secure
   * @response `201` `void` Created
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  createRun = (data: CreateRunRequest, params: RequestParams = {}) =>
    this.request<void, ProblemDetails | void | ValidationProblemDetails>({
      path: `/runs/create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
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
  getRunCategory = (id: string, params: RequestParams = {}) =>
    this.request<CategoryViewModel, ProblemDetails | void>({
      path: `/api/run/${id}/category`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
}
