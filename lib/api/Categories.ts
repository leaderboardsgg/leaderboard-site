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
  CategoryViewModel,
  CategoryViewModelConflictDetails,
  CategoryViewModelListView,
  CreateCategoryPayload,
  GetCategoriesForLeaderboardParams,
  GetCategoryBySlugParams,
  ProblemDetails,
  UpdateCategoryPayload,
  ValidationProblemDetails,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

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
   * @name GetCategoryBySlug
   * @summary Gets a Category of Leaderboard `id` by its slug. Will not return deleted Categories.
   * @request GET:/api/leaderboard/{id}/category
   * @secure
   * @response `200` `CategoryViewModel` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` The Category either doesn't exist for the Leaderboard, or it has been deleted.
   * @response `500` `void` Internal Server Error
   */
  getCategoryBySlug = (
    { id, ...query }: GetCategoryBySlugParams,
    params: RequestParams = {},
  ) =>
    this.request<CategoryViewModel, ProblemDetails | void>({
      path: `/api/leaderboard/${id}/category`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Categories
   * @name GetCategoriesForLeaderboard
   * @summary Gets all Categories of Leaderboard `id`.
   * @request GET:/api/leaderboard/{id}/categories
   * @secure
   * @response `200` `CategoryViewModelListView` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` The Leaderboard with ID `id` could not be found.
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  getCategoriesForLeaderboard = (
    { id, ...query }: GetCategoriesForLeaderboardParams,
    params: RequestParams = {},
  ) =>
    this.request<
      CategoryViewModelListView,
      ProblemDetails | ValidationProblemDetails | void
    >({
      path: `/api/leaderboard/${id}/categories`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Categories
   * @name CreateCategory
   * @summary Creates a new Category for a Leaderboard with ID `id`. This request is restricted to Administrators.
   * @request POST:/leaderboard/{id}/categories/create
   * @secure
   * @response `201` `CategoryViewModel` Created
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` The requesting `User` is unauthorized to create Categories.
   * @response `404` `ProblemDetails` The Leaderboard with ID `id` could not be found.
   * @response `409` `CategoryViewModelConflictDetails` A Category with the specified slug already exists.
   * @response `422` `ValidationProblemDetails` The request contains errors. The following errors can occur: NotEmptyValidator, SlugFormat
   * @response `500` `void` Internal Server Error
   */
  createCategory = (
    id: number,
    data: CreateCategoryPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      CategoryViewModel,
      | ProblemDetails
      | void
      | CategoryViewModelConflictDetails
      | ValidationProblemDetails
    >({
      path: `/leaderboard/${id}/categories/create`,
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
   * @tags Categories
   * @name UpdateCategory
   * @summary Updates a category with the specified new fields. This request is restricted to administrators. Note: `type` cannot be updated. This operation is atomic; if an error occurs, the category will not be updated. All fields of the request body are optional but you must specify at least one.
   * @request PATCH:/category/{id}
   * @secure
   * @response `204` `void` No Content
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `ProblemDetails` Not Found
   * @response `409` `CategoryViewModelConflictDetails` The specified slug is already in use by another category. Returns the conflicting category.
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  updateCategory = (
    id: number,
    data: UpdateCategoryPayload,
    params: RequestParams = {},
  ) =>
    this.request<
      void,
      | ProblemDetails
      | void
      | CategoryViewModelConflictDetails
      | ValidationProblemDetails
    >({
      path: `/category/${id}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Categories
   * @name DeleteCategory
   * @summary Deletes a Category. This request is restricted to Administrators.
   * @request DELETE:/category/{id}
   * @secure
   * @response `204` `void` No Content
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `ProblemDetails` The Category does not exist (Not Found) or was already deleted (Already Deleted). Use the `title` field of the response to differentiate between the two cases if necessary.
   * @response `500` `void` Internal Server Error
   */
  deleteCategory = (id: number, params: RequestParams = {}) =>
    this.request<void, ProblemDetails | void>({
      path: `/category/${id}`,
      method: 'DELETE',
      secure: true,
      ...params,
    })
  /**
   * No description
   *
   * @tags Categories
   * @name RestoreCategory
   * @summary Restores a deleted Category.
   * @request PUT:/category/{id}/restore
   * @secure
   * @response `200` `CategoryViewModel` The restored `Category`s view model.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` The requesting `User` is unauthorized to restore `Category`s.
   * @response `404` `ProblemDetails` The `Category` was not found, or it wasn't deleted in the first place. Includes a field, `title`, which will be "Not Found" in the former case, and "Not Deleted" in the latter.
   * @response `409` `CategoryViewModelConflictDetails` Another `Category` with the same slug has been created since, and therefore can't be restored. Said `Category` will be returned in the `conflicting` field in the response.
   * @response `500` `void` Internal Server Error
   */
  restoreCategory = (id: number, params: RequestParams = {}) =>
    this.request<
      CategoryViewModel,
      ProblemDetails | void | CategoryViewModelConflictDetails
    >({
      path: `/category/${id}/restore`,
      method: 'PUT',
      secure: true,
      format: 'json',
      ...params,
    })
}
