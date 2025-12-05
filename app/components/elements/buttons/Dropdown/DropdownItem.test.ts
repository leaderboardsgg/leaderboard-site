import { mountSuspended } from '@nuxt/test-utils/runtime'
import DropdownItem from './DropdownItem.vue'

describe('<DropdownItem />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(DropdownItem, {
      slots: { default: () => 'test' },
    })
    expect(wrapper.isVisible()).toBe(true)
  })

  it("should trigger the click event when it's, well, clicked on", async () => {
    const wrapper = await mountSuspended(DropdownItem)

    await wrapper.getByTestId('container').trigger('click')

    expect(wrapper.emitted().click).toBeTruthy()
  })
})
