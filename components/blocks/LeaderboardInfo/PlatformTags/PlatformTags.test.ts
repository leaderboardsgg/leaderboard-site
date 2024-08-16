import { mountSuspended } from '@nuxt/test-utils/runtime'
import PlatformTags from './PlatformTags.vue'

describe('<PlatformTags />', () => {
  const tags = ['XBox', 'PS4', 'Amiga DS']

  it('should render without crashing', async () => {
    const wrapper = await mountSuspended(PlatformTags, {
      props: {
        tags,
      },
    })

    expect(wrapper.isVisible()).toBe(true)

    wrapper
      .getComponent('div.platform-tags')
      .findAllComponents('div')
      .forEach((c, i) => {
        expect(c.text()).toBe(tags[i])
      })
  })
})
