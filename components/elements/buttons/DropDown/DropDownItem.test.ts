import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import { getByTestId } from 'root/testUtils'
import DropdownItem from './DropdownItem.vue'
import type { ComponentMountingOptions } from '@vue/test-utils'

enableAutoUnmount(afterEach)

function mountDropdownItem(
  options?: ComponentMountingOptions<typeof DropdownItem>,
) {
  return shallowMount(DropdownItem, options)
}

describe('<DropdownItem />', () => {
  it('should render without crashing', () => {
    const wrapper = mountDropdownItem({
      props: { slots: 'test' },
    })
    expect(wrapper.isVisible()).toBe(true)
  })

  it("should trigger the click event when it's, well, clicked on", async () => {
    const wrapper = mountDropdownItem({})

    await getByTestId(wrapper, 'container').trigger('click')

    expect(wrapper.emitted().click).toBeTruthy()
  })
})
