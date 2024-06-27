import { ref, type Ref } from 'vue'
import { isProblemDetails, isValidationProblemDetails } from 'lib/helpers'
import type {
  ProblemDetails,
  ValidationProblemDetails,
} from 'lib/api/data-contracts'
import type { HttpResponse } from 'lib/api/http-client'

/**
 * @property {T} [data]
 * @property {ProblemDetails | null} error
 * @property {ValidationProblemDetails | null} errors
 * @property {boolean} loading
 */
export interface ApiResponse<T> {
  data?: T
  error: ProblemDetails | null
  errors: ValidationProblemDetails | null
  loading: boolean
}

export interface optionalParameters<T> {
  onError?: (
    d: ProblemDetails | ValidationProblemDetails | unknown | null,
  ) => void | Promise<void> | unknown
  onOkay?: (d: T) => void | Promise<void> | unknown
  responseData?: Ref<T | undefined>
}

/**
 * @async
 * @param {function(): Promise<HttpResponse<T, ProblemDetails>>} apiRequest - the API request that is going to be made by this composable
 * @param {optionalParameters<T>} [opts = {}] - optional parameters. `onOkay`: a `function` to call when the API request succeeds. `responseData`: a `ref` to set the data to when the API request succeeds. If not passed it, a ref is created on a successful API call
 * @returns {Promise<ApiResponse<T>>} returns an `ApiResponse` object, but the `data` property is not guaranteed to be present
 */
export async function useApi<T>(
  apiRequest: () => Promise<HttpResponse<T, void | ProblemDetails>>,
  opts: optionalParameters<T> = {},
): Promise<ApiResponse<T>> {
  const responseError = ref<ProblemDetails | null | void>(null)
  const responseErrors = ref<ValidationProblemDetails | null | void>(null)
  const responseLoading = ref(true)

  let { responseData } = opts
  const { onError, onOkay } = opts

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

      if (onError) {
        await onError(error || null)
      }
    }
  } catch (e: unknown) {
    if (isProblemDetails(e)) {
      responseError.value = e as ProblemDetails
    } else if (isValidationProblemDetails(e)) {
      responseErrors.value = e as ValidationProblemDetails
    }

    if (onError) {
      await onError(e)
    }
  } finally {
    responseLoading.value = false
  }

  const apiResponse: ApiResponse<T> = {
    error: responseError.value || null,
    errors: responseErrors.value || null,
    loading: responseLoading.value,
  }

  if (responseData) {
    apiResponse.data = responseData.value
  }

  return apiResponse
}

export default useApi
