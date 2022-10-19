// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setup, $fetch } from '@nuxt/test-utils'
import { describe, test } from 'vitest'

import { stubbedRender } from 'root/testUtils'
import NavLink from './NavLink.vue'

describe('<NavLink />', async () => {
  await setup({})

  const defaultAttrs = { class: 'custom-link' }
  const defaultProps = { to: '/games' }

  test('should render without crashing', () => {
    const { unmount } = stubbedRender(NavLink, {
      attrs: defaultAttrs,
      props: defaultProps,
      slots: { default: 'Games' },
    })

    unmount()
  })
})
