import { useGetLeaderboardDetail } from '.'

const mockSuccessLeaderboardsDetail = vi.fn(() => Promise.resolve({ ok: true }))

describe('useGetLeaderboardDetail', () => {
  describe('when everything is successful', () => {
    const slug = 'pieces'

    it('creates a GET request to fetch the leaderboard details', async () => {
      vi.mock('lib/api/Leaderboards', () => ({
        Leaderboards: function Leaderboards() {
          this.leaderboardsDetail2 = mockSuccessLeaderboardsDetail
        },
      }))

      await useGetLeaderboardDetail(slug)

      expect(mockSuccessLeaderboardsDetail).toBeCalledTimes(1)
      expect(mockSuccessLeaderboardsDetail).toBeCalledWith(slug)
    })
  })
})
