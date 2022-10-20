import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import index from 'pages/index.vue'

describe('/index', () => {
  const IndexWrapper = mount(index, {
    global: {
      mocks: {
        $t: (msg: any) => msg,
      },
    },
  })

  test('should render without crashing', () => {
    expect(IndexWrapper.isVisible()).toBe(true)
  })

  test('should render the placeholder text', () => {
    expect(
      IndexWrapper.html().includes(
        'This is just a primary content placeholder.',
      ),
    ).toBe(true)
  })
})
