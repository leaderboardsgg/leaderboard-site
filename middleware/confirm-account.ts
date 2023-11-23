import { useConfirmAccount } from 'composables/api'
import { useModalAlert } from 'composables/useModalAlert'

export default defineNuxtRouteMiddleware((_to, from) => {
  const route = useRoute()
  const confirmationCode = route.query?.code as string
  const modalAlertState = useModalAlert().value

  if (
    !confirmationCode ||
    from?.fullPath !== `/confirm-account?code=${confirmationCode}`
  ) {
    return navigateTo('/', { replace: true })
  }

  useConfirmAccount(confirmationCode, {
    onError: () => {
      modalAlertState.show = true
      modalAlertState.title = 'Something went wrong...'
      modalAlertState.body = 'Unable to confirm account.'
      modalAlertState.type = 'error'
      navigateTo('/', { replace: true })
    },
    onOkay: () => {
      modalAlertState.show = true
      modalAlertState.title = 'Success!'
      modalAlertState.body = 'Account confirmed successfully!'
      modalAlertState.type = 'success'
      navigateTo('/', { replace: true })
    },
  })
})
