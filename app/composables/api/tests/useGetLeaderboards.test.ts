import useGetLeaderboards from '~/composables/api/useGetLeaderboards'

const mockSuccessGetLeaderboards = vi.fn(() => Promise.resolve({ ok: true }))

vi.mock('lib/api/Leaderboards', () => ({
  Leaderboards: vi.fn().mockImplementation(function () {
    return { listLeaderboards: mockSuccessGetLeaderboards }
  }),
}))

describe('useGetLeaderboard', () => {
  describe('when everything is successful', () => {
    const queryParams = {}
    it('creates a GET request to fetch the a list of leaderboards', async () => {
      await useGetLeaderboards()

      expect(mockSuccessGetLeaderboards).toHaveBeenCalledTimes(1)
      expect(mockSuccessGetLeaderboards).toHaveBeenCalledWith(queryParams)
    })
  })
})
