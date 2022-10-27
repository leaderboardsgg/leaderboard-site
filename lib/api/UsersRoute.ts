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
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  User,
} from './data-contracts'

export namespace Users {
  /**
   * No description
   * @tags Users
   * @name UsersDetail
   * @summary Gets a User by their ID.
   * @request GET:/api/Users/{id}
   * @response `200` `User` The `User` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `User` with the requested ID could be found.
   */
  export namespace UsersDetail {
    export type RequestParams = {
      /**
       * The ID of the `User` which should be retrieved.
       * @format uuid
       */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = User
  }

  /**
   * No description
   * @tags Users
   * @name UsersRegisterCreate
   * @summary Registers a new User.
   * @request POST:/api/Users/register
   * @response `201` `User` The `User` was registered and returned successfully.
   * @response `400` `ProblemDetails` The passwords did not match or the request was otherwise malformed.
   * @response `409` `ProblemDetails` A `User` with the specified username or email already exists.
   */
  export namespace UsersRegisterCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = RegisterRequest
    export type RequestHeaders = {}
    export type ResponseBody = User
  }

  /**
   * No description
   * @tags Users
   * @name UsersLoginCreate
   * @summary Logs a User in.
   * @request POST:/api/Users/login
   * @response `200` `LoginResponse` The `User` was logged in successfully. A `LoginResponse` is returned.
   * @response `400` `ProblemDetails` The request was malformed.
   * @response `401` `ProblemDetails` The password passed was incorrect.
   * @response `404` `ProblemDetails` No `User` with the requested details could be found.
   */
  export namespace UsersLoginCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = LoginRequest
    export type RequestHeaders = {}
    export type ResponseBody = LoginResponse
  }

  /**
   * @description Call this method with the 'Authorization' header. A valid JWT bearer token must be passed.<br /> Example: `{ 'Authorization': 'Bearer JWT' }`.
   * @tags Users
   * @name UsersMeList
   * @summary Gets the currently logged-in User.
   * @request GET:/api/Users/me
   * @response `200` `User` The `User` was found and returned successfully..
   * @response `403` `ProblemDetails` An invalid JWT was passed in.
   */
  export namespace UsersMeList {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = User
  }
}
