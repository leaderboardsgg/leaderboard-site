<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
import useResendAccountConfirmation from 'composables/api/useResendAccountConfirmation'
import { useModalAlert } from 'composables/useModalAlert'

const errorText = ref('')
const showErrorText = ref(false)
const { showAlert } = useModalAlert()

async function resend() {
  await useResendAccountConfirmation({
    onError: () => {
      errorText.value =
        'Something went wrong. Reach out to support if the problem persists'
      showErrorText.value = true
    },
    onOkay: () => {
      showAlert({
        body: 'If you have a valid account with us, you should receive an email from us soon.',
        title: 'Confirmation Request Received',
        type: 'info',
      })
    },
  })
}
</script>

<template>
  <div class="resend-confirmation-bar__container">
    <div class="resend-confirmation-bar__content">
      <div class="resend-confirmation-bar__text">
        <i-svg-circle-info />
        <span>{{ $t('needToConfirm') }}</span>
      </div>
      <BaseButton class="resend-confirmation__button" @click="resend">
        {{ $t('resendConfirmation') }}
      </BaseButton>
    </div>
    <p v-if="showErrorText" class="error-text">{{ errorText }}</p>
  </div>
</template>

<style lang="postcss" scoped>
.resend-confirmation-bar__container,
.resend-confirmation-bar__content {
  @apply flex flex-col items-center justify-center;
}

.resend-confirmation-bar__content {
  @apply mt-4 gap-y-2 md:flex-row md:gap-x-2;
  @apply fill-blue-500;
}

.resend-confirmation-bar__text {
  @apply flex items-center gap-x-2;
}

.resend-confirmation__button {
  @apply mx-1 py-1 bg-blue-100 hover:bg-blue-300;
}

.error-text {
  @apply text-red-600;
}
</style>
