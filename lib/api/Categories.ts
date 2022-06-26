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
  Category,
  CreateCategoryRequest,
  ProblemDetails,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Categories<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Categories
   * @name CategoriesDetail
   * @summary Gets a Category from its ID.
   * @request GET:/api/Categories/{id}
   * @response `200` `Category` The Category with the provided ID.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If no Category can be found.
   */
  categoriesDetail = (id: number, params: RequestParams = {}) =>
    this.request<Category, ProblemDetails>({
      path: `/api/Categories/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Categories
   * @name CategoriesCreate
   * @summary Creates a new Category. Mod-only.
   * @request POST:/api/Categories
   * @response `201` `Category` The created Category.
   * @response `400` `ProblemDetails` If the request is malformed.
   * @response `404` `ProblemDetails` If a non-mod calls this.
   */
  categoriesCreate = (
    data: CreateCategoryRequest,
    params: RequestParams = {},
  ) =>
    this.request<Category, ProblemDetails>({
      path: `/api/Categories`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
