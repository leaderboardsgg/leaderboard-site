import useGetLeaderboards from '.'

const mockSuccessGetLeaderboards = vi.fn(() => Promise.resolve({ ok: true }))

describe('useGetLeaderboard', () => {
  describe('when everything is successful', () => {
    const queryParams = {}
    it('creates a GET request to fetch the a list of leaderboards', async () => {
      vi.mock('lib/api/Leaderboards', () => ({
        Leaderboards: function Leaderboards() {
          this.listLeaderboards = mockSuccessGetLeaderboards
        },
      }))

      await useGetLeaderboards()

      expect(mockSuccessGetLeaderboards).toBeCalledTimes(1)
      expect(mockSuccessGetLeaderboards).toBeCalledWith(queryParams)
    })
  })
})
