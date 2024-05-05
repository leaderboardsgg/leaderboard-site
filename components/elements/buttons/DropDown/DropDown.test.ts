import { enableAutoUnmount, mount } from '@vue/test-utils'
import { getByTestId } from 'root/testUtils'
import DropDown from './DropDown.vue'
import DropDownItem from './DropDownItem.vue'
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

  describe('when the toggler is clicked', () => {
    it('should render the slot item, then hide it on a second click', async () => {
      const itemWrapper = mount(DropDownItem)

      const wrapper = mountDropDown({
        slots: { default: itemWrapper.html() },
      })

      await getByTestId(wrapper, 'toggler').trigger('click')
      expect(wrapper.html()).toContain(itemWrapper.html())

      await getByTestId(wrapper, 'toggler').trigger('click')
      expect(wrapper.html()).not.toContain(itemWrapper.html())
    })

    it('should apply the style to the dropdown arrow', async () => {
      const wrapper = mountDropDown()

      await getByTestId(wrapper, 'toggler').trigger('click')

      expect(getByTestId(wrapper, 'arrow').classes()).toContain('selected')
    })
  })
})
