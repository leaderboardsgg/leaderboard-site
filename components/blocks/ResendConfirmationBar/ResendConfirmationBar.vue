<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
import { useResendAccountConfirmation } from '~/composables/api'
import { useCurrentUser, useI18n, useModalAlert } from '#imports'

const currentUser = await useCurrentUser()
const errorText = ref('')
const showErrorText = ref(false)
const { showAlert } = useModalAlert()
const override = ref(false)
const unconfirmed = computed(
  () => !override.value && currentUser.data.value?.role === 'Registered',
)

const { t } = useI18n()

async function resend() {
  await useResendAccountConfirmation({
    onError: () => {
      errorText.value = t('resendConfirmationError')
      showErrorText.value = true
    },
    onOkay: () => {
      showAlert({
        body: t('confirmationReceivedText'),
        title: t('confirmationReceived'),
        type: 'info',
      })
      override.value = true
    },
  })
}
</script>

<template>
  <div v-if="unconfirmed" class="resend-confirmation-bar__container">
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
import { useCurrentUser, useModalAlert, useI18n } from '#imports'; import {
useResendAccountConfirmation } from '~/composables/api';
