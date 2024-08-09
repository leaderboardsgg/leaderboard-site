import { describe, expect, it } from 'vitest'

import { mountSuspended } from '@nuxt/test-utils/runtime'
import { getByTestId } from 'root/testUtils'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

describe('<Dropdown />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(Dropdown, {
      props: { className: 'test' },
    })
    expect(wrapper.vm).toBeTruthy()
    expect(getByTestId(wrapper, 'toggler').classes()).toContain('test')
  })

  describe('when the toggler is clicked', () => {
    it('should render the slot item, then hide it on a second click', async () => {
      const wrapper = await mountSuspended(Dropdown, {
        slots: {
          default: DropdownItem,
        },
      })

      await getByTestId(wrapper, 'toggler').trigger('click')

      const itemWrapper = wrapper.findAllComponents({
        name: 'DropdownItem',
      })[0]

      expect(wrapper.html()).toContain(itemWrapper?.html())

      await getByTestId(wrapper, 'toggler').trigger('click')
      expect(wrapper.html()).not.toContain(itemWrapper?.html())
    })

    it('should apply the style to the dropdown arrow', async () => {
      const wrapper = await mountSuspended(Dropdown)

      await getByTestId(wrapper, 'toggler').trigger('click')

      expect(getByTestId(wrapper, 'arrow').classes()).toContain('isOpen')
    })
  })
})
