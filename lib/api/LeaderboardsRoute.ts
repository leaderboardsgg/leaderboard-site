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
  CreateLeaderboardPayload,
  LeaderboardViewModel,
  LeaderboardViewModelListView,
  SortLeaderboardsBy,
  StatusFilter,
  UpdateLeaderboardPayload,
} from "./data-contracts";

export namespace Leaderboards {
  /**
   * No description
   * @tags Leaderboards
   * @name GetLeaderboard
   * @summary Gets a leaderboard by its ID.
   * @request GET:/api/leaderboards/{id}
   * @secure
   * @response `200` `LeaderboardViewModel` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` Not Found
   * @response `500` `void` Internal Server Error
   */
  export namespace GetLeaderboard {
    export type RequestParams = {
      /** @format int64 */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LeaderboardViewModel;
  }

  /**
   * No description
   * @tags Leaderboards
   * @name GetLeaderboardBySlug
   * @summary Gets a leaderboard by its slug. Will not return deleted boards.
   * @request GET:/api/leaderboards/{slug}
   * @secure
   * @response `200` `LeaderboardViewModel` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` Not Found
   * @response `500` `void` Internal Server Error
   */
  export namespace GetLeaderboardBySlug {
    export type RequestParams = {
      slug: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LeaderboardViewModel;
  }

  /**
   * No description
   * @tags Leaderboards
   * @name ListLeaderboards
   * @summary Gets leaderboards. Includes deleted, if specified.
   * @request GET:/api/leaderboards
   * @secure
   * @response `200` `LeaderboardViewModelListView` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  export namespace ListLeaderboards {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * The maximum number of records to return. Fewer records may be returned.
       * @format int32
       */
      limit?: number;
      /**
       * The zero-based index at which to begin selecting records to return.
       * @format int32
       * @default 0
       */
      offset?: number;
      /** @default "Published" */
      status?: StatusFilter;
      /**
       * Used in GetLeaderboards to sort leaderboards by a field.
       * @default "Name_Asc"
       */
      sortBy?: SortLeaderboardsBy;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LeaderboardViewModelListView;
  }

  /**
   * No description
   * @tags Leaderboards
   * @name SearchLeaderboards
   * @summary Search leaderboards by name or slug.
   * @request GET:/api/search/leaderboards
   * @secure
   * @response `200` `LeaderboardViewModelListView` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `422` `ProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  export namespace SearchLeaderboards {
    export type RequestParams = {};
    export type RequestQuery = {
      /** The query string. Must not be empty. */
      q: string;
      /**
       * The maximum number of records to return. Fewer records may be returned.
       * @format int32
       */
      limit?: number;
      /**
       * The zero-based index at which to begin selecting records to return.
       * @format int32
       * @default 0
       */
      offset?: number;
      /** @default "Published" */
      status?: StatusFilter;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LeaderboardViewModelListView;
  }

  /**
   * No description
   * @tags Leaderboards
   * @name CreateLeaderboard
   * @summary Creates a new leaderboard. This request is restricted to Administrators.
   * @request POST:/leaderboards
   * @secure
   * @response `201` `LeaderboardViewModel` Created
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` The requesting `User` is unauthorized to create `Leaderboard`s.
   * @response `409` `LeaderboardViewModelConflictDetails` A Leaderboard with the specified slug already exists and will be returned in the `conflicting` field.
   * @response `422` `ValidationProblemDetails` The request contains errors. The following errors can occur: NotEmptyValidator, SlugFormat
   * @response `500` `void` Internal Server Error
   */
  export namespace CreateLeaderboard {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateLeaderboardPayload;
    export type RequestHeaders = {};
    export type ResponseBody = LeaderboardViewModel;
  }

  /**
   * No description
   * @tags Leaderboards
   * @name DeleteLeaderboard
   * @summary Deletes a leaderboard. This request is restricted to Administrators.
   * @request DELETE:/leaderboards/{id}
   * @secure
   * @response `204` `void` No Content
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `ProblemDetails` The leaderboard does not exist (Not Found) or was already deleted (Already Deleted). Use the title field of the response to differentiate between the two cases if necessary.
   * @response `500` `void` Internal Server Error
   */
  export namespace DeleteLeaderboard {
    export type RequestParams = {
      /** @format int64 */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Leaderboards
   * @name UpdateLeaderboard
   * @summary Updates a leaderboard with the specified new fields. This request is restricted to administrators. This operation is atomic; if an error occurs, the leaderboard will not be updated. All fields of the request body are optional but you must specify at least one.
   * @request PATCH:/leaderboards/{id}
   * @secure
   * @response `204` `void` No Content
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `404` `ProblemDetails` Not Found
   * @response `409` `LeaderboardViewModelConflictDetails` The specified slug is already in use by another leaderboard. Returns the conflicting leaderboard.
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  export namespace UpdateLeaderboard {
    export type RequestParams = {
      /** @format int64 */
      id: number;
    };
    export type RequestQuery = {};
    export type RequestBody = UpdateLeaderboardPayload;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}
