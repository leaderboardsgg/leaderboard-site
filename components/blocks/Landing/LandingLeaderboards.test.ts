import { mountSuspended } from '@nuxt/test-utils/runtime'
import Landing from './LandingLeaderboards.vue'

const leaderboards = [
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
]

describe('LandingLeaderboards Component', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(Landing, {
      props: {
        leaderboards,
      },
    })

    expect(wrapper.isVisible()).toBe(true)

    wrapper
      .getComponent('div#landing-leaderboards')
      .findAllComponents('div')
      .forEach((c, i) => {
        expect(c.text()).toBe(leaderboards[i])
      })
  })
})
