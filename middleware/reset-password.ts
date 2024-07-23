import { isProblemDetails } from 'lib/helpers'
import type { ProblemDetails } from 'lib/api/data-contracts'

export default defineNuxtRouteMiddleware(async (_to, from) => {
  const resetPasswordCode = from.query?.code as string
  const { showAlert } = useModalAlert()

  if (
    !resetPasswordCode ||
    from?.fullPath !== `/reset-password?code=${resetPasswordCode}`
  ) {
    return navigateTo('/', { replace: true })
  }

  const response = await useValidateRecoveryToken(resetPasswordCode)

  if (response?.error) {
    if (isProblemDetails(response.error)) {
      const problemDetails = response.error as ProblemDetails

      if (problemDetails.status === 400 || problemDetails.status === 404) {
        showAlert({
          body: 'Unable to recover account. Reach out to support if this persists.',
          title: 'Something went wrong...',
          type: 'error',
        })
      }
    }

    return navigateTo('/', { replace: true })
  }
})
