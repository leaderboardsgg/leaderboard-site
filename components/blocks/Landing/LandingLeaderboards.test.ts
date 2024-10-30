import { mountSuspended } from '@nuxt/test-utils/runtime'
import Landing from './LandingLeaderboards.vue'

describe('LandingLeaderboards Component', () => {
  const leaderboards = [
    { name: 'Getting Over It With Bennet Foddy' },
    { name: 'Getting Over It With Bennet Foddy' },
    { name: 'Getting Over It With Bennet Foddy' },
  ]

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
