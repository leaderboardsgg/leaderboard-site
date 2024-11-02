import { mountSuspended } from '@nuxt/test-utils/runtime'
import type { LeaderboardViewModel } from '~/lib/api/data-contracts'
import Landing from './Landing.vue'

describe('Landing Component', () => {
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

  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(Landing, {
      props: {
        leaderboards: games,
      },
    })

    expect(wrapper.isVisible()).toBe(true)
  })
})
