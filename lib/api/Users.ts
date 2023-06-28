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
  ProblemDetails,
  RegisterRequest,
  UserViewModel,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

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
   * No description
   *
   * @tags Users
   * @name UsersRegisterCreate
   * @summary Registers a new User.
   * @request POST:/api/Users/register
   * @secure
   * @response `201` `UserViewModel` The `User` was registered and returned successfully.
   * @response `400` `ProblemDetails` The passwords did not match or the request was otherwise malformed.
   * @response `409` `ProblemDetails` A `User` with the specified username or email already exists.
   */
  usersRegisterCreate = (data: RegisterRequest, params: RequestParams = {}) =>
    this.request<UserViewModel, ProblemDetails>({
      path: `/api/Users/register`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Users
   * @name UsersLoginCreate
   * @summary Logs a User in.
   * @request POST:/api/Users/login
   * @secure
   * @response `200` `LoginResponse` The `User` was logged in successfully. A `LoginResponse` is returned.
   * @response `400` `ProblemDetails` The request was malformed.
   * @response `401` `ProblemDetails` The password passed was incorrect.
   * @response `404` `ProblemDetails` No `User` with the requested details could be found.
   */
  usersLoginCreate = (data: LoginRequest, params: RequestParams = {}) =>
    this.request<LoginResponse, ProblemDetails>({
      path: `/api/Users/login`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
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
