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
import type { RequestParams } from './http-client'
import { ContentType, HttpClient } from './http-client'

export class Categories<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
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
  categoriesDetail = (id: number, params: RequestParams = {}) =>
    this.request<CategoryViewModel, ProblemDetails>({
      path: `/api/Categories/${id}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params,
    })
  /**
 * No description
 *
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
  categoriesCreate = (
    data: CreateCategoryRequest,
    params: RequestParams = {},
  ) =>
    this.request<CategoryViewModel, ProblemDetails | ValidationProblemDetails>({
      path: `/api/Categories`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
