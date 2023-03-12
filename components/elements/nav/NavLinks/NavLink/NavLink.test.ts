import { mount, enableAutoUnmount } from '@vue/test-utils'

import NavLink from './NavLink.vue'

enableAutoUnmount(afterEach)

describe('<NavLink />', () => {
  it('should render without crashing', () => {
    const NavLinkWrapper = mount(NavLink, {
      attrs: { class: 'custom-link' },
      props: {
        to: '/games',
      },
      slots: { default: 'Games' },
    })

    expect(NavLinkWrapper.isVisible()).toBe(true)
  })
})
