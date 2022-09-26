import { describe, test as it } from 'vitest'
import { setup } from '@nuxt/test-utils-edge'
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
