import { mountSuspended } from '@nuxt/test-utils/runtime'
import LandingLeaderboards from './LandingLeaderboards.vue'
import type { LeaderboardViewModel } from '~~/lib/api/data-contracts'

const games: LeaderboardViewModel[] = [
  {
    id: 1,
    name: 'Getting Over It With Bennet Foddy',
    slug: 'slug-2',
    info: '',
    createdAt: '2024-11-02T22:11:08+0000',
    updatedAt: '2024-11-02T22:11:08+0000',
    deletedAt: null,
    status: 'Published',
    stats: {
      runCount: 42,
    },
  },
  {
    id: 2,
    name: 'Ocarine of Time',
    slug: 'slug-2',
    info: '',
    createdAt: '2024-11-02T22:11:08+0000',
    updatedAt: '2024-11-02T22:11:08+0000',
    deletedAt: null,
    status: 'Published',
    stats: {
      runCount: 64,
    },
  },
  {
    id: 3,
    name: 'Mario 64',
    slug: 'slug-3',
    info: '',
    createdAt: '2024-11-02T22:11:08+0000',
    updatedAt: '2024-11-02T22:11:08+0000',
    deletedAt: null,
    status: 'Published',
    stats: {
      runCount: 4,
    },
  },
]

describe('LandingLeaderboards Component', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(LandingLeaderboards, {
      props: {
        leaderboards: games,
      },
    })

    expect(wrapper.isVisible()).toBe(true)
  })

  it.each(games)(
    'should render game name "$name" in leaderboard card',
    async (game) => {
      const wrapper = await mountSuspended(LandingLeaderboards, {
        props: {
          leaderboards: games,
        },
      })

      expect(wrapper.html()).toContain(game.name)
    },
  )

  it.each(games)(
    'should render run stats for "$name" in leaderboard card',
    async (game) => {
      const wrapper = await mountSuspended(LandingLeaderboards, {
        props: {
          leaderboards: games,
        },
      })

      expect(wrapper.html()).toContain(game?.stats?.runCount)
    },
  )

  it('should not render stats for leaderboard if stats are falsy', async () => {
    const mockLeaderBoardsWithoutStats: LeaderboardViewModel[] = [
      {
        id: 1,
        name: 'Getting Over It With Bennet Foddy',
        slug: 'slug-2',
        info: '',
        createdAt: '2024-11-02T22:11:08+0000',
        updatedAt: '2024-11-02T22:11:08+0000',
        deletedAt: null,
        status: 'Published',
        stats: {},
      },
    ]

    const wrapper = await mountSuspended(LandingLeaderboards, {
      props: {
        leaderboards: mockLeaderBoardsWithoutStats,
      },
    })

    expect(wrapper.html()).not.toContain('runs')
  })
})
