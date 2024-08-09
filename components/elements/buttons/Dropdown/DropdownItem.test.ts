import { describe, expect, it } from 'vitest'

import { mountSuspended } from '@nuxt/test-utils/runtime'
import { getByTestId } from 'root/testUtils'
import DropdownItem from './DropdownItem.vue'

describe('<DropdownItem />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(DropdownItem, {
      props: { slots: 'test' },
    })
    expect(wrapper.isVisible()).toBe(true)
  })

  it("should trigger the click event when it's, well, clicked on", async () => {
    const wrapper = await mountSuspended(DropdownItem)

    await getByTestId(wrapper, 'container').trigger('click')

    expect(wrapper.emitted().click).toBeTruthy()
  })
})
