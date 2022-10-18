// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setup, $fetch } from '@nuxt/test-utils'

import { describe, test } from 'vitest'
import { render } from 'root/testUtils'
import index from 'pages/index.vue'

describe('/index', async () => {
  await setup({})

  test('should render without crashing', () => {
    const { unmount } = render(index)
    unmount()
  })

  test('should render the placeholder text', () => {
    const { getByText } = render(index)
    expect(
      getByText('This is just a primary content placeholder.'),
    ).toBeInTheDocument()
  })
})
