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

import { CategoryViewModel, CreateCategoryRequest } from './data-contracts'

export namespace Categories {
  /**
   * No description
   * @tags Categories
   * @name CategoriesDetail
   * @summary Gets a Category by its ID.
   * @request GET:/api/Categories/{id}
   * @secure
   * @response `200` `CategoryViewModel` The `Category` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` No `Category` with the requested ID could be found.
   */
  export namespace CategoriesDetail {
    export type RequestParams = {
      /**
       * The ID of the `Category` which should be retrieved.
       * @format int64
       */
      id: number
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = CategoryViewModel
  }

  /**
 * No description
 * @tags Categories
 * @name CategoriesCreate
 * @summary Creates a new Category.
This request is restricted to Moderators.
 * @request POST:/api/Categories
 * @secure
 * @response `201` `CategoryViewModel` The `Category` was created and returned successfully.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` Unauthorized
 * @response `403` `ProblemDetails` Forbidden
 * @response `404` `ProblemDetails` The requesting `User` is unauthorized to create a `Category`.
 * @response `422` `ValidationProblemDetails` Client Error
*/
  export namespace CategoriesCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateCategoryRequest
    export type RequestHeaders = {}
    export type ResponseBody = CategoryViewModel
  }
}
