// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setup, $fetch } from '@nuxt/test-utils-edge'

import { describe, test as it } from 'vitest'
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
