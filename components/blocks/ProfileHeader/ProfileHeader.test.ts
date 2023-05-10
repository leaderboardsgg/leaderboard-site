import { mount } from '@vue/test-utils'
import ProfileHeader from './ProfileHeader.vue'

describe('<ProfileHeader />', () => {
  it('should render without crashing', () => {
    const wrapper = mount(ProfileHeader, {
      props: {
        badges: [],
        bio: 'This is a bio!',
        gameCount: 42,
        location: 'New York City',
        runCount: 13,
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
        username: 'Buffet',
      },
    })

    expect(wrapper.isVisible()).toBe(true)
  })
})
