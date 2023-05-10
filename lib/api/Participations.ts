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
   * @summary Gets a Participation by its ID.
   * @request GET:/api/Participations/{id}
   * @secure
   * @response `200` `Participation` The `Participation` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `Participation` with the requested ID could be found.
   */
  participationsDetail = (id: number, params: RequestParams = {}) =>
    this.request<Participation, ProblemDetails>({
      path: `/api/Participations/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Participations
   * @name ParticipationsCreate
   * @summary Creates a Participation for a User.
   * @request POST:/api/Participations
   * @secure
   * @response `201` `void` The `Participation` was created and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` No `User` or `Run` with the requested IDs could be found.
   */
  participationsCreate = (
    data: CreateParticipationRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails>({
      path: `/api/Participations`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * @description A comment and VOD link must be provided.
   *
   * @tags Participations
   * @name ParticipationsUpdate
   * @summary Updates the Participation of a User for a Run.
   * @request PUT:/api/Participations
   * @secure
   * @response `200` `void` The `Participation` was updated successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` No `Participation` with the requested ID could be found.
   */
  participationsUpdate = (
    data: UpdateParticipationRequest,
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails>({
      path: `/api/Participations`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
}
