import { mount } from '@vue/test-utils'

import NavLinks from './NavLinks.vue'

describe('<NavLinks />', () => {
  const props = {
    navLinks: [
      { name: 'Home', to: '/' },
      { name: 'About', to: '/about' },
      { name: 'Contact', to: '/contact' },
    ],
  }

  const NavLinksWrapper = mount(NavLinks, {
    props,
  })

  it('should render without crashing', () => {
    expect(NavLinksWrapper.isVisible()).toBe(true)
  })

  it('should render the same amount of <NavLink /> components as there are items in the navLinks props', () => {
    props.navLinks.forEach((navLink) => {
      expect(NavLinksWrapper.html()).toContain(navLink.name)
    })
  })
})
