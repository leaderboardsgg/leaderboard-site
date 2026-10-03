import useChangePassword from 'composables/api/useChangePassword'

const mockSuccessChangePassword = vi.fn(() => Promise.resolve({ ok: true }))

vi.mock('lib/api/Account', () => ({
  Account: vi.fn().mockImplementation(function () {
    return { changePassword: mockSuccessChangePassword }
  }),
}))

describe('useChangePassword', () => {
  describe('when everything is successful', () => {
    const token = 'recoveryToken'
    const requestData = { password: 'Password1' }

    it('changes the password for the user', async () => {
      await useChangePassword(token, requestData)

      expect(mockSuccessChangePassword).toHaveBeenCalledTimes(1)
      expect(mockSuccessChangePassword).toHaveBeenCalledWith({ id: token }, requestData)
    })
  })
})
