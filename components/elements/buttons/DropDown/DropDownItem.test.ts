import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import { getByTestId } from 'root/testUtils'
import DropDownItem from './DropDownItem.vue'
import type { ComponentMountingOptions } from '@vue/test-utils'

enableAutoUnmount(afterEach)

function mountDropDownItem(
  options?: ComponentMountingOptions<typeof DropDownItem>,
) {
  return shallowMount(DropDownItem, options)
}

describe('<DropDownItem />', () => {
  it('should render without crashing', () => {
    const wrapper = mountDropDownItem({
      props: { slots: 'test' },
    })
    expect(wrapper.isVisible()).toBe(true)
  })

  it("should trigger the click event when it's, well, clicked on", async () => {
    const wrapper = mountDropDownItem({})

    await getByTestId(wrapper, 'container').trigger('click')

    expect(wrapper.emitted().click).toBeTruthy()
  })
})
