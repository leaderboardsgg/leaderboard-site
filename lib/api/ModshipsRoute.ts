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
  CreateModshipRequest,
  Modship,
  RemoveModshipRequest,
} from './data-contracts'

export namespace Modships {
  /**
   * No description
   * @tags Modships
   * @name ModshipsDetail
   * @summary Gets a Modship by its ID.
   * @request GET:/api/Modships/{id}
   * @response `200` `Modship` The `Modship` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` No `User` with the requested ID could be found.
   */
  export namespace ModshipsDetail {
    export type RequestParams = {
      /**
       * The ID of the *Moderator* (`User`) which should be retrieved.
       * @format uuid
       */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Modship
  }

  /**
 * No description
 * @tags Modships
 * @name ModshipsCreate
 * @summary Promotes a User to Moderator for a Leaderboard.
This request is restricted to Administrators.
 * @request POST:/api/Modships
 * @response `201` `void` The `User` was promoted successfully. The `Modship` is returned.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` Unauthorized
 * @response `403` `ProblemDetails` Forbidden
 * @response `404` `ProblemDetails` The requesting `User` is unauthorized to promote other `User`s.
*/
  export namespace ModshipsCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateModshipRequest
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
 * No description
 * @tags Modships
 * @name ModshipsDelete
 * @summary Demotes a Moderator to User for a Leaderboard.
This request is restricted to Administrators.
 * @request DELETE:/api/Modships
 * @response `204` `void` The `User` was demoted successfully.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` Unauthorized
 * @response `403` `ProblemDetails` Forbidden
 * @response `404` `ProblemDetails` No `User`, `Leaderboard`, or `Modship` with the requested IDs could be found, or the requesting `User` is unauthorized to demote other `User`s.
*/
  export namespace ModshipsDelete {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = RemoveModshipRequest
    export type RequestHeaders = {}
    export type ResponseBody = void
  }
}
