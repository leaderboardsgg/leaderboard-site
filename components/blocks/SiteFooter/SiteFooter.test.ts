import { mount, enableAutoUnmount } from '@vue/test-utils'

import SiteFooter from './SiteFooter.vue'

function getSiteFooterWrapper() {
  return mount(SiteFooter)
}

enableAutoUnmount(afterEach)

describe('<SiteFooter />', () => {
  it('should render without crashing', () => {
    const SiteFooterWrapper = getSiteFooterWrapper()
    expect(SiteFooterWrapper.isVisible()).toBe(true)
  })

  it('renders correctly with the copyright info', () => {
    const SiteFooterWrapper = getSiteFooterWrapper()
    expect(SiteFooterWrapper.html()).toContain(
      `Copyright ${new Date().getFullYear()}`,
    )
  })
})
