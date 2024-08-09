import { describe, expect, it } from 'vitest'

import { mountSuspended } from '@nuxt/test-utils/runtime'
import NavLink from './NavLink.vue'

describe('<NavLink />', () => {
  it('should render without crashing', async () => {
    const NavLinkWrapper = await mountSuspended(NavLink, {
      attrs: { class: 'custom-link' },
      props: {
        to: '/games',
      },
      slots: { default: 'Games' },
    })

    expect(NavLinkWrapper.isVisible()).toBe(true)
  })
})
