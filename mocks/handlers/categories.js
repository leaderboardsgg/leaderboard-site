import { http, HttpResponse } from 'msw'
import { getBaseUrl } from 'lib/helpers'
import mockCategories from 'mocks/data/api/categories'

export const categoriesHandlers = [
  http.get(`${getBaseUrl()}/api/categories/:id`, (req) => {
    const { id } = req.params
    const category = mockCategories.find((cat) => cat.id === parseInt(id))

    if (category) {
      return HttpResponse.json(category)
    } else {
      return HttpResponse.json({ title: 'Category not found' }, { status: 404 })
    }
  }),
  http.get(
    `${getBaseUrl()}/api/leaderboards/:leaderboardId/categories/:slug`,
    (req) => {
      const { leaderboardId, slug } = req.params
      const category = mockCategories.find(
        (cat) =>
          cat.leaderboardId === parseInt(leaderboardId) && cat.slug === slug,
      )

      if (category) {
        return HttpResponse.json(category)
      } else {
        return HttpResponse.json(
          { title: 'Category not found' },
          { status: 404 },
        )
      }
    },
  ),
  http.get(
    `${getBaseUrl()}/api/leaderboards/:leaderboardId/categories`,
    (req) => {
      const { leaderboardId } = req.params
      const categories = mockCategories.filter(
        (cat) => cat.leaderboardId === parseInt(leaderboardId),
      )

      return HttpResponse.json({
        data: categories,
        total: categories.length,
        limitDefault: 20,
        limitMax: 100,
      })
    },
  ),
]
