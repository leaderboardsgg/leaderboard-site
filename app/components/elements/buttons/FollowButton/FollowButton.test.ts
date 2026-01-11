import { mountSuspended } from '@nuxt/test-utils/runtime'
import FollowButton from './FollowButton.vue'

describe('<FollowButton />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(FollowButton)

    expect(wrapper.isVisible()).toBe(true)
  })
})
