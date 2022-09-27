// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setup, fetch, $fetch } from '@nuxt/test-utils-edge'
import { describe, test as it } from 'vitest'

import NavLinks from './NavLinks.vue'
import { stubbedRender } from '@/testUtils'

describe('<NavLinks />', async () => {
  await setup({})

  const defaultProps = {
    navLinks: [
      { name: 'Home', to: '/' },
      { name: 'About', to: '/about' },
      { name: 'Contact', to: '/contact' },
    ],
  }

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(NavLinks, {
      props: defaultProps,
    })

    unmount()
  })

  it('should render the same amount of <NavLink /> components as there are items in the navLinks props', () => {
    const { getByText } = stubbedRender(NavLinks, {
      props: defaultProps,
    })

    defaultProps.navLinks.forEach((navLink) => {
      expect(getByText(navLink.name)).toBeInTheDocument()
    })
  })
})
