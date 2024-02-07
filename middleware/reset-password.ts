import { useValidateRecoveryToken } from 'composables/api'
import { useModalAlert } from 'composables/useModalAlert'
import { isProblemDetails } from 'lib/helpers'
import {
  ProblemDetails,
  ValidationProblemDetails,
} from 'lib/api/data-contracts'

export default defineNuxtRouteMiddleware((_to, from) => {
  const route = useRoute()
  const resetPasswordCode = route.query?.code as string
  const { showAlert } = useModalAlert()

  if (
    !resetPasswordCode ||
    from?.fullPath !== `/reset-password?code=${resetPasswordCode}`
  ) {
    return navigateTo('/', { replace: true })
  }

  useValidateRecoveryToken(resetPasswordCode, {
    onError: (e: ProblemDetails | ValidationProblemDetails | unknown) => {
      if (isProblemDetails(e)) {
        const problemDetails = e as ProblemDetails

        if (problemDetails.status === 400 || problemDetails.status === 404) {
          showAlert({
            body: 'Unable to recover account. Reach out to support if this persists.',
            title: 'Something went wrong...',
            type: 'error',
          })
        }
      }
      navigateTo('/', { replace: true })
    },
    onOkay: () => {
      navigateTo(`/recover-account?code=${resetPasswordCode}`, {
        replace: true,
      })
    },
  })
})
