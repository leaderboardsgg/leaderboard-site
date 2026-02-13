import { accountsHandlers } from './accounts'
import { leaderboardsHandlers } from './leaderboards'
import { usersHandlers } from './users'

export const handlers = [
  ...accountsHandlers,
  ...leaderboardsHandlers,
  ...usersHandlers,
]
