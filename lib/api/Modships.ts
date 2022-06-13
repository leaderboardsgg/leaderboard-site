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
  CreateModshipRequest,
  Modship,
  ProblemDetails,
  RemoveModshipRequest,
} from './data-contracts'
import { ContentType, HttpClient, RequestParams } from './http-client'

export class Modships<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Modships
   * @name ModshipsDetail
   * @summary Gets a Modship.
   * @request GET:/api/Modships/{id}
   * @response `200` `Modship` The Modship.
   * @response `400` `ProblemDetails` Bad Request
   * @response `404` `ProblemDetails` If no Modship can be found.
   */
  modshipsDetail = (id: string, params: RequestParams = {}) =>
    this.request<Modship, ProblemDetails>({
      path: `/api/Modships/${id}`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Modships
   * @name ModshipsCreate
   * @summary Makes a User a Mod for a Leaderboard. Admin-only.
   * @request POST:/api/Modships
   * @response `201` `void` An object containing the Modship ID.
   * @response `400` `ProblemDetails` If the request is malformed.
   * @response `404` `ProblemDetails` If a non-admin calls this.
   */
  modshipsCreate = (data: CreateModshipRequest, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Modships`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    })
  /**
   * No description
   *
   * @tags Modships
   * @name ModshipsDelete
   * @summary Removes a User as a Mod from a Leaderboard. Admin-only.
   * @request DELETE:/api/Modships
   * @response `204` `void` Request was successfull.
   * @response `400` `ProblemDetails` If the request is malformed.
   * @response `404` `ProblemDetails` The User, Leaderboard or Modship was not found.
   */
  modshipsDelete = (data: RemoveModshipRequest, params: RequestParams = {}) =>
    this.request<void, ProblemDetails>({
      path: `/api/Modships`,
      method: 'DELETE',
      body: data,
      type: ContentType.Json,
      ...params,
    })
}
