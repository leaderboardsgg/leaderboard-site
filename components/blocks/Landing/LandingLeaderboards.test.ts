import { mountSuspended } from '@nuxt/test-utils/runtime'
import Landing from './LandingLeaderboards.vue'
import { useGetLeaderboards } from '~/composables/api'

const mockSuccessGetLeaderboards = vi.fn(() => Promise.resolve({ ok: true }))
vi.mock('lib/api/Leaderboards', () => ({
  Leaderboards: function Leaderboards() {
    this.getLeaderboards = mockSuccessGetLeaderboards
  },
}))

const leaderboards = await useGetLeaderboards()

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
