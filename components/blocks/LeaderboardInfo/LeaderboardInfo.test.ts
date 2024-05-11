import { enableAutoUnmount, mount } from '@vue/test-utils'
import { vi } from 'vitest'
import { getByTestId } from 'root/testUtils'
import LeaderboardInfo from './LeaderboardInfo.vue'

describe('<LeaderboardInfo />', () => {
  function getLeaderboardInfoWrapper() {
    return mount(LeaderboardInfo, {
      props: {
        leaderboard: {
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
    vi.unstubAllGlobals()
  })

  enableAutoUnmount(afterEach)

  it('should render without crashing', () => {
    const wrapper = getLeaderboardInfoWrapper()
    expect(wrapper.isVisible()).toBe(true)
  })

  it('should render <Desktop /> if device width is large', () => {
    vi.stubGlobal('innerWidth', 1980)
    const wrapper = getLeaderboardInfoWrapper()
    expect(wrapper.html()).toContain('Guides')
  })

  it('should render <Mobile /> if device width is small', () => {
    vi.stubGlobal('innerWidth', 600)
    const wrapper = getLeaderboardInfoWrapper()
    expect(wrapper.html()).toContain('Submit Run')
  })

  // TODO: The follow event doesn't trigger in the test, somehow
  it.skip('should emit event when the Follow Button is triggered', async () => {
    const wrapper = getLeaderboardInfoWrapper()
    await getByTestId(wrapper, 'child').trigger('follow')
    expect(wrapper.emitted().follow).toBeTruthy()
  })
})
