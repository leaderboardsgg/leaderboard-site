import { createRef } from '@vueuse/core'
import useCreateRun from 'composables/api/useCreateRun'

const mockSuccessCreateRun = vi.fn(() => Promise.resolve({ ok: true }))

vi.mock('lib/api/Runs', () => ({
  Runs: vi.fn().mockImplementation(function () {
    return { createRun: mockSuccessCreateRun }
  }),
}))

vi.mock('app/composables/useSessionToken.ts', () => ({
  default: vi.fn(() => createRef('token'))
}))

describe('useCreateRun', () => {
  describe('when everything is successful', () => {
    const catId = 1
    const requestData = {
      $type: 'Time',
      time: '01:00:00',
      playedOn: '2026-01-01',
    }

    it('creates a new run', async () => {
      await useCreateRun(catId, requestData)

      expect(mockSuccessCreateRun).toHaveBeenCalledTimes(1)
      expect(mockSuccessCreateRun).toHaveBeenCalledWith({ id: 1 }, requestData, {
        headers: { Authorization: 'Bearer token' },
      })
    })
  })
})
