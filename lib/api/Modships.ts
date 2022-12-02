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
   * @summary Gets a Modship by its ID.
   * @request GET:/api/Modships/{id}
   * @response `200` `Modship` The `Modship` was found and returned successfully.
   * @response `400` `ProblemDetails` Bad Request
   * @response `401` `ProblemDetails` Unauthorized
   * @response `403` `ProblemDetails` Forbidden
   * @response `404` `ProblemDetails` No `User` with the requested ID could be found.
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
 * @summary Promotes a User to Moderator for a Leaderboard.
This request is restricted to Administrators.
 * @request POST:/api/Modships
 * @response `201` `void` The `User` was promoted successfully. The `Modship` is returned.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` Unauthorized
 * @response `403` `ProblemDetails` Forbidden
 * @response `404` `ProblemDetails` The requesting `User` is unauthorized to promote other `User`s.
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
 * @summary Demotes a Moderator to User for a Leaderboard.
This request is restricted to Administrators.
 * @request DELETE:/api/Modships
 * @response `204` `void` The `User` was demoted successfully.
 * @response `400` `ProblemDetails` The request was malformed.
 * @response `401` `ProblemDetails` Unauthorized
 * @response `403` `ProblemDetails` Forbidden
 * @response `404` `ProblemDetails` No `User`, `Leaderboard`, or `Modship` with the requested IDs could be found, or the requesting `User` is unauthorized to demote other `User`s.
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
