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

  it('should render without crashing', () => {
    expect(IndexWrapper.isVisible()).toBe(true)
  })

  it('should render the placeholder text', () => {
    expect(
      IndexWrapper.html().includes(
        'This is just a primary content placeholder.',
      ),
    ).toBe(true)
  })
})
