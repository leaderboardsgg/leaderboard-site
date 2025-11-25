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

import {
  CategoryViewModel,
  CategoryViewModelConflictDetails,
  CategoryViewModelListView,
  CreateCategoryParams,
  CreateCategoryPayload,
  DeleteCategoryParams,
  GetCategoriesForLeaderboardParams,
  GetCategoryBySlugParams,
  GetCategoryParams,
  ProblemDetails,
  UpdateCategoryParams,
  UpdateCategoryPayload,
  ValidationProblemDetails,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Categories<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Categories
   * @name GetCategory
   * @summary Gets a Category by its ID.
   * @request GET:/api/categories/{id}
   * @secure
   * @response `200` `CategoryViewModel` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` Not Found
   * @response `500` `void` Internal Server Error
   */
  getCategory = (
    { id, ...query }: GetCategoryParams,
    params: RequestParams = {},
  ) =>
    this.request<CategoryViewModel, ProblemDetails | void>({
      path: `/api/categories/${id}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name GetCategoryBySlug
   * @summary Gets a Category of Leaderboard `id` by its slug. Will not return deleted Categories.
   * @request GET:/api/leaderboards/{id}/categories/{slug}
   * @secure
   * @response `200` `CategoryViewModel` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` The Category either doesn't exist for the Leaderboard, or it has been deleted.
   * @response `500` `void` Internal Server Error
   */
  getCategoryBySlug = (
    { id, slug, ...query }: GetCategoryBySlugParams,
    params: RequestParams = {},
  ) =>
    this.request<CategoryViewModel, ProblemDetails | void>({
      path: `/api/leaderboards/${id}/categories/${slug}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name GetCategoriesForLeaderboard
   * @summary Gets all Categories of Leaderboard `id`.
   * @request GET:/api/leaderboards/{id}/categories
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
      path: `/api/leaderboards/${id}/categories`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name CreateCategory
   * @summary Creates a new Category for a Leaderboard with ID `id`. This request is restricted to Administrators.
   * @request POST:/leaderboards/{id}/categories
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
    { id, ...query }: CreateCategoryParams,
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
      path: `/leaderboards/${id}/categories`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name UpdateCategory
   * @summary Updates a category with the specified new fields. This request is restricted to administrators. Note: `type` cannot be updated. This operation is atomic; if an error occurs, the category will not be updated. All fields of the request body are optional but you must specify at least one.
   * @request PATCH:/categories/{id}
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
    { id, ...query }: UpdateCategoryParams,
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
      path: `/categories/${id}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Categories
   * @name DeleteCategory
   * @summary Deletes a Category. This request is restricted to Administrators.
   * @request DELETE:/categories/{id}
   * @secure
   * @response `204` `void` No Content
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `ProblemDetails` The Category does not exist (Not Found) or was already deleted (Already Deleted). Use the `title` field of the response to differentiate between the two cases if necessary.
   * @response `500` `void` Internal Server Error
   */
  deleteCategory = (
    { id, ...query }: DeleteCategoryParams,
    params: RequestParams = {},
  ) =>
    this.request<void, ProblemDetails | void>({
      path: `/categories/${id}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
