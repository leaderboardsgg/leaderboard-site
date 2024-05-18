<script setup lang="ts">
import { ref } from 'vue'
import useResendAccountConfirmation from 'composables/api/useResendAccountConfirmation'
import { useModalAlert } from 'composables/useModalAlert'

// Might need definePageMeta and to create a middleware??

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
  <div>
    <button @click="resend">Confirm</button>
    <p v-if="showErrorText" class="text-red-600">{{ errorText }}</p>
  </div>
</template>
