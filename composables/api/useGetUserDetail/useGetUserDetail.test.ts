import { describe, expect, it, vi } from 'vitest'

const mockSuccessUsersDetail = vi.fn(() => Promise.resolve({ ok: true }))

describe('useGetUserDetail', () => {
  describe('when everything is successful', () => {
    const userId = 'cd79f511-a952-48d5-a1c9-262449bc2e34'

    it('creates a GET request to fetch the user details', async () => {
      vi.mock('lib/api/Users', () => ({
        Users: function Users() {
          this.usersDetail = mockSuccessUsersDetail
        },
      }))

      await useGetUserDetail(userId)

      expect(mockSuccessUsersDetail).toBeCalledTimes(1)
      expect(mockSuccessUsersDetail).toBeCalledWith(userId)
    })
  })
})
