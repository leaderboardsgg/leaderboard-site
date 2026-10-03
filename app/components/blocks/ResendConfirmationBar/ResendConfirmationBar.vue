<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseButton from 'elements/buttons/BaseButton.vue'
import useResendAccountConfirmation from '~/composables/api/useResendAccountConfirmation'
import { useCurrentUser, useI18n, useModalAlert } from '#imports'

const currentUser = await useCurrentUser()
const errorText = ref('')
const showErrorText = ref(false)
const { showAlert } = useModalAlert()
const override = ref(false)
const unconfirmed = computed(() => !override.value && currentUser.data.value?.role === 'Registered')

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
  <div v-if="unconfirmed" class="flex flex-col items-center justify-center">
    <div
      class="flex flex-col items-center justify-center mt-4 gap-y-2 md:flex-row md:gap-x-2 fill-blue-500"
    >
      <div class="flex items-center gap-x-2">
        <i-svg-circle-info />
        <span>{{ $t('needToConfirm') }}</span>
      </div>
      <BaseButton class="mx-1 py-1 bg-blue-100 hover:bg-blue-300" @click="resend">
        {{ $t('resendConfirmation') }}
      </BaseButton>
    </div>
    <p v-if="showErrorText" class="text-red-600">{{ errorText }}</p>
  </div>
</template>
