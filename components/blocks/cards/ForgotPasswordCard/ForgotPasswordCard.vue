<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { isEmailValid, isUsernameValid } from 'lib/form_helpers'
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
import BaseInput from 'elements/inputs/BaseInput/BaseInput.vue'
import CloseButton from 'elements/buttons/CloseButton/CloseButton.vue'
import CardBody from 'elements/cards/CardBody/CardBody.vue'
import CardHeader from 'elements/cards/CardHeader/CardHeader.vue'
import Card from 'elements/cards/Card/Card.vue'
import { useRecoverAccount } from 'composables/api'
import { useModalAlert } from 'composables/useModalAlert'

interface ForgotPasswordCardPops {
  modal?: boolean
}

interface ForgotPasswordCardState {
  email: Ref<string>
  username: Ref<string>
}

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'cancelClick'): void
}>()

const props = withDefaults(defineProps<ForgotPasswordCardPops>(), {
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
          title: 'Success!',
          type: 'success',
        })
      },
    },
  )
}
</script>

<template>
  <Card
    id="forgotPasswordCard"
    data-testid="forgot-password-card"
    class="forgot-password-card"
  >
    <CardHeader class="forgot-password-card__header">
      <div class="forgot-password-card__title">Forgot Password</div>
      <CloseButton
        v-show="props.modal"
        data-testid="close-button"
        @click.prevent="emit('close')"
      />
    </CardHeader>
    <CardBody>
      <div class="forgot-password-card__body-wrapper">
        <p class="instructions">
          Enter the email and username associated with your account, and we'll
          send you a link to reset your password.
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
          class="reset-password-button"
          data-testid="reset-password-button"
          :disabled="
            !(
              state.email.value &&
              state.username.value &&
              emailValid &&
              usernameValid
            )
          "
          @click="resetPassword"
        >
          Reset Password
        </BaseButton>
        <BaseButton
          class="cancel-button"
          data-testid="cancel-button"
          @click="cancel"
        >
          Cancel
        </BaseButton>
      </div>
    </CardBody>
  </Card>
</template>

<style lang="postcss" scoped>
.forgot-password-card {
  @apply bg-white w-full max-w-xl;

  & .forgot-password-card__header {
    @apply flex flex-row space-x-3;
  }

  & .forgot-password-card__title {
    @apply flex flex-1 justify-center px-3 py-2 rounded text-gray-900;
  }

  & .forgot-password-card__body-wrapper {
    @apply flex flex-col space-y-3 pb-3 mb-3;

    & .instructions {
      @apply px-4 py-2;
    }
  }

  .reset-password-button,
  .cancel-button {
    @apply flex flex-1 items-center justify-center fill-current bg-gray-100 text-gray-900 hover:bg-gray-200;
  }

  .reset-password-button:disabled {
    @apply bg-gray-300 text-gray-500 cursor-not-allowed;
  }

  .cancel-button {
    @apply bg-transparent border border-gray-300;
  }
}
</style>
