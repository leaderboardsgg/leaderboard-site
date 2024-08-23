<script setup lang="ts">
import { type Ref, ref } from 'vue'
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
import CloseButton from 'elements/buttons/CloseButton/CloseButton.vue'
import BaseInput from 'elements/inputs/BaseInput/BaseInput.vue'
import PasswordInput from 'elements/inputs/PasswordInput/PasswordInput.vue'
import CardBody from 'elements/cards/CardBody/CardBody.vue'
import CardHeader from 'elements/cards/CardHeader/CardHeader.vue'
import Card from 'elements/cards/Card/Card.vue'
import HideShowPassword from 'elements/buttons/HideShowPassword/HideShowPassword.vue'
import { useLoginUser } from '~/composables/api'

interface LogInCardProps {
  modal?: boolean
}

interface LogInCardState {
  email: Ref<string>
  password: Ref<string>
  showPassword: Ref<boolean>
}

const emit = defineEmits<{
  (event: 'close' | 'forgotPasswordClick' | 'signUpClick'): void
}>()

withDefaults(defineProps<LogInCardProps>(), {
  modal: false,
})

const state: LogInCardState = {
  email: ref(''),
  password: ref(''),
  showPassword: ref(false),
}

const showErrorText = ref(false)
const showPassword = ref(false)

async function login() {
  showErrorText.value = false
  await useLoginUser(
    {
      email: state.email.value,
      password: state.password.value,
    },
    {
      onError: (_) => {
        showErrorText.value = true
      },
      onOkay: (_) => {
        state.email.value = ''
        state.password.value = ''
        state.showPassword.value = false
        emit('close')
      },
    },
  )
}
</script>

<template>
  <Card id="logInCard" data-testid="log-in-card" class="login-card">
    <CardHeader class="login-card__header">
      <div class="login-card__title">Log In</div>

      <BaseButton
        id="sign-up-button"
        class="login-card__sign-up-button"
        data-testid="sign-up-button"
        @click="emit('signUpClick')"
      >
        Sign Up
      </BaseButton>

      <CloseButton
        v-show="modal"
        data-testid="close-button"
        @click.prevent="emit('close')"
      />
    </CardHeader>

    <CardBody>
      <div class="login-card__body-wrapper">
        <BaseInput
          :model="state.email"
          name="email"
          type="text"
          placeholder="Email"
          autocomplete="email"
          data-testid="email-input"
        />

        <div class="flex">
          <PasswordInput
            :model="state.password"
            :show-password="showPassword"
            class="login-card__password-field"
            name="password"
            data-testid="password-input"
            placeholder="Password"
            @keyup.enter="login"
          />

          <HideShowPassword
            id="hide-show-password"
            type="button"
            data-testid="hide-show-button"
            @click="showPassword = !showPassword"
            @keydown.enter="$event.preventDefault()"
            @keyup.enter="showPassword = !showPassword"
          />
        </div>
        <p v-if="showErrorText" class="text-red-600">
          Error: Invalid Email, or Password for given email.
        </p>

        <BaseButton
          class="login-button"
          data-testid="login-button"
          :disabled="!(state.email.value && state.password.value)"
          @click="login"
        >
          Log In
        </BaseButton>
        <BaseButton
          class="forgot-password-button"
          data-testid="forgot-password-button"
          @click="emit('forgotPasswordClick')"
        >
          Forgot Password?
        </BaseButton>
      </div>
    </CardBody>
  </Card>
</template>

<style lang="postcss" scoped>
.login-card {
  @apply bg-white w-full max-w-xl;
  & .login-card__header {
    @apply flex flex-row space-x-3;
  }
  & .login-card__title {
    @apply flex flex-1 justify-center px-3 py-2 rounded bg-gray-100 text-gray-900;
  }
  & .login-card__sign-up-button {
    @apply flex flex-1 justify-center bg-white text-gray-900 border border-gray-300;
  }
  & .login-card__body-wrapper {
    @apply flex flex-col space-y-3 pb-3 mb-3;
  }
  & .login-card__input-wrapper {
    @apply relative flex flex-col w-full;
  }
  & .login-card__button-wrapper {
    @apply absolute top-0 right-0 flex items-center h-full;
  }
}

#hide-show-password {
  @apply hidden sm:inline;
  @apply text-gray-700 bg-gray-100 hover:bg-gray-300;
}

#sign-up-button {
  @apply hover:bg-gray-100;
}

.login-button,
.forgot-password-button {
  @apply flex flex-1 items-center justify-center fill-current bg-gray-100 text-gray-900 hover:bg-gray-200;
}

.forgot-password-button {
  @apply bg-transparent border border-gray-300;
}
</style>
