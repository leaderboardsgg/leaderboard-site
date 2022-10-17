// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setup, $fetch } from '@nuxt/test-utils'
import { describe, test } from 'vitest'

import BaseModal from './BaseModal.vue'
import { fireEvent, stubbedRender } from 'root/testUtils'

describe('<BaseModal />', async () => {
  await setup({})

  test('should render without crashing', () => {
    const { unmount } = stubbedRender(BaseModal)

    unmount()
  })

  test('renders the correct <slot />', () => {
    const { getByText } = stubbedRender(BaseModal, {
      slots: { default: 'Modal content' },
    })

    expect(getByText('Modal content')).toBeTruthy()
  })

  describe('when the close event is emitted', () => {
    test('when the close button is clicked', async () => {
      const { emitted, getByTestId } = stubbedRender(BaseModal)

      await fireEvent.click(getByTestId('modal-close-button'))

      expect(emitted().close).toBeTruthy()
    })

    test('when the escape key is released', async () => {
      const { emitted, getByTestId } = stubbedRender(BaseModal)

      await fireEvent.type(getByTestId('modal-close-button'), '{esc}')

      expect(emitted().close).toBeTruthy()
    })
  })
})
