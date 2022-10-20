import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import BaseModal from './BaseModal.vue'

describe('<BaseModal />', () => {
  const BaseModalWrapper = mount(BaseModal)

  test('should render without crashing', () => {
    expect(BaseModalWrapper.isVisible()).toBe(true)
  })

  // test('renders the correct <slot />', () => {
  //   const { getByText } = stubbedRender(BaseModal, {
  //     slots: { default: 'Modal content' },
  //   })

  //   expect(getByText('Modal content')).toBeTruthy()
  // })

  // describe('when the close event is emitted', () => {
  //   test('when the close button is clicked', async () => {
  //     const { emitted, getByTestId } = stubbedRender(BaseModal)

  //     await fireEvent.click(getByTestId('modal-close-button'))

  //     expect(emitted().close).toBeTruthy()
  //   })

  //   test('when the escape key is released', async () => {
  //     const { emitted, getByTestId } = stubbedRender(BaseModal)

  //     await fireEvent.type(getByTestId('modal-close-button'), '{esc}')

  //     expect(emitted().close).toBeTruthy()
  //   })
  // })
})
