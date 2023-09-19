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
  ValidationProblemDetails,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Account<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Account
   * @name RegisterCreate
   * @summary Registers a new User.
   * @request POST:/Account/register
   * @secure
   * @response `201` `UserViewModel` The `User` was registered and returned successfully.
   * @response `400` `void` The request was malformed.
   * @response `409` `ValidationProblemDetails` A `User` with the specified username or email already exists.<br /><br /> Validation error codes by property: - **Username**: - **UsernameTaken**: the username is already in use - **Email**: - **EmailAlreadyUsed**: the email is already in use
   * @response `422` `void` The request contains errors.<br /><br /> Validation error codes by property: - **Username**: - **UsernameFormat**: Invalid username format - **Password**: - **PasswordFormat**: Invalid password format - **Email**: - **EmailValidator**: Invalid email format
   */
  registerCreate = (data: RegisterRequest, params: RequestParams = {}) =>
    this.request<UserViewModel, void | ValidationProblemDetails>({
      path: `/Account/register`,
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
   * @tags Account
   * @name LoginCreate
   * @summary Logs a User in.
   * @request POST:/login
   * @secure
   * @response `200` `LoginResponse` The `User` was logged in successfully. A `LoginResponse` is returned, containing a token.
   * @response `400` `void` The request was malformed.
   * @response `401` `ProblemDetails` The password given was incorrect.
   * @response `403` `ProblemDetails` The associated `User` is banned.
   * @response `404` `ProblemDetails` No `User` with the requested details could be found.
   * @response `422` `void` The request contains errors.<br /><br /> Validation error codes by property: - **Password**: - **NotEmptyValidator**: No password was passed - **PasswordFormat**: Invalid password format - **Email**: - **NotNullValidator**: No email was passed - **EmailValidator**: Invalid email format
   */
  loginCreate = (data: LoginRequest, params: RequestParams = {}) =>
    this.request<LoginResponse, void | ProblemDetails>({
      path: `/login`,
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
   * @tags Account
   * @name ConfirmCreate
   * @summary Resends the account confirmation link.
   * @request POST:/Account/confirm
   * @secure
   * @response `200` `void` A new confirmation link was generated.
   * @response `400` `ProblemDetails` The request was malformed.
   * @response `401` `ProblemDetails` The request doesn't contain a valid session token.
   * @response `409` `ProblemDetails` The `User`'s account has already been confirmed.
   * @response `429` `ProblemDetails` Too Many Requests
   * @response `500` `void` The account recovery email failed to be created.
   */
  confirmCreate = (params: RequestParams = {}) =>
    this.request<void, ProblemDetails | void>({
      path: `/Account/confirm`,
      method: 'POST',
      secure: true,
      ...params,
    })
}
