import { mount } from '@vue/test-utils'
import FollowButton from './FollowButton.vue'

describe('<FollowButton />', () => {
  it('should render without crashing', () => {
    const wrapper = mount(FollowButton, {
      props: {
        onClick: () => 69,
      },
    })

    expect(wrapper.isVisible()).toBe(true)
  })
})
