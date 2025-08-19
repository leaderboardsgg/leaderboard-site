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
  CreateRunRequest,
  RunViewModel,
  ScoredRunViewModel,
  TimedRunViewModel,
} from "./data-contracts";

export namespace Runs {
  /**
   * No description
   * @tags Runs
   * @name GetRun
   * @summary Gets a Run by its ID.
   * @request GET:/api/run/{id}
   * @secure
   * @response `200` `(RunViewModel | TimedRunViewModel | ScoredRunViewModel)` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` Not Found
   * @response `500` `void` Internal Server Error
   */
  export namespace GetRun {
    export type RequestParams = {
      /** @pattern ^[a-zA-Z0-9-_]{22}$ */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      | RunViewModel
      | TimedRunViewModel
      | ScoredRunViewModel;
  }

  /**
   * No description
   * @tags Runs
   * @name CreateRun
   * @summary Creates a new Run.
   * @request POST:/runs/create
   * @secure
   * @response `201` `void` Created
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `void` Unauthorized
   * @response `403` `void` Forbidden
   * @response `422` `ValidationProblemDetails` Unprocessable Content
   * @response `500` `void` Internal Server Error
   */
  export namespace CreateRun {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateRunRequest;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * No description
   * @tags Runs
   * @name GetRunCategory
   * @summary Gets the category a run belongs to.
   * @request GET:/api/run/{id}/category
   * @secure
   * @response `200` `CategoryViewModel` OK
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `void` Not Found
   * @response `500` `void` Internal Server Error
   */
  export namespace GetRunCategory {
    export type RequestParams = {
      /** @pattern ^[a-zA-Z0-9-_]{22}$ */
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CategoryViewModel;
  }
}
