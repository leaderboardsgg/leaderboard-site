import useRecoverAccount from '~/composables/api/useRecoverAccount'

const mockSuccessRecover = vi.fn(() => Promise.resolve({ ok: true }))

vi.mock('lib/api/Account', () => ({
  Account: vi.fn().mockImplementation(function () {
    return { sendRecoveryEmail: mockSuccessRecover }
  }),
}))

describe('useRecoverAccount', () => {
  describe('when everything is successful', () => {
    const requestData = { email: 'test@lb.gg', username: 'test' }

    it('kicks off the account recovery process', async () => {
      await useRecoverAccount(requestData)

      expect(mockSuccessRecover).toHaveBeenCalledTimes(1)
      expect(mockSuccessRecover).toHaveBeenCalledWith(requestData)
    })
  })
})
