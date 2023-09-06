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
  UserViewModel,
} from './data-contracts'

export namespace Account {
  /**
   * No description
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
  export namespace RegisterCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = RegisterRequest
    export type RequestHeaders = {}
    export type ResponseBody = UserViewModel
  }

  /**
   * No description
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
  export namespace LoginCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = LoginRequest
    export type RequestHeaders = {}
    export type ResponseBody = LoginResponse
  }
}
