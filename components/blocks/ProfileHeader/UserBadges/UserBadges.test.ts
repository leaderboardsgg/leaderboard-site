import { mount } from '@vue/test-utils'
import UserBadges from './UserBadges.vue'

describe('<ProfileHeader />', () => {
  it('should render without crashing', () => {
    const wrapper = mount(UserBadges)

    expect(wrapper.isVisible()).toBe(true)
  })
})
