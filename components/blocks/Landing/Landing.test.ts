import { mountSuspended } from '@nuxt/test-utils/runtime'
import Landing from './Landing.vue'

describe('Landing Component', () => {
  const games = [
    { name: 'Getting Over It With Bennet Foddy' },
    { name: 'Getting Over It With Bennet Foddy' },
    { name: 'Getting Over It With Bennet Foddy' },
  ]

  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(Landing, {
      props: {
        games,
      },
    })

    expect(wrapper.isVisible()).toBe(true)
  })
})
