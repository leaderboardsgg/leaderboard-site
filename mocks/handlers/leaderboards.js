import { http, HttpResponse } from 'msw'
import { getBaseUrl } from 'lib/helpers'
import mockLeaderboards from 'mocks/data/api/leaderboards'

export const leaderboardsHandlers = [
  http.get(`${getBaseUrl()}/api/leaderboards`, () =>
    HttpResponse.json(mockLeaderboards),
  ),
  http.get(`${getBaseUrl()}/api/leaderboards/:slug`, (req) => {
    const { slug } = req.params
    const leaderboard = mockLeaderboards.find((lb) => lb.slug === slug)

    if (leaderboard) {
      return HttpResponse.json(leaderboard)
    } else {
      return HttpResponse.json(
        { title: 'Leaderboard not found' },
        { status: 404 },
      )
    }
  }),
]
