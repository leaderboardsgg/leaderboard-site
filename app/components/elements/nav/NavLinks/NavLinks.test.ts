import { shallowMount } from '@vue/test-utils'

import NavLinks from './NavLinks.vue'

const props = {
  navLinks: [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ],
}

function getNavLinksWrapper() {
  return shallowMount(NavLinks, {
    props,
    route: '/',
  })
}

describe('<NavLinks />', () => {
  it('should render without crashing', async () => {
    const NavLinksWrapper = getNavLinksWrapper()
    expect(NavLinksWrapper.isVisible()).toBe(true)
  })

  it('should render the same amount of <NavLink /> components as there are items in the navLinks props', async () => {
    const NavLinksWrapper = getNavLinksWrapper()
    props.navLinks.forEach((navLink) => {
      expect(NavLinksWrapper.html()).toContain(navLink.name)
    })
  })
})
