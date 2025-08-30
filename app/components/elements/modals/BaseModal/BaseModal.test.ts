import { mount, enableAutoUnmount } from '@vue/test-utils'

import BaseModal from './BaseModal.vue'

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

  describe('when the close event is emitted', () => {
    it('when the close button is clicked', async () => {
      const BaseModalWrapper = getBaseModalWrapper()
      await BaseModalWrapper.find('button').trigger('click')

      expect(BaseModalWrapper.emitted().close).toHaveLength(1)
    })

    it('when the escape key is released', async () => {
      const BaseModalWrapper = getBaseModalWrapper()
      await BaseModalWrapper.find('button').trigger('keydown.esc')

      expect(BaseModalWrapper.emitted().close).toHaveLength(1)
    })
  })
})
