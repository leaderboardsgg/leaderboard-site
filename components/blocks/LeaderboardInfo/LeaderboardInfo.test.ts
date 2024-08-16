import { mountSuspended } from '@nuxt/test-utils/runtime'
import { getByTestId } from 'root/testUtils'
import LeaderboardInfo from './LeaderboardInfo.vue'

describe('<LeaderboardInfo />', () => {
  async function getLeaderboardInfoWrapper() {
    return await mountSuspended(LeaderboardInfo, {
      props: {
        leaderboard: {
          categories: [],
          id: 1,
          name: 'Stuck in the Train Simulator 2',
          slug: 'stuck-in-the-train-sim-2',
        },
      },
    })
  }

  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  it('should render without crashing', async () => {
    const wrapper = await getLeaderboardInfoWrapper()
    expect(wrapper.isVisible()).toBe(true)
  })

  it('should render <Desktop /> if device width is large', async () => {
    vi.stubGlobal('innerWidth', 1980)
    const wrapper = await getLeaderboardInfoWrapper()
    expect(wrapper.html()).toContain('Guides')
  })

  it('should render <Mobile /> if device width is small', async () => {
    vi.stubGlobal('innerWidth', 600)
    const wrapper = await getLeaderboardInfoWrapper()
    expect(wrapper.html()).toContain('Submit Run')
  })

  // TODO: The follow event doesn't trigger in the test, somehow
  it.skip('should emit event when the Follow Button is triggered', async () => {
    const wrapper = await getLeaderboardInfoWrapper()
    await getByTestId(wrapper, 'child').trigger('follow')
    expect(wrapper.emitted().follow).toBeTruthy()
  })
})
