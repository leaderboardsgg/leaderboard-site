import { mountSuspended } from '@nuxt/test-utils/runtime'
import Landing from './Landing.vue'
import LandingAbout from './LandingAbout.vue'
import LandingLeaderboards from './LandingLeaderboards.vue'

const mockSuccessGetLeaderboards = vi.fn(() => Promise.resolve({ ok: true }))
vi.mock('lib/api/Leaderboards', () => ({
  Leaderboards: function Leaderboards() {
    this.listLeaderboards = mockSuccessGetLeaderboards
  },
}))

describe('Landing Component', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(Landing)

    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.getComponent(LandingAbout).isVisible()).toBe(true)
    expect(wrapper.getComponent(LandingLeaderboards).isVisible()).toBe(true)
    expect(mockSuccessGetLeaderboards).toHaveBeenCalledOnce()
  })
})
