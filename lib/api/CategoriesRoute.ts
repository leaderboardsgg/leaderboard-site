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

import { Category, CreateCategoryRequest } from './data-contracts'

export namespace Categories {
  /**
   * No description
   * @tags Categories
   * @name CategoriesDetail
   * @summary Gets a Category from its ID.
   * @request GET:/api/Categories/{id}
   * @response `200` `Category` The Category with the provided ID.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If no Category can be found.
   */
  export namespace CategoriesDetail {
    export type RequestParams = { id: number }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = Category
  }

  /**
   * No description
   * @tags Categories
   * @name CategoriesCreate
   * @summary Creates a new Category. Mod-only.
   * @request POST:/api/Categories
   * @response `201` `Category` The created Category.
   * @response `400` `ProblemDetails` If the request is malformed.
   * @response `404` `ProblemDetails` If a non-mod calls this.
   */
  export namespace CategoriesCreate {
    export type RequestParams = {}
    export type RequestQuery = {}
    export type RequestBody = CreateCategoryRequest
    export type RequestHeaders = {}
    export type ResponseBody = Category
  }
}
