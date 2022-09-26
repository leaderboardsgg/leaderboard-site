import { describe, test as it } from 'vitest'
import { setup } from '@nuxt/test-utils-edge'
import SiteFooter from './SiteFooter.vue'
import { stubbedRender } from '@/testUtils'

describe('<SiteFooter />', async () => {
  await setup({})

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(SiteFooter)

    unmount()
  })

  it('renders correctly with the copyright info', () => {
    const { getByText } = stubbedRender(SiteFooter)
    const currentYear = new Date().getFullYear()

    expect(getByText(`Copyright ${currentYear}`)).toBeInTheDocument()
  })
})
