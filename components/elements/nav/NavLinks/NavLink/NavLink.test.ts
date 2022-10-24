import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import NavLink from './NavLink.vue'

describe('<NavLink />', () => {
  const NavLinkWrapper = mount(NavLink, {
    attrs: { class: 'custom-link' },
    props: {
      to: '/games',
    },
    slots: { default: 'Games' },
  })

  test('should render without crashing', () => {
    expect(NavLinkWrapper.isVisible()).toBe(true)
  })
})
