<script setup lang="ts">
import { ref, type Ref } from 'vue'
import BaseButton from 'elements/buttons/BaseButton.vue'
import CloseButton from '~/components/elements/buttons/CloseButton.vue'
import Card from '~/components/elements/cards/Card.vue'
import CardBody from '~/components/elements/cards/CardBody.vue'
import CardHeader from '~/components/elements/cards/CardHeader.vue'
import BaseInput from '~/components/elements/inputs/BaseInput.vue'
import { isEmailValid, isUsernameValid } from 'lib/form_helpers'
import { useModalAlert } from '#imports'
import useRecoverAccount from '~/composables/api/useRecoverAccount'

interface ForgotPasswordCardPops {
  modal?: boolean
}

interface ForgotPasswordCardState {
  email: Ref<string>
  username: Ref<string>
}

const emit = defineEmits<{
  (event: 'close' | 'cancelClick'): void
}>()

withDefaults(defineProps<ForgotPasswordCardPops>(), {
  modal: false,
})

const state: ForgotPasswordCardState = {
  email: ref(''),
  username: ref(''),
}

const emailValid = ref(true)
const usernameValid = ref(true)

const { showAlert } = useModalAlert()

function clearState() {
  state.email.value = ''
  state.username.value = ''
}

function cancel() {
  clearState()
  emit('cancelClick')
}

function resetPassword() {
  useRecoverAccount(
    {
      email: state.email.value,
      username: state.username.value,
    },
    {
      onOkay: () => {
        clearState()
        emit('close')

        showAlert({
          body: 'If an account with that email and username exists, we will send you an email with a link to reset your password.',
          title: 'Password Recovery',
          type: 'info',
        })
      },
    },
  )
}
</script>

<template>
  <Card id="forgotPasswordCard" data-testid="forgot-password-card" class="bg-white w-full max-w-xl">
    <CardHeader class="flex flex-row space-x-3">
      <div class="flex flex-1 justify-center px-3 py-2 rounded text-gray-900">Forgot Password</div>
      <CloseButton v-show="modal" data-testid="close-button" @click.prevent="emit('close')" />
    </CardHeader>
    <CardBody>
      <div class="flex flex-col space-y-3 pb-3 mb-3">
        <p class="px-4 py-2 text-black">
          Enter the email and username associated with your account, and we'll send you a link to
          reset your password.
        </p>
        <BaseInput
          :model="state.email"
          name="email"
          type="text"
          :style="{
            'border-color': !emailValid ? 'rgb(185 28 28 / 1)' : '',
          }"
          placeholder="Email"
          autocomplete="email"
          data-testid="email-input"
          @change="emailValid = isEmailValid(state.email)"
        />
        <BaseInput
          :model="state.username"
          name="username"
          type="text"
          :style="{
            'border-color': !usernameValid ? 'rgb(185 28 28 / 1)' : '',
          }"
          placeholder="Username"
          autocomplete="username"
          data-testid="username-input"
          @change="usernameValid = isUsernameValid(state.username)"
        />
        <BaseButton
          id="reset-password-button"
          class="flex flex-1 items-center justify-center fill-current bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
          data-testid="reset-password-button"
          :disabled="!(state.email.value && state.username.value && emailValid && usernameValid)"
          @click="resetPassword"
        >
          Reset Password
        </BaseButton>
        <BaseButton
          class="flex flex-1 items-center justify-center fill-current bg-gray-100 text-gray-900 hover:bg-gray-200 bg-transparent border border-gray-300"
          data-testid="cancel-button"
          @click="cancel"
        >
          Cancel
        </BaseButton>
      </div>
    </CardBody>
  </Card>
</template>
