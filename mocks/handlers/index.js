import { accountsHandlers } from './accounts'
import { categoriesHandlers } from './categories'
import { leaderboardsHandlers } from './leaderboards'
import { usersHandlers } from './users'

export const handlers = [
  ...accountsHandlers,
  ...categoriesHandlers,
  ...leaderboardsHandlers,
  ...usersHandlers,
]
