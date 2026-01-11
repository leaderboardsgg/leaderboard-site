import { mountSuspended } from '@nuxt/test-utils/runtime'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
import { h } from 'vue'

describe('<Dropdown />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(Dropdown, {
      props: { className: 'test' },
    })

    expect(wrapper.isVisible()).toBe(true)
    expect(wrapper.getByTestId('toggler').classes()).toContain('test')
  })

  describe('when the toggler is clicked', () => {
    it('should render the slot item, then hide it on a second click', async () => {
      const wrapper = await mountSuspended(Dropdown, {
        slots: {
          default: () => h(DropdownItem),
        },
      })

      await wrapper.getByTestId('toggler').trigger('click')
      const itemWrapper = wrapper.findAllComponents(DropdownItem)[0]

      expect(wrapper.html()).toContain(itemWrapper?.html())

      await wrapper.getByTestId('toggler').trigger('click')
      expect(wrapper.html()).not.toContain(itemWrapper?.html())
    })

    it('should apply the style to the dropdown arrow', async () => {
      const wrapper = await mountSuspended(Dropdown)

      await wrapper.getByTestId('toggler').trigger('click')

      expect(wrapper.getByTestId('arrow').classes()).toContain('isOpen')
    })
  })
})
