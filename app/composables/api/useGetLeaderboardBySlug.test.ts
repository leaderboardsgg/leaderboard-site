import useGetLeaderboardBySlug from '~/composables/api/useGetLeaderboardBySlug'

const mockSuccessGetLeaderboardBySlug = vi.fn(() => Promise.resolve({ ok: true }))

vi.mock('lib/api/Leaderboards', () => ({
  Leaderboards: vi.fn().mockImplementation(function () {
    return { getLeaderboardBySlug: mockSuccessGetLeaderboardBySlug }
  }),
}))

describe('useGetLeaderboardBySlug', () => {
  describe('when everything is successful', () => {
    const slug = 'pieces'

    it('creates a GET request to fetch the leaderboard details', async () => {
      await useGetLeaderboardBySlug(slug)

      expect(mockSuccessGetLeaderboardBySlug).toBeCalledTimes(1)
      expect(mockSuccessGetLeaderboardBySlug).toBeCalledWith({ slug })
    })
  })
})
