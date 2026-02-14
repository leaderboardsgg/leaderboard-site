import { http, HttpResponse } from 'msw'
import { getBaseUrl } from 'lib/helpers'

export const accountsHandlers = [
  http.post(`${getBaseUrl()}/Account/register`, () =>
    HttpResponse.json({}, { status: 202 }),
  ),
  http.post(`${getBaseUrl()}/login`, () =>
    HttpResponse.json({ token: 'login-token' }),
  ),
]
