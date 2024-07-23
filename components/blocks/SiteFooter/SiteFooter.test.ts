import { mountSuspended } from '@nuxt/test-utils/runtime'
import SiteFooter from './SiteFooter.vue'

describe('<SiteFooter />', () => {
  it('should render without crashing', async () => {
    const SiteFooterWrapper = await mountSuspended(SiteFooter, {
      shallow: true,
    })
    expect(SiteFooterWrapper.exists()).toBe(true)
  })

  it('renders correctly with the copyright info', async () => {
    const SiteFooterWrapper = await mountSuspended(SiteFooter, {
      shallow: true,
    })
    expect(SiteFooterWrapper.html()).toContain(
      `Copyright ${new Date().getFullYear()}`,
    )
  })
})
