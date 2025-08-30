import { mountSuspended } from '@nuxt/test-utils/runtime'
import UserBadges from './UserBadges.vue'

describe('<ProfileHeader />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(UserBadges)

    expect(wrapper.isVisible()).toBe(true)
  })
})
