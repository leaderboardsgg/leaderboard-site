import { mount } from '@vue/test-utils'

import BaseModal from './BaseModal.vue'

describe('<BaseModal />', () => {
  const BaseModalWrapper = mount(BaseModal, {
    slots: { default: 'Modal content' },
  })

  it('should render without crashing', () => {
    expect(BaseModalWrapper.isVisible()).toBe(true)
  })

  it('renders the correct <slot />', () => {
    expect(BaseModalWrapper.html()).toContain('Modal content')
  })

  describe('when the close event is emitted', () => {
    it('when the close button is clicked', async () => {
      await BaseModalWrapper.find('button').trigger('click')

      expect(BaseModalWrapper.emitted().close).toHaveLength(1)
    })

    it('when the escape key is released', async () => {
      await BaseModalWrapper.find('button').trigger('keydown.esc')

      expect(BaseModalWrapper.emitted().close).toHaveLength(2)
    })
  })
})
