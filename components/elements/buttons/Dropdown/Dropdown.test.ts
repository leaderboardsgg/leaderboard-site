import {
  enableAutoUnmount,
  mount,
  type ComponentMountingOptions,
} from '@vue/test-utils'
import { getByTestId } from 'root/testUtils'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

enableAutoUnmount(afterEach)

function mountDropdown(options?: ComponentMountingOptions<typeof Dropdown>) {
  return mount(Dropdown, options)
}

describe('<Dropdown />', () => {
  it('should render without crashing', () => {
    const wrapper = mountDropdown({
      props: { className: 'test' },
    })
    expect(wrapper.isVisible()).toBe(true)
    expect(getByTestId(wrapper, 'toggler').classes()).toContain('test')
  })

  describe('when the toggler is clicked', () => {
    it('should render the slot item, then hide it on a second click', async () => {
      const itemWrapper = mount(DropdownItem)

      const wrapper = mountDropdown({
        slots: { default: itemWrapper.html() },
      })

      await getByTestId(wrapper, 'toggler').trigger('click')
      expect(wrapper.html()).toContain(itemWrapper.html())

      await getByTestId(wrapper, 'toggler').trigger('click')
      expect(wrapper.html()).not.toContain(itemWrapper.html())
    })

    it('should apply the style to the dropdown arrow', async () => {
      const wrapper = mountDropdown()

      await getByTestId(wrapper, 'toggler').trigger('click')

      expect(getByTestId(wrapper, 'arrow').classes()).toContain('isOpen')
    })
  })
})
