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
  UpdateUserPayload,
  UserRole,
  UserViewModel,
  UserViewModelListView,
} from './data-contracts'

export namespace Users {
  /**
   * No description
   * @tags Users
   * @name GetUser
   * @summary Gets a User by their ID.
   * @request GET:/api/users/{id}
   * @secure
   * @response `200` `UserViewModel` The `User` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` No `User` with the requested ID could be found.
   * @response `500` `void` Internal Server Error
   */
  export namespace GetUser {
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
   * No description
   * @tags Users
   * @name ListUsers
   * @summary Gets users, filtered by role.
   * @request GET:/users
   * @secure
   * @response `200` `UserViewModelListView` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  export namespace ListUsers {
    export type RequestParams = {}
    export type RequestQuery = {
      /**
       * The maximum number of records to return. Fewer records may be returned.
       * @format int32
       */
      limit?: number
      /**
       * The zero-based index at which to begin selecting records to return.
       * @format int32
       * @default 0
       */
      offset?: number
      /**
       * Multiple comma-separated values are allowed.
       * @default "Confirmed, Administrator"
       */
      role?: UserRole
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = UserViewModelListView
  }

  /**
   * @description Call this method with the 'Authorization' header. A valid JWT bearer token must be passed. Example: `{ 'Authorization': 'Bearer JWT' }`.
   * @tags Users
   * @name Me
   * @summary Gets the currently logged-in User.
   * @request GET:/users/me
   * @secure
   * @response `200` `UserViewModel` The `User` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` An invalid JWT was passed in.
   * @response `404` `void` The user was not found in the database.
   * @response `500` `void` Internal Server Error
   */
  export namespace Me {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = UserViewModel
  }

  /**
   * No description
   * @tags Users
   * @name UpdateUser
   * @summary Updates a user. This request is restricted to administrators, and currently only for banning/unbanning users.
   * @request PATCH:/users/{id}
   * @secure
   * @response `204` `void` No Content
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `ProblemDetails` This request was not sent by an admin, the target user is an admin, or the role provided was neither BANNED nor CONFIRMED.
   * @response `404` `ProblemDetails` Not Found
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  export namespace UpdateUser {
    export type RequestParams = {
      /** @pattern ^[a-zA-Z0-9-_]{22}$ */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = UpdateUserPayload
    export type RequestHeaders = {}
    export type ResponseBody = void
  }
}
