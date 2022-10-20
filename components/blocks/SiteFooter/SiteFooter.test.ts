import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import SiteFooter from './SiteFooter.vue'

describe('<SiteFooter />', () => {
  const SiteFooterWrapper = mount(SiteFooter)

  test('should render without crashing', () => {
    expect(SiteFooterWrapper.isVisible()).toBe(true)
  })

  // test('renders correctly with the copyright info', () => {
  //   const { getByText } = stubbedRender(SiteFooter)
  //   const currentYear = new Date().getFullYear()

  //   expect(getByText(`Copyright ${currentYear}`)).toBeInTheDocument()
  // })
})
