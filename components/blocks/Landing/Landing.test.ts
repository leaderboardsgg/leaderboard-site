import { mountSuspended } from '@nuxt/test-utils/runtime'
import type { LeaderboardViewModel } from '~/lib/api/data-contracts'
import Landing from './Landing.vue'

const games: LeaderboardViewModel[] = [
  {
    id: 1,
    name: 'Getting Over It With Bennet Foddy',
    slug: 'slug-2',
    info: null,
    createdAt: '2024-11-02T22:11:08+0000',
    updatedAt: '2024-11-02T22:11:08+0000',
    deletedAt: null,
    categories: [],
  },
  {
    id: 2,
    name: 'Getting Over It With Bennet Foddy',
    slug: 'slug-2',
    info: null,
    createdAt: '2024-11-02T22:11:08+0000',
    updatedAt: '2024-11-02T22:11:08+0000',
    deletedAt: null,
    categories: [],
  },
  {
    id: 3,
    name: 'Getting Over It With Bennet Foddy',
    slug: 'slug-3',
    info: null,
    createdAt: '2024-11-02T22:11:08+0000',
    updatedAt: '2024-11-02T22:11:08+0000',
    deletedAt: null,
    categories: [],
  },
]

describe('Landing Component', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(Landing)

    expect(wrapper.isVisible()).toBe(true)
  })

  it('should render games without crashing', async () => {
    vi.mock('lib/api/Leaderboards', () => ({
      Leaderboards: function Leaderboards() {
        this.getLeaderboards = vi.fn(() => {
          return {
            loading: false,
            data: games,
          }
        })
      },
    }))
    const wrapper = await mountSuspended(Landing)

    wrapper
      .getComponent('div#landing-leaderboards')
      .findAllComponents('div')
      .forEach((c, i) => {
        expect(c.text()).toBe(games[i])
      })
  })

  it('should render about without crashing', async () => {
    const wrapper = await mountSuspended(Landing)

    wrapper
      .getComponent('div#landing-about')
      .findAllComponents('h3')
      .forEach((c, i) => {
        expect(c.text()).toContain('Explanation')
      })
  })
})
