import useCreateRun from '.'

const mockSuccessCreateRun = vi.fn(() => Promise.resolve({ ok: true }))

describe('useCreateRun', () => {
  describe('when everything is successful', () => {
    const catId = 1
    const requestData = {
      $type: 'Time',
      time: '01:00:00',
      playedOn: '2026-01-01',
    }

    it('changes the password for the user', async () => {
      vi.mock('lib/api/Runs', () => ({
        Runs: function Runs() {
          this.createRun = mockSuccessCreateRun
        },
      }))

      await useCreateRun(catId, requestData)

      expect(mockSuccessCreateRun).toBeCalledTimes(1)
      expect(mockSuccessCreateRun).toBeCalledWith(
        { id: 1 },
        requestData,
      )
    })
  })
})
