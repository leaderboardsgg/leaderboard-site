// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setup, fetch, $fetch } from '@nuxt/test-utils-edge'

import { describe, test as it } from 'vitest'
import NavLink from './NavLink.vue'
import { stubbedRender } from '@/testUtils'

describe('<NavLink />', async () => {
  await setup({})

  const defaultAttrs = { class: 'custom-link' }
  const defaultProps = { to: '/games' }

  it('should render without crashing', () => {
    const { unmount } = stubbedRender(NavLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Games' },
    })

    unmount()
  })
})
