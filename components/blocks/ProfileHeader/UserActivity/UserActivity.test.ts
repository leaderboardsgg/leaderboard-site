import { mount } from '@vue/test-utils'
import UserActivity from './UserActivity.vue'

describe('<UserActivity />', () => {
  it('should render without crashing', () => {
    const wrapper = mount(UserActivity, {
      props: {
        gameCount: 69,
        runCount: 420,
      },
    })

    expect(wrapper.isVisible()).toBe(true)
  })
})
