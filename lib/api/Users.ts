/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  GetUserParams,
  ListUsersParams,
  ProblemDetails,
  UpdateUserParams,
  UpdateUserPayload,
  UserViewModel,
  UserViewModelListView,
  ValidationProblemDetails,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Users<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
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
  getUser = ({ id, ...query }: GetUserParams, params: RequestParams = {}) =>
    this.request<UserViewModel, ProblemDetails | void>({
      path: `/api/users/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
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
  listUsers = (query: ListUsersParams, params: RequestParams = {}) =>
    this.request<
      UserViewModelListView,
      ProblemDetails | void | ValidationProblemDetails
    >({
      path: `/users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Call this method with the 'Authorization' header. A valid JWT bearer token must be passed. Example: `{ 'Authorization': 'Bearer JWT' }`.
   *
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
  me = (params: RequestParams = {}) =>
    this.request<UserViewModel, ProblemDetails | void>({
      path: `/users/me`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
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
  updateUser = (
    { id, ...query }: UpdateUserParams,
    data: UpdateUserPayload,
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails | void | ValidationProblemDetails>({
      path: `/users/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
