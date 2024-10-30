import { mountSuspended } from '@nuxt/test-utils/runtime'
import Landing from './LandingAbout.vue'

describe('LandingAbout Component', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(Landing)

    expect(wrapper.isVisible()).toBe(true)

    const text = wrapper.getComponent('div#landing-about').text()
    expect(text).toContain('About Leaderboards.gg')
  })
})
