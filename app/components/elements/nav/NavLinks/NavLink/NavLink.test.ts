import { shallowMount } from '@vue/test-utils'
import NavLink from './NavLink.vue'

describe('<NavLink />', () => {
  it('should render without crashing', () => {
    const NavLinkWrapper = shallowMount(NavLink, {
      props: {
        to: '/games',
        name: 'Games',
      },
      slots: {
        default: () => 'Games',
      },
    })

    expect(NavLinkWrapper.isVisible()).toBe(true)
  })
})
