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

import { CategoryViewModel, CreateCategoryRequest } from "./data-contracts";

export namespace Categories {
  /**
   * No description
   * @tags Categories
   * @name GetCategory
   * @summary Gets a Category by its ID.
   * @request GET:/api/category/{id}
   * @secure
   * @response `200` `CategoryViewModel` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` Not Found
   * @response `500` `void` Internal Server Error
   */
  export namespace GetCategory {
    export type RequestParams = {
      /** @format int64 */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryViewModel;
  }

  /**
   * No description
   * @tags Categories
   * @name CreateCategory
   * @summary Creates a new Category. This request is restricted to Moderators.
   * @request POST:/categories/create
   * @secure
   * @response `201` `CategoryViewModel` Created
   * @response `400` `ProblemDetails` Bad Request
   * @response `403` `void` Forbidden
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  export namespace CreateCategory {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateCategoryRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryViewModel;
  }
}
