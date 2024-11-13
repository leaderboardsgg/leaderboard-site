import { mountSuspended } from '@nuxt/test-utils/runtime'
import Landing from './LandingLeaderboards.vue'
import type { LeaderboardViewModel } from '~/lib/api/data-contracts'

const games: LeaderboardViewModel[] = [
  {
    id: 1,
    name: 'Getting Over It With Bennet Foddy',
    slug: 'slug-2',
    info: '',
    createdAt: '2024-11-02T22:11:08+0000',
    updatedAt: '2024-11-02T22:11:08+0000',
    deletedAt: null,
    categories: [],
  },
  {
    id: 2,
    name: 'Getting Over It With Bennet Foddy',
    slug: 'slug-2',
    info: '',
    createdAt: '2024-11-02T22:11:08+0000',
    updatedAt: '2024-11-02T22:11:08+0000',
    deletedAt: null,
    categories: [],
  },
  {
    id: 3,
    name: 'Getting Over It With Bennet Foddy',
    slug: 'slug-3',
    info: '',
    createdAt: '2024-11-02T22:11:08+0000',
    updatedAt: '2024-11-02T22:11:08+0000',
    deletedAt: null,
    categories: [],
  },
]

describe('LandingLeaderboards Component', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(Landing, {
      props: {
        leaderboards: games,
      },
    })

    expect(wrapper.isVisible()).toBe(true)

    wrapper
      .getComponent('div#landing-leaderboards')
      .findAllComponents('div')
      .forEach((c, i) => {
        expect(c.text()).toBe(games[i])
      })
  })
})
