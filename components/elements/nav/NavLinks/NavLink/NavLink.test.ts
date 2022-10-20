import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import NavLink from './NavLink.vue'

describe('<NavLink />', () => {
  const NavLinkWrapper = mount(NavLink)

  // const defaultAttrs = { class: 'custom-link' }
  // const defaultProps = { to: '/games' }

  test('should render without crashing', () => {
    // const { unmount } = stubbedRender(NavLink, {
    //   attrs: defaultAttrs,
    //   props: defaultProps,
    //   slots: { default: 'Games' },
    // })

    expect(NavLinkWrapper.isVisible()).toBe(true)
  })
})
