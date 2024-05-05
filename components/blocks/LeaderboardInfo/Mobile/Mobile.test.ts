import { enableAutoUnmount, mount } from '@vue/test-utils'
import { vi } from 'vitest'
import { getByTestId } from 'root/testUtils'
import Mobile from './Mobile.vue'

describe('<Mobile />', () => {
  function getMobileWrapper() {
    return mount(Mobile, {
      props: {
        leaderboard: {
          categories: [{ id: 1, name: 'Any%', slug: 'any' }],
          id: 1,
          name: 'Stuck in the Train Simulator 2',
          slug: 'stuck-in-the-train-sim-2',
        },
        todoPlatforms: ['XBox', 'PC'],
      },
    })
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  enableAutoUnmount(afterEach)

  it('should render without crashing', () => {
    const wrapper = getMobileWrapper()
    expect(wrapper.isVisible()).toBe(true)

    expect(getByTestId(wrapper, 'title').text()).toBe(
      'Stuck in the Train Simulator 2',
    )
    expect(getByTestId(wrapper, 'tag').text()).toBe('Any%')
  })
})
