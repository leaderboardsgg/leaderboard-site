import { mount } from '@vue/test-utils'
import DropDown from './DropDown.vue'

describe.skip('<DropDown />', () => {
  it('should render without crashing', () => {
    const wrapper = mount(DropDown)
    expect(wrapper.isVisible()).toBe(true)
  })
})
