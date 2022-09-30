// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setup, $fetch } from '@nuxt/test-utils-edge'

import { describe, test as it } from 'vitest'
import HideShowPassword from './HideShowPassword.vue'
import { fireEvent, stubbedRender } from '@/testUtils'

describe('<HideShowPassword />', async () => {
  await setup({})

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(HideShowPassword)

    unmount()
  })

  describe('when clicking the button', () => {
    it('should toggle the state', async () => {
      const { getByTestId } = stubbedRender(HideShowPassword)
      const button = getByTestId('hide-show-password-button')

      expect(getByTestId('hidden-eye-icon')).toBeVisible()
      expect(getByTestId('visible-eye-icon')).not.toBeVisible()

      await fireEvent.click(<HTMLElement>button)

      expect(getByTestId('hidden-eye-icon')).not.toBeVisible()
      expect(getByTestId('visible-eye-icon')).toBeVisible()
    })
  })

  describe('when the button is focus and the enter key up event is triggered', () => {
    it('should toggle the state', async () => {
      const { getByTestId } = stubbedRender(HideShowPassword)
      const button = getByTestId('hide-show-password-button')

      expect(getByTestId('hidden-eye-icon')).toBeVisible()
      expect(getByTestId('visible-eye-icon')).not.toBeVisible()

      await fireEvent.type(<HTMLElement>button, '{enter}')

      expect(getByTestId('hidden-eye-icon')).not.toBeVisible()
      expect(getByTestId('visible-eye-icon')).toBeVisible()
    })
  })
})
