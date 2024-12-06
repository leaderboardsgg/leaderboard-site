import { mountSuspended } from '@nuxt/test-utils/runtime'
import LeaderboardInfo from './LeaderboardInfo.vue'
import type { LeaderboardViewModel } from '~/lib/api/data-contracts'

const game: LeaderboardViewModel = {
  id: 1,
  name: 'Getting Over It With Bennet Foddy',
  slug: 'slug-2',
  info: 'Something special',
  createdAt: '2024-11-02T22:11:08+0000',
  updatedAt: '2024-11-02T22:11:08+0000',
  deletedAt: null,
  categories: [],
}

describe('LeaderboardInfo Component', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(LeaderboardInfo, {
      props: {
        leaderboard: game,
      },
    })

    expect(wrapper.isVisible()).toBe(true)

    const header = wrapper.get('div#leaderboard-show-header h1')

    expect(header.text()).toContain(game.name)
  })
})
