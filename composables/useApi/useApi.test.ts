import { ref } from 'vue'
import { useApi } from '.'
import type { ProblemDetails } from 'lib/api/data-contracts'
import type { HttpResponse } from 'lib/api/http-client'

interface Opts {
  data?: object
  error?: ProblemDetails | null
  ok?: boolean
}

describe('useApi', () => {
  const createApiCall = (opts?: Opts) => () =>
    Promise.resolve({
      data: opts?.data ?? {},
      error: opts?.error ?? null,
      ok: opts?.ok ?? true,
    } as unknown as HttpResponse<object, ProblemDetails>)

  it('calls the passed apiRequest', async () => {
    const apiSpy = vi.fn(createApiCall())

    await useApi(apiSpy)

    expect(apiSpy).toBeCalledTimes(1)
  })

  it('returns the error, when not ok', async () => {
    const error = { user: 'not found' }

    const response = await useApi(createApiCall({ error, ok: false }))

    expect(response.error).toEqual(error)
    expect(response.loading).toBe(false)
  })

  describe('given the optional arguments', () => {
    describe('onOkay', () => {
      const onOkaySpy = vi.fn()

      it('should call the `onOkay` method when ok is true', async () => {
        onOkaySpy.mockClear()

        await useApi(createApiCall(), { onOkay: onOkaySpy })

        expect(onOkaySpy).toBeCalledTimes(1)
      })

      it('should  NOT call the `onOkay` method when ok is false', async () => {
        onOkaySpy.mockClear()

        await useApi(createApiCall({ ok: false }), { onOkay: onOkaySpy })

        expect(onOkaySpy).not.toBeCalled()
      })
    })

    describe('responseData', () => {
      const data = { test: '123' }

      it('returns the data', async () => {
        const response = await await useApi(createApiCall({ data, ok: true }))

        expect(response).toHaveProperty('data')
        expect(response).toHaveProperty('error')
        expect(response).toHaveProperty('loading')

        expect(response.data).toEqual(data)
      })

      it('sets the value to the data, when ok', async () => {
        const responseData = ref({})

        await useApi(createApiCall({ data, ok: true }), { responseData })

        expect(responseData.value).toEqual(data)
      })

      it('does not set the value of the data, when not ok', async () => {
        const responseData = ref({})

        await useApi(createApiCall({ data, ok: false }), { responseData })

        expect(responseData.value).not.toEqual(data)
        expect(responseData.value).toEqual({})
      })

      describe('when it is not set', () => {
        it('does not return the data, when not ok', async () => {
          const response = await await useApi(
            createApiCall({ data, ok: false }),
          )

          expect(response).not.toHaveProperty('data')
          expect(response).toHaveProperty('error')
          expect(response).toHaveProperty('loading')
        })
      })
    })
  })
})
