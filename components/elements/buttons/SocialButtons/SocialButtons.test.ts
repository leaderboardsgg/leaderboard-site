import { mount } from '@vue/test-utils'
import SocialButtons from './SocialButtons.vue'

describe('<SocialButtons />', () => {
  it('should render without crashing', () => {
    const wrapper = mount(SocialButtons, {
      props: {
        socials: [
          {
            icon: 'disc',
            name: 'discord',
            url: 'https://discord.gg/leaderboards.gg',
          },
          {
            icon: 'twit',
            name: 'twitter',
            url: 'https://twitter.com/bestofdyingtwit',
          },
        ],
      },
    })

    expect(wrapper.isVisible()).toBe(true)
  })
})
