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
  CreateRunRequest,
  ProblemDetails,
  RunViewModel,
  ValidationProblemDetails,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Runs<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
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
  runsDetail = (id: string, params: RequestParams = {}) =>
    this.request<RunViewModel, ProblemDetails>({
      path: `/api/Runs/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
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
  runsCreate = (data: CreateRunRequest, params: RequestParams = {}) =>
    this.request<void, ProblemDetails | ValidationProblemDetails>({
      path: `/api/Runs`,
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
   * @name RunsCategoryDetail
   * @request GET:/api/Runs/{id}/category
   * @secure
   * @response `200` `CategoryViewModel` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` Not Found
   */
  runsCategoryDetail = (id: string, params: RequestParams = {}) =>
    this.request<CategoryViewModel, ProblemDetails>({
      path: `/api/Runs/${id}/category`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
}
