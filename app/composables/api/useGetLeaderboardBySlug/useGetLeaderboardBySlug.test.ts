import useGetLeaderboardBySlug from '.'

const mockSuccessGetLeaderboardBySlug = vi.fn(() =>
  Promise.resolve({ ok: true }),
)

describe('useGetLeaderboardBySlug', () => {
  describe('when everything is successful', () => {
    const slug = 'pieces'

    it('creates a GET request to fetch the leaderboard details', async () => {
      vi.mock('lib/api/Leaderboards', () => ({
        Leaderboards: function Leaderboards() {
          this.getLeaderboardBySlug = mockSuccessGetLeaderboardBySlug
        },
      }))

      await useGetLeaderboardBySlug(slug)

      expect(mockSuccessGetLeaderboardBySlug).toBeCalledTimes(1)
      expect(mockSuccessGetLeaderboardBySlug).toBeCalledWith({ slug })
    })
  })
})
