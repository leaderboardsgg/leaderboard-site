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
  CreateParticipationRequest,
  Participation,
  ProblemDetails,
  UpdateParticipationRequest,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Participations<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Participations
   * @name ParticipationsDetail
   * @request GET:/api/Participations/{id}
   * @response `200` `Participation` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` Not Found
   */
  participationsDetail = (id: number, params: RequestParams = {}) =>
    this.request<Participation, ProblemDetails>({
      path: `/api/Participations/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Participations
   * @name ParticipationsCreate
   * @request POST:/api/Participations
   * @response `201` `void` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` Not Found
   */
  participationsCreate = (
    data: CreateParticipationRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails>({
      path: `/api/Participations`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Participations
   * @name ParticipationsUpdate
   * @request PUT:/api/Participations
   * @response `200` `void` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` Not Found
   */
  participationsUpdate = (
    data: UpdateParticipationRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails>({
      path: `/api/Participations`,
      method: 'PUT',
      body: data,
      type: ContentType.Json,
      ...params,
    })
}
