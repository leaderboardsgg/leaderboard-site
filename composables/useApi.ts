import { ref, type Ref } from 'vue'
import { isProblemDetails } from 'lib/helpers'
import type { HttpResponse } from 'lib/api/http-client'
import type { ProblemDetails } from 'lib/api/data-contracts'

export interface ApiResponse<T> {
  data?: T
  error: ProblemDetails | null
  loading: boolean
}

interface optionalParameters<T> {
  onOkay?: (d: T) => void | Promise<void> | unknown
  responseData?: Ref<T>
}

export const useApi = async <T>(
  apiRequest: () => Promise<HttpResponse<T, ProblemDetails>>,
  opts: optionalParameters<T>,
): Promise<ApiResponse<T>> => {
  const responseError = ref<ProblemDetails | null>(null)
  const responseLoading = ref(true)

  const { responseData, onOkay } = opts

  try {
    const { data, ok, error } = await apiRequest()

    if (ok) {
      if (responseData) {
        responseData.value = data
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
