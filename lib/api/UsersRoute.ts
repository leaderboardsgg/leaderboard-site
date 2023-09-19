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

import { UserViewModel } from './data-contracts'

export namespace Users {
  /**
   * No description
   * @tags Users
   * @name UsersDetail
   * @summary Gets a User by their ID.
   * @request GET:/api/Users/{id}
   * @secure
   * @response `200` `UserViewModel` The `User` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `User` with the requested ID could be found.
   */
  export namespace UsersDetail {
    export type RequestParams = {
      /**
       * The ID of the `User` which should be retrieved.
       * @pattern ^[a-zA-Z0-9-_]{22}$
       */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = UserViewModel
  }

  /**
   * @description Call this method with the 'Authorization' header. A valid JWT bearer token must be passed.<br /> Example: `{ 'Authorization': 'Bearer JWT' }`.
   * @tags Users
   * @name UsersMeList
   * @summary Gets the currently logged-in User.
   * @request GET:/api/Users/me
   * @secure
   * @response `200` `UserViewModel` The `User` was found and returned successfully..
   * @response `403` `ProblemDetails` An invalid JWT was passed in.
   */
  export namespace UsersMeList {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = UserViewModel
  }
}
