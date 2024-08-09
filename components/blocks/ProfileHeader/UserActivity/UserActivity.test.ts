import { describe, expect, it } from 'vitest'

import { mountSuspended } from '@nuxt/test-utils/runtime'
import UserActivity from './UserActivity.vue'

describe('<UserActivity />', () => {
  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(UserActivity, {
      props: {
        gameCount: 69,
        runCount: 420,
      },
    })

    expect(wrapper.isVisible()).toBe(true)
  })
})
