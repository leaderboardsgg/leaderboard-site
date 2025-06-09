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
  CategoryViewModelListView,
  CreateCategoryPayload,
  StatusFilter,
  UpdateCategoryPayload,
} from './data-contracts'

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
   * @name GetCategoryBySlug
   * @summary Gets a Category of Leaderboard `id` by its slug. Will not return deleted Categories.
   * @request GET:/api/leaderboard/{id}/category
   * @secure
   * @response `200` `CategoryViewModel` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` The Category either doesn't exist for the Leaderboard, or it has been deleted.
   * @response `500` `void` Internal Server Error
   */
  export namespace GetCategoryBySlug {
    export type RequestParams = {
      /** @format int64 */
      id: number
    }
    export type RequestQuery = {
      slug: string
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = CategoryViewModel
  }

  /**
   * No description
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
  export namespace GetCategoriesForLeaderboard {
    export type RequestParams = {
      /** @format int64 */
      id: number
    }
    export type RequestQuery = {
      /**
       * The maximum number of records to return. Fewer records may be returned.
       * @format int32
       */
      limit?: number
      /**
       * The zero-based index at which to begin selecting records to return.
       * @format int32
       * @default 0
       */
      offset?: number
      /** @default "Published" */
      status?: StatusFilter
    }
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = CategoryViewModelListView
  }

  /**
   * No description
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
  export namespace CreateCategory {
    export type RequestParams = {
      /** @format int64 */
      id: number
    }
    export type RequestQuery = {}
    export type RequestBody = CreateCategoryPayload
    export type RequestHeaders = {}
    export type ResponseBody = CategoryViewModel
  }

  /**
   * No description
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
  export namespace UpdateCategory {
    export type RequestParams = {
      /** @format int64 */
      id: number
    }
    export type RequestQuery = {}
    export type RequestBody = UpdateCategoryPayload
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
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
  export namespace DeleteCategory {
    export type RequestParams = {
      /** @format int64 */
      id: number
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = void
  }

  /**
   * No description
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
  export namespace RestoreCategory {
    export type RequestParams = {
      /** @format int64 */
      id: number
    }
    export type RequestQuery = {}
    export type RequestBody = never
    export type RequestHeaders = {}
    export type ResponseBody = CategoryViewModel
  }
}
