<script setup lang="ts">
import { type Ref, ref } from 'vue'
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
import BaseInput from 'elements/inputs/BaseInput/BaseInput.vue'
import CloseButton from 'elements/buttons/CloseButton/CloseButton.vue'
import CardBody from 'elements/cards/CardBody/CardBody.vue'
import CardHeader from 'elements/cards/CardHeader/CardHeader.vue'
import Card from 'elements/cards/Card/Card.vue'

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

function clearState() {
  state.email.value = ''
  state.username.value = ''
}

function cancel() {
  clearState()
  emit('cancelClick')
}

function resetPassword() {
  clearState()
  emit('close')
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
          placeholder="Email"
          autocomplete="email"
          data-testid="email-input"
        />
        <BaseInput
          :model="state.username"
          name="username"
          type="text"
          placeholder="Username"
          autocomplete="username"
          data-testid="username-input"
        />
        <BaseButton
          id="reset-password-button"
          class="reset-password-button"
          data-testid="reset-password-button"
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

  .cancel-button {
    @apply bg-transparent border border-gray-300;
  }
}
</style>
