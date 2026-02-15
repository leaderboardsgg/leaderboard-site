import { http, HttpResponse } from 'msw'
import { getBaseUrl } from 'lib/helpers'
import mockUsers, { confirmedUser } from 'mocks/data/api/users'

export const usersHandlers = [
  http.get(`${getBaseUrl()}/users/me`, () => HttpResponse.json(confirmedUser)),
  http.get(`${getBaseUrl()}/users`, () => {
    HttpResponse.json(mockUsers)
  }),
]
