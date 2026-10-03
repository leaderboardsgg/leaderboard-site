import useValidateRecoveryToken from '~/composables/api/useValidateRecoveryToken'

const mockSuccessTestRecoveryToken = vi.fn(() => Promise.resolve({ ok: true }))

vi.mock('lib/api/Account', () => ({
  Account: vi.fn().mockImplementation(function () {
    return { testRecoveryToken: mockSuccessTestRecoveryToken }
  }),
}))

describe('useValidateRecoveryToken', () => {
  describe('when everything is successful', () => {
    const token = 'recoveryToken'

    it('validates the recovery token', async () => {
      await useValidateRecoveryToken(token)

      expect(mockSuccessTestRecoveryToken).toHaveBeenCalledTimes(1)
      expect(mockSuccessTestRecoveryToken).toHaveBeenCalledWith({ id: token })
    })
  })
})
