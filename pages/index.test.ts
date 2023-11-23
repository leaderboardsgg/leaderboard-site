import { mount, enableAutoUnmount } from '@vue/test-utils'

import index from 'pages/index.vue'

function getIndexWrapper() {
  return mount(index)
}

enableAutoUnmount(afterEach)

describe('/index', () => {
  it('should render without crashing', () => {
    const IndexWrapper = getIndexWrapper()
    expect(IndexWrapper.isVisible()).toBe(true)
  })

  it('should render the placeholder text', () => {
    const IndexWrapper = getIndexWrapper()
    expect(
      IndexWrapper.html().includes(
        'This is just a primary content placeholder.',
      ),
    ).toBe(true)
  })
})
