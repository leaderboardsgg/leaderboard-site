import { mountSuspended } from '@nuxt/test-utils/runtime'
import Landing from './LandingLeaderboards.vue'

describe('LandingLeaderboards Component', () => {
  const leaderboards = [
    { id: 1, name: 'Getting Over It With Bennet Foddy' },
    { id: 2, name: 'Getting Over It With Bennet Foddy' },
    { id: 3, name: 'Getting Over It With Bennet Foddy' },
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
