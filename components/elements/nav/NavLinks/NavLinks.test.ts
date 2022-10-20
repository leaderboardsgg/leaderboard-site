import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import NavLinks from './NavLinks.vue'

describe('<NavLinks />', () => {
  const NavLinksWrapper = mount(NavLinks)

  // const defaultProps = {
  //   navLinks: [
  //     { name: 'Home', to: '/' },
  //     { name: 'About', to: '/about' },
  //     { name: 'Contact', to: '/contact' },
  //   ],
  // }

  test('should render without crashing', () => {
    // const { unmount } = stubbedRender(NavLinks, {
    //   props: defaultProps,
    // })

    expect(NavLinksWrapper.isVisible()).toBe(true)
  })

  // test('should render the same amount of <NavLink /> components as there are items in the navLinks props', () => {
  //   const { getByText } = stubbedRender(NavLinks, {
  //     props: defaultProps,
  //   })

  //   defaultProps.navLinks.forEach((navLink) => {
  //     expect(getByText(navLink.name)).toBeInTheDocument()
  //   })
  // })
})
