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
   * @summary Gets a Modship.
   * @request GET:/api/Modships/{id}
   * @response `200` `Modship` The Modship.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If no Modship can be found.
   */
  export namespace ModshipsDetail {
    export type RequestParams = { id: string }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Modship
  }

  /**
   * No description
   * @tags Modships
   * @name ModshipsCreate
   * @summary Makes a User a Mod for a Leaderboard. Admin-only.
   * @request POST:/api/Modships
   * @response `201` `void` An object containing the Modship ID.
   * @response `400` `ProblemDetails` If the request is malformed.
   * @response `404` `ProblemDetails` If a non-admin calls this.
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
   * @summary Removes a User as a Mod from a Leaderboard. Admin-only.
   * @request DELETE:/api/Modships
   * @response `204` `void` Request was successfull.
   * @response `400` `ProblemDetails` If the request is malformed.
   * @response `404` `ProblemDetails` The User, Leaderboard or Modship was not found.
   */
  export namespace ModshipsDelete {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = RemoveModshipRequest
    export type RequestHeaders = {}
    export type ResponseBody = void
  }
}
