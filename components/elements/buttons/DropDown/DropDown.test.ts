import { enableAutoUnmount, mount } from '@vue/test-utils'
import { getByTestId } from 'root/testUtils'
import DropDown from './DropDown.vue'
import type { ComponentMountingOptions } from '@vue/test-utils'

enableAutoUnmount(afterEach)

function mountDropDown(options?: ComponentMountingOptions<typeof DropDown>) {
  return mount(DropDown, options)
}

describe('<DropDown />', () => {
  it('should render without crashing', () => {
    const wrapper = mountDropDown({
      props: { className: 'test' },
    })
    expect(wrapper.isVisible()).toBe(true)
    expect(getByTestId(wrapper, 'toggler').classes()).toContain('test')
  })
})
