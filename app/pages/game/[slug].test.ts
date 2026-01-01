import { mountSuspended } from '@nuxt/test-utils/runtime'
import gamePage from 'pages/game/[slug].vue'
import useGetCategoryBySlug from '~/composables/api/useGetCategoryBySlug/index'
import useGetLeaderboardBySlug from '~/composables/api/useGetLeaderboardBySlug/index'
import type {
  CategoryViewModel,
  LeaderboardViewModel,
} from '~~/lib/api/data-contracts'

const leaderboard: LeaderboardViewModel = {
  id: 1,
  name: 'Getting Over It With Bennet Foddy',
  slug: 'slug-2',
  info: '',
  createdAt: '2024-11-02T22:11:08+0000',
  updatedAt: '2024-11-02T22:11:08+0000',
  deletedAt: null,
  status: 'Published',
}

const category: CategoryViewModel = {
  id: 1,
  name: 'Getting Over It With Bennet Foddy',
  slug: 'slug-2',
  info: '',
  createdAt: '2024-11-02T22:11:08+0000',
  updatedAt: '2024-11-02T22:11:08+0000',
  deletedAt: null,
  leaderboardId: 1,
  sortDirection: 'Ascending',
  type: 'Time',
  status: 'Published',
}

vi.mock('composables/api/useGetLeaderboardBySlug')
vi.mock('composables/api/useGetCategoryBySlug')

afterEach(() => {
  vi.restoreAllMocks()
})

describe('/game/:slug', () => {
  it('should render without crashing with a valid leaderboard', async () => {
    vi.mocked(useGetLeaderboardBySlug).mockResolvedValue({
      error: null,
      loading: false,
      data: leaderboard,
      errors: null,
    })

    vi.mocked(useGetCategoryBySlug).mockResolvedValue({
      error: null,
      loading: false,
      data: category,
      errors: null,
    })
    const wrapper = await mountSuspended(gamePage, {
      route: '/game/validslug?category=slug-2',
    })

    expect(wrapper.text()).toContain(leaderboard.name)
    expect(wrapper.isVisible()).toBe(true)
  })

  it('should render 404 if leaderboard status is 404', async () => {
    vi.mocked(useGetLeaderboardBySlug).mockResolvedValue({
      error: { status: 404, title: 'Not Found' },
      loading: false,
      errors: null,
    })

    const wrapper = await mountSuspended(gamePage, {
      route: '/game/validslug?category=not-found',
    })

    expect(wrapper.text()).toContain('Game not found.')
  })
})
