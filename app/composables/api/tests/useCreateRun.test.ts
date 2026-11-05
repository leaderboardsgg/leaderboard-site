import useCreateRun from 'composables/api/useCreateRun'
import { ref } from 'vue'

const mockSuccessCreateRun = vi.fn(() => Promise.resolve({ ok: true }))

vi.mock('@vueuse/core', async (importOriginal) => {
  const actual: any = await importOriginal()
  return {
    ...actual,
    useLocalStorage: () => ({ value: 'token' }),
  }
})

vi.mock('#imports', async (importOriginal) => {
  const actual: any = await importOriginal()
  return {
    ...actual,
    useAuth: () => ({
      token: ref('token'),
    }),
  }
})

vi.mock('lib/api/Runs', () => ({
  Runs: vi.fn().mockImplementation(function () {
    return { createRun: mockSuccessCreateRun }
  }),
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
