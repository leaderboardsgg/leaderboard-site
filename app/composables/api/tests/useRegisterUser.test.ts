import useRegisterUser from '~/composables/api/useRegisterUser'

const mockSuccessRegister = vi.fn(() => Promise.resolve({ ok: true }))

vi.mock('lib/api/Account', () => ({
  Account: vi.fn().mockImplementation(function () {
    return { register: mockSuccessRegister }
  }),
}))

describe('useRegisterUser', () => {
  describe('when everything is successful', () => {
    const email = 'test@lb.gg'
    const password = 'Password1'
    const username = 'test'

    it('registers a user, and returns the new user', async () => {
      await useRegisterUser({
        email,
        password,
        username,
      })

      expect(mockSuccessRegister).toHaveBeenCalledTimes(1)
      expect(mockSuccessRegister).toHaveBeenCalledWith({
        email,
        password,
        username,
      })
    })
  })
})
