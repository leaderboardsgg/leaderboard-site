import { defineNuxtRouteMiddleware, useRoute, navigateTo } from 'nuxt/app'
import { useModalAlert } from '#imports'
import { useConfirmAccount } from '~/composables/api'

export default defineNuxtRouteMiddleware((_to, from) => {
  const route = useRoute()
  const confirmationCode = route.query?.code as string
  const { showAlert } = useModalAlert()

  if (
    !confirmationCode ||
    from?.fullPath !== `/confirm-account?code=${confirmationCode}`
  ) {
    return navigateTo('/', { replace: true })
  }

  useConfirmAccount(confirmationCode, {
    onError: () => {
      showAlert({
        body: 'Unable to confirm account.',
        title: 'Something went wrong...',
        type: 'error',
      })
      navigateTo('/', { replace: true })
    },
    onOkay: () => {
      showAlert({
        body: 'Account confirmed successfully!`',
        title: 'Success!',
        type: 'success',
      })
      navigateTo('/', { replace: true })
    },
  })
})
