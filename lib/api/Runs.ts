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
  ProblemDetails,
  Run,
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
   * @response `200` `Run` The `Run` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` No `Run` with the requested ID could be found.
   */
  runsDetail = (id: string, params: RequestParams = {}) =>
    this.request<Run, ProblemDetails>({
      path: `/api/Runs/${id}`,
      method: 'GET',
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
   * @response `201` `void` The `Run` was created and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` Not Found
   */
  runsCreate = (data: CreateRunRequest, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Runs`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
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
  runsParticipationsDetail = (id: string, params: RequestParams = {}) =>
    this.request<Participation[], ProblemDetails>({
      path: `/api/Runs/${id}/participations`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Runs
   * @name RunsCategoryDetail
   * @request GET:/api/Runs/{id}/category
   * @response `200` `Category` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` Not Found
   */
  runsCategoryDetail = (id: string, params: RequestParams = {}) =>
    this.request<Category, ProblemDetails>({
      path: `/api/Runs/${id}/category`,
      method: 'GET',
      format: 'json',
      ...params,
    })
}
