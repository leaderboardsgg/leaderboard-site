import useGetUser from '~/composables/api/useGetUser'

const mockSuccessGetUser = vi.fn(() => Promise.resolve({ ok: true }))

vi.mock('lib/api/Users', () => ({
  Users: vi.fn().mockImplementation(function () {
    return { getUser: mockSuccessGetUser }
  }),
}))

describe('useGetUser', () => {
  describe('when everything is successful', () => {
    const userId = 'cd79f511-a952-48d5-a1c9-262449bc2e34'

    it('creates a GET request to fetch the user details', async () => {
      await useGetUser(userId)

      expect(mockSuccessGetUser).toHaveBeenCalledTimes(1)
      expect(mockSuccessGetUser).toHaveBeenCalledWith({ id: userId })
    })
  })
})
