import { enableAutoUnmount, mount } from '@vue/test-utils'
import { getByTestId } from 'root/testUtils'
import LeaderboardDetails from './LeaderboardDetails.vue'

describe.skip('<LeaderboardDetails />', () => {
  function getLeaderboardDetailsWrapper() {
    return mount(LeaderboardDetails, {
      props: {
        leaderboardDetail: {
          categories: [],
          id: 1,
          name: 'Stuck in the Train Simulator 2',
          slug: 'stuck-in-the-train-sim-2',
          socials: [
            {
              icon: 'disc',
              name: 'discord',
              url: 'https://discord.gg/leaderboards.gg',
            },
            {
              icon: 'youtube',
              name: 'Socials',
              url: 'https://youtube.com',
            },
            {
              icon: 'twit',
              name: 'twitter',
              url: 'https://twitter.com/bestofdyingtwit',
            },
          ],
        },
      },
    })
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  enableAutoUnmount(afterEach)

  it('should render without crashing', () => {
    const wrapper = getLeaderboardDetailsWrapper()
    expect(wrapper.isVisible()).toBe(true)
  })

  it('should trigger follow button', async () => {
    const wrapper = getLeaderboardDetailsWrapper()
    await getByTestId(wrapper, 'middle__follow').trigger('click')
    expect(wrapper.emitted().follow?.[0]).toEqual([1])
  })

  it('should trigger', () => {
    //
  })
})
