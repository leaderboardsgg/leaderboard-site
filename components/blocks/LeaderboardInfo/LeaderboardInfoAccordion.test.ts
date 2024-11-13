import { mountSuspended } from '@nuxt/test-utils/runtime'
import LeaderboardInfoAccordion from './LeaderboardInfoAccordion.vue'

const info = 'Some Special Info'

describe('LeaderboardInfoAccordion Component', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(LeaderboardInfoAccordion, {
      props: {
        info: info,
      },
    })

    expect(wrapper.isVisible()).toBe(true)

    // click the info button to open the info pane
    const button = wrapper.get('button#leaderboard-info-button')
    button.trigger('click')
    await wrapper.vm.$nextTick()

    const infoText = wrapper.get('p#leaderboard-info-text')

    expect(infoText.text()).toContain(info)
  })
})
