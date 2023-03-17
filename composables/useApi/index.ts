import { ref, type Ref } from 'vue'
import { isProblemDetails } from 'lib/helpers'
import type { ProblemDetails } from 'lib/api/data-contracts'
import type { HttpResponse } from 'lib/api/http-client'

/**
 * @property {T} [data]
 * @property {ProblemDetails | null} error
 * @property {boolean} loading
 */
export interface ApiResponse<T> {
  data?: T
  error: ProblemDetails | null
  loading: boolean
}

interface optionalParameters<T> {
  onOkay?: (d: T) => void | Promise<void> | unknown
  responseData?: Ref<T>
}

/**
 * @async
 * @param {function(): Promise<HttpResponse<T, ProblemDetails>>} apiRequest - the API request that is going to be made by this composable
 * @param {optionalParameters<T>} [opts = {}] - optional parameters. `onOkay`: a `function` to call when the API request succeeds. `responseData`: a `ref` to set the data to when the API request succeeds. If not passed it, a ref is created on a successful API call
 * @returns {Promise<ApiResponse<T>>} returns an `ApiResponse` object, but the `data` property is not guaranteed to be present
 */
export const useApi = async <T>(
  apiRequest: () => Promise<HttpResponse<T, ProblemDetails>>,
  opts: optionalParameters<T> = {},
): Promise<ApiResponse<T>> => {
  const responseError = ref<ProblemDetails | null>(null)
  const responseLoading = ref(true)

  let { responseData } = opts
  const { onOkay } = opts

  try {
    const { data, error, ok } = await apiRequest()

    if (ok) {
      if (responseData) {
        responseData.value = data
      } else {
        responseData = ref<T>(data) as Ref<T>
      }

      if (onOkay) {
        await onOkay(data)
      }
    } else {
      responseError.value = error
    }
  } catch (e: unknown) {
    if (isProblemDetails(e)) {
      const error = e as ProblemDetails

      console.error(error) // eslint-disable-line no-console
      responseError.value = error
    }
  } finally {
    responseLoading.value = false
  }

  const apiResponse: ApiResponse<T> = {
    error: responseError.value,
    loading: responseLoading.value,
  }

  if (responseData) {
    apiResponse.data = responseData.value
  }

  return apiResponse
}

export default useApi
