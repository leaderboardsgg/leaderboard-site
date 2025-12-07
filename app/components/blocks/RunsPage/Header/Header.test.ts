import { mountSuspended } from '@nuxt/test-utils/runtime'
import type { LeaderboardViewModel } from '~~/lib/api/data-contracts'
import Header from './Header.vue'

const game: LeaderboardViewModel = {
  id: 1,
  name: 'Getting Over It With Bennet Foddy',
  slug: 'slug-2',
  info: 'Something special',
  createdAt: '2024-11-02T22:11:08+0000',
  updatedAt: '2024-11-02T22:11:08+0000',
  deletedAt: null,
  status: 'Published',
}

describe('Header Component', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(Header, {
      props: {
        leaderboard: game,
      },
    })

    expect(wrapper.isVisible()).toBe(true)

    const header = wrapper.get('h1')

    expect(header.text()).toContain(game.name)
  })
})
