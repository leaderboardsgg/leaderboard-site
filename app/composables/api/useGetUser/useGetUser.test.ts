import useGetUser from '.'

const mockSuccessGetUser = vi.fn(() => Promise.resolve({ ok: true }))

describe('useGetUser', () => {
  describe('when everything is successful', () => {
    const userId = 'cd79f511-a952-48d5-a1c9-262449bc2e34'

    it('creates a GET request to fetch the user details', async () => {
      vi.mock('lib/api/Users', () => ({
        Users: function Users() {
          this.getUser = mockSuccessGetUser
        },
      }))

      await useGetUser(userId)

      expect(mockSuccessGetUser).toBeCalledTimes(1)
      expect(mockSuccessGetUser).toBeCalledWith({ id: userId })
    })
  })
})
