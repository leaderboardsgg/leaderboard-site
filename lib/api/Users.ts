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

import { ProblemDetails, UserViewModel } from './data-contracts'
import { HttpClient, RequestParams } from './http-client'

export class Users<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Users
   * @name GetUser
   * @summary Gets a User by their ID.
   * @request GET:/api/user/{id}
   * @secure
   * @response `200` `UserViewModel` The `User` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` No `User` with the requested ID could be found.
   * @response `500` `void` Internal Server Error
   */
  getUser = (id: string, params: RequestParams = {}) =>
    this.request<UserViewModel, ProblemDetails | void>({
      path: `/api/user/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description Call this method with the 'Authorization' header. A valid JWT bearer token must be passed. Example: `{ 'Authorization': 'Bearer JWT' }`.
   *
   * @tags Users
   * @name Me
   * @summary Gets the currently logged-in User.
   * @request GET:/user/me
   * @secure
   * @response `200` `UserViewModel` The `User` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` An invalid JWT was passed in.
   * @response `404` `void` The user was not found in the database.
   * @response `500` `void` Internal Server Error
   */
  me = (params: RequestParams = {}) =>
    this.request<UserViewModel, ProblemDetails | void>({
      path: `/user/me`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
}
