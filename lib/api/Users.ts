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

import type { ProblemDetails, UserViewModel } from './data-contracts'
import { HttpClient, type RequestParams } from './http-client'

export class Users<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Users
   * @name UsersDetail
   * @summary Gets a User by their ID.
   * @request GET:/api/Users/{id}
   * @secure
   * @response `200` `UserViewModel` The `User` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` No `User` with the requested ID could be found.
   */
  usersDetail = (id: string, params: RequestParams = {}) =>
    this.request<UserViewModel, ProblemDetails>({
      path: `/api/Users/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * @description Call this method with the 'Authorization' header. A valid JWT bearer token must be passed.<br /> Example: `{ 'Authorization': 'Bearer JWT' }`.
   *
   * @tags Users
   * @name UsersMeList
   * @summary Gets the currently logged-in User.
   * @request GET:/api/Users/me
   * @secure
   * @response `200` `UserViewModel` The `User` was found and returned successfully..
   * @response `403` `ProblemDetails` An invalid JWT was passed in.
   */
  usersMeList = (params: RequestParams = {}) =>
    this.request<UserViewModel, ProblemDetails>({
      path: `/api/Users/me`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
}
