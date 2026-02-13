import { leaderboardsHandlers } from './leaderboards'
import { usersHandlers } from './users'

export const handlers = [...leaderboardsHandlers, ...usersHandlers]
