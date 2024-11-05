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
  CategoryViewModel,
  CreateCategoryRequest,
  ProblemDetails,
  ValidationProblemDetails,
} from './data-contracts'
import { ContentType, HttpClient, type RequestParams } from './http-client'

export class Categories<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
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
  getCategory = (id: number, params: RequestParams = {}) =>
    this.request<CategoryViewModel, ProblemDetails | void>({
      path: `/api/category/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
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
  createCategory = (data: CreateCategoryRequest, params: RequestParams = {}) =>
    this.request<
      CategoryViewModel,
      ProblemDetails | void | ValidationProblemDetails
    >({
      path: `/categories/create`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
