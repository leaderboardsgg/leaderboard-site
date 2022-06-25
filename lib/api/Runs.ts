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
   * @summary Gets a Run.
   * @request GET:/api/Runs/{id}
   * @response `200` `Run` The Run with the provided ID.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If no Run is found with the provided ID.
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
   * @summary Creates a Run.
   * @request POST:/api/Runs
   * @response `201` `void` Success
   * @response `400` `ProblemDetails` Bad Request
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
   * @summary Gets the participations for a run.
   * @request GET:/api/Runs/{id}/participations
   * @response `200` `(Participation)[]` An array with all participations.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If the run or no participations are found.
   */
  runsParticipationsDetail = (id: string, params: RequestParams = {}) =>
    this.request<Participation[], ProblemDetails>({
      path: `/api/Runs/${id}/participations`,
      method: 'GET',
      format: 'json',
      ...params,
    })
}
