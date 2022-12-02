import { mount } from '@vue/test-utils'

import SiteFooter from './SiteFooter.vue'

describe('<SiteFooter />', () => {
  const SiteFooterWrapper = mount(SiteFooter)

  it('should render without crashing', () => {
    expect(SiteFooterWrapper.isVisible()).toBe(true)
  })

  it('renders correctly with the copyright info', () => {
    expect(SiteFooterWrapper.html()).toContain(
      `Copyright ${new Date().getFullYear()}`,
    )
  })
})
