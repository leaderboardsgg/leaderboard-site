import { mountSuspended } from '@nuxt/test-utils/runtime'
import useGetLeaderboardBySlug from '~/composables/api/useGetLeaderboardBySlug/index'
import gamePage from 'pages/game/[slug].vue'
import { useError } from '#imports'
import type { LeaderboardViewModel } from '~/lib/api/data-contracts'

const leaderboard: LeaderboardViewModel = {
  id: 1,
  name: 'Getting Over It With Bennet Foddy',
  slug: 'slug-2',
  info: '',
  createdAt: '2024-11-02T22:11:08+0000',
  updatedAt: '2024-11-02T22:11:08+0000',
  deletedAt: null,
  categories: [],
}

vi.mock('composables/api/useGetLeaderboardBySlug')

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
    const wrapper = await mountSuspended(gamePage, {
      route: '/game/validslug',
    })

    expect(wrapper.text()).toContain(leaderboard.name)
    expect(wrapper.isVisible()).toBe(true)
  })

  it('should render 404 if leaderboard status is 404', async () => {
    vi.mocked(useGetLeaderboardBySlug).mockResolvedValue({
      error: { status: 404 },
      loading: false,
      data: leaderboard,
      errors: null,
    })

    const wrapper = await mountSuspended(gamePage, {
      route: '/game/invalidslug',
    })

    const error = useError()

    expect(error?.value?.statusCode).toBe(404)
    expect(wrapper.text()).not.toContain(leaderboard.name)
  })
})
