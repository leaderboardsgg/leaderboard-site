import { mount, enableAutoUnmount } from '@vue/test-utils'

import NavLinks from './NavLinks.vue'

const props = {
  navLinks: [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ],
}

function getNavLinksWrapper() {
  return mount(NavLinks, {
    props,
  })
}

enableAutoUnmount(afterEach)

describe('<NavLinks />', () => {
  it('should render without crashing', () => {
    const NavLinksWrapper = getNavLinksWrapper()
    expect(NavLinksWrapper.isVisible()).toBe(true)
  })

  it('should render the same amount of <NavLink /> components as there are items in the navLinks props', () => {
    props.navLinks.forEach((navLink) => {
      const NavLinksWrapper = getNavLinksWrapper()
      expect(NavLinksWrapper.html()).toContain(navLink.name)
    })
  })
})
