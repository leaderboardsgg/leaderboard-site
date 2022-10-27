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
   * @summary Gets a Participation by its ID.
   * @request GET:/api/Participations/{id}
   * @response `200` `Participation` The `Participation` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `Participation` with the requested ID could be found.
   */
  export namespace ParticipationsDetail {
    export type RequestParams = {
      /**
       * The ID of the `Participation` which should be retrieved.
       * @format int64
       */
      id: number
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Participation
  }

  /**
   * No description
   * @tags Participations
   * @name ParticipationsCreate
   * @summary Creates a Participation for a User.
   * @request POST:/api/Participations
   * @response `201` `void` The `Participation` was created and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` No `User` or `Run` with the requested IDs could be found.
   */
  export namespace ParticipationsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateParticipationRequest
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * @description A comment and VOD link must be provided.
   * @tags Participations
   * @name ParticipationsUpdate
   * @summary Updates the Participation of a User for a Run.
   * @request PUT:/api/Participations
   * @response `200` `void` The `Participation` was updated successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` No `Participation` with the requested ID could be found.
   */
  export namespace ParticipationsUpdate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = UpdateParticipationRequest
    export type RequestHeaders = {}
    export type ResponseBody = void
  }
}
