<script setup lang="ts">
import type { Ref } from 'vue'
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
import CloseButton from 'elements/buttons/CloseButton/CloseButton.vue'
import BaseInput from 'elements/inputs/BaseInput/BaseInput.vue'
import HideShowPassword from 'elements/buttons/HideShowPassword/HideShowPassword.vue'
import CardBody from 'elements/cards/CardBody/CardBody.vue'
import CardHeader from 'elements/cards/CardHeader/CardHeader.vue'
import Card from 'elements/cards/Card/Card.vue'
import { useLoginUser } from 'composables/api/useLoginUser'

interface LogInCardProps {
  modal?: boolean
}

interface LogInCardState {
  email: Ref<string>
  password: Ref<string>
  showPassword: Ref<boolean>
}

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'signUpClick'): void
}>()

const props = withDefaults(defineProps<LogInCardProps>(), {
  modal: false,
})

const state: LogInCardState = {
  email: ref(''),
  password: ref(''),
  showPassword: ref(false),
}

function login() {
  useLoginUser({
    email: state.email.value,
    password: state.password.value,
  })

  state.email.value = ''
  state.password.value = ''
  state.showPassword.value = false

  emit('close')
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
        v-show="props.modal"
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

        <div class="login-card__input-wrapper">
          <BaseInput
            :model="state.password"
            class="login-card__password-field"
            name="password"
            :type="state.showPassword.value ? 'text' : 'password'"
            placeholder="Password"
            autocomplete="password"
            data-testid="password-input"
            @keyup.enter="login"
          />

          <div class="login-card__button-wrapper">
            <HideShowPassword
              id="hide-show-button"
              type="button"
              data-testid="hide-show-button"
              @click="state.showPassword.value = !state.showPassword.value"
              @keydown.enter.prevent=""
              @keyup.enter="
                state.showPassword.value = !state.showPassword.value
              "
              @keydown.enter="$event.preventDefault()"
            />
          </div>
        </div>

        <BaseButton
          class="login-button"
          data-testid="login-button"
          @click="login"
        >
          Log In
        </BaseButton>
      </div>

      <div class="login-card__auth-buttons">
        <BaseButton class="login-button">
          <i-svg-github class="mr-2 h-5 w-5" />

          <p>Log In with Github</p>
        </BaseButton>

        <BaseButton class="login-button">
          <i-svg-google class="mr-2 h-5 w-5" />
          <p>Log In with Google</p>
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
    @apply flex flex-col space-y-3 pb-3 mb-3 border-b border-gray-300;
  }
  & .login-card__input-wrapper {
    @apply relative flex flex-col w-full;
  }
  & .login-card__button-wrapper {
    @apply absolute top-0 right-0 flex items-center h-full;
  }
  & .login-card__auth-buttons {
    @apply flex flex-col w-full space-y-2;
  }
  & .login-card__password-field {
    @apply bg-white pr-12;
  }
}

#hide-show-button {
  @apply text-gray-700 hover:bg-gray-100;
  @apply p-1 mr-2 rounded fill-current;
}

#sign-up-button {
  @apply hover:bg-gray-100;
}

.login-button {
  @apply flex flex-1 items-center justify-center fill-current bg-gray-100 text-gray-900 hover:bg-gray-200;
}
</style>
