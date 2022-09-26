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
  UpdateParticipationRequest,
} from './data-contracts'

export namespace Participations {
  /**
   * No description
   * @tags Participations
   * @name ParticipationsDetail
   * @request GET:/api/Participations/{id}
   * @response `200` `Participation` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` Not Found
   */
  export namespace ParticipationsDetail {
    export type RequestParams = { id: number }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Participation
  }

  /**
   * No description
   * @tags Participations
   * @name ParticipationsCreate
   * @request POST:/api/Participations
   * @response `201` `void` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` Not Found
   */
  export namespace ParticipationsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateParticipationRequest
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags Participations
   * @name ParticipationsUpdate
   * @request PUT:/api/Participations
   * @response `200` `void` Success
   * @response `400` `ProblemDetails` Bad Request
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` Not Found
   */
  export namespace ParticipationsUpdate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = UpdateParticipationRequest
    export type RequestHeaders = {}
    export type ResponseBody = void
  }
}
