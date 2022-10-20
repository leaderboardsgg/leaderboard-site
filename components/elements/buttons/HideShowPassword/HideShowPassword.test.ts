import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import HideShowPassword from './HideShowPassword.vue'

describe('<HideShowPassword />', () => {
  const HideShowPasswordWrapper = mount(HideShowPassword)

  test('should render without crashing', () => {
    expect(HideShowPasswordWrapper.isVisible()).toBe(true)
  })

  // describe('when clicking the button', () => {
  //   test('should toggle the state', async () => {
  //     const { getByTestId } = stubbedRender(HideShowPassword)
  //     const button = getByTestId('hide-show-password-button')

  //     expect(getByTestId('hidden-eye-icon')).toBeVisible()
  //     expect(getByTestId('visible-eye-icon')).not.toBeVisible()

  //     await fireEvent.click(<HTMLElement>button)

  //     expect(getByTestId('hidden-eye-icon')).not.toBeVisible()
  //     expect(getByTestId('visible-eye-icon')).toBeVisible()
  //   })
  // })

  // describe('when the button is focus and the enter key up event is triggered', () => {
  //   test('should toggle the state', async () => {
  //     const { getByTestId } = stubbedRender(HideShowPassword)
  //     const button = getByTestId('hide-show-password-button')

  //     expect(getByTestId('hidden-eye-icon')).toBeVisible()
  //     expect(getByTestId('visible-eye-icon')).not.toBeVisible()

  //     await fireEvent.type(<HTMLElement>button, '{enter}')

  //     expect(getByTestId('hidden-eye-icon')).not.toBeVisible()
  //     expect(getByTestId('visible-eye-icon')).toBeVisible()
  //   })
  // })
})
