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

import type {
  ChangePasswordRequest,
  LoginRequest,
  LoginResponse,
  RecoverAccountRequest,
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
   * @response `500` `void` Server Error
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

  /**
   * No description
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
  export namespace ConfirmCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags Account
   * @name RecoverCreate
   * @summary Sends an account recovery email.
   * @request POST:/Account/recover
   * @secure
   * @response `200` `void` This endpoint returns 200 OK regardless of whether the email was sent successfully or not.
   * @response `400` `ProblemDetails` The request object was malformed.
   */
  export namespace RecoverCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = RecoverAccountRequest
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags Account
   * @name ConfirmUpdate
   * @summary Confirms a user account.
   * @request PUT:/Account/confirm/{id}
   * @secure
   * @response `200` `void` The account was confirmed successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` The token provided was invalid or expired.
   * @response `409` `ProblemDetails` The user's account was either already confirmed or banned.
   */
  export namespace ConfirmUpdate {
    export type RequestParams = {
      /**
       * The confirmation token.
       * @pattern ^[a-zA-Z0-9-_]{22}$
       */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags Account
   * @name RecoverDetail
   * @summary Tests an account recovery token for validity.
   * @request GET:/Account/recover/{id}
   * @secure
   * @response `200` `void` The token provided is valid.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` The token provided is invalid or expired, or the user is banned.
   */
  export namespace RecoverDetail {
    export type RequestParams = {
      /**
       * The recovery token.
       * @pattern ^[a-zA-Z0-9-_]{22}$
       */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
   * @tags Account
   * @name RecoverCreate2
   * @summary Recover the user's account by resetting their password to a new value.
   * @request POST:/Account/recover/{id}
   * @originalName recoverCreate
   * @duplicate
   * @secure
   * @response `200` `void` The user's password was reset successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `403` `ProblemDetails` The user is banned.
   * @response `404` `ProblemDetails` The token provided is invalid or expired.
   * @response `409` `ProblemDetails` The new password is the same as the user's existing password.
   * @response `422` `ValidationProblemDetails` The request body contains errors.<br /> A **PasswordFormat** Validation error on the Password field indicates that the password format is invalid.
   */
  export namespace RecoverCreate2 {
    export type RequestParams = {
      /**
       * The recovery token.
       * @pattern ^[a-zA-Z0-9-_]{22}$
       */
      id: string
    }
    export type RequestQuery = {}
    export type RequestBody = ChangePasswordRequest
    export type RequestHeaders = {}
    export type ResponseBody = void
  }
}
