import { describe, test as it } from 'vitest'
import { setup } from '@nuxt/test-utils-edge'
import BaseModal from './BaseModal.vue'
import { fireEvent, stubbedRender } from '@/testUtils'

describe('<BaseModal />', async () => {
  await setup({})

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(BaseModal)

    unmount()
  })

  it('renders the correct <slot />', () => {
    const { getByText } = stubbedRender(BaseModal, {
      slots: { default: 'Modal content' },
    })

    expect(getByText('Modal content')).toBeInTheDocument()
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
