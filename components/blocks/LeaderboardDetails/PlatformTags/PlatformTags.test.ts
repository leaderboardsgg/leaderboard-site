import { mount } from '@vue/test-utils'
import PlatformTags from './PlatformTags.vue'

describe('<PlatformTags />', () => {
  it('should render without crashing', () => {
    const wrapper = mount(PlatformTags, {
      props: {
        tags: ['XBox', 'PS4', 'Amiga DS'],
      },
    })

    expect(wrapper.isVisible()).toBe(true)
  })
})
