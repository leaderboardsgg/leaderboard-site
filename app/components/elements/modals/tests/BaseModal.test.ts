import { mount, enableAutoUnmount } from '@vue/test-utils'

import BaseModal from '../BaseModal.vue'

function getBaseModalWrapper() {
  return mount(BaseModal, {
    slots: { default: 'Modal content' },
  })
}

enableAutoUnmount(afterEach)

describe('<BaseModal />', () => {
  it('should render without crashing', () => {
    const BaseModalWrapper = getBaseModalWrapper()
    expect(BaseModalWrapper.isVisible()).toBe(true)
  })

  it('renders the correct <slot />', () => {
    const BaseModalWrapper = getBaseModalWrapper()
    expect(BaseModalWrapper.html()).toContain('Modal content')
  })
})
