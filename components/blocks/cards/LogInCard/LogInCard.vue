<script setup lang="ts">
import { defineEmits, reactive, withDefaults } from 'vue'
import BaseButton from '@/components/elements/buttons/BaseButton/BaseButton.vue'
// import BaseInput from '@/components/elements/inputs/BaseInput/BaseInput.vue'
import Card from '@/components/elements/cards/Card/Card.vue'
// import CardBody from '@/elements/cards/CardBody/CardBody.vue'
import CardHeader from '@/components/elements/cards/CardHeader/CardHeader.vue'
import CloseButton from '@/components/elements/buttons/CloseButton/CloseButton.vue'

interface LoginCardEmits {
  (e: 'close'): void
  (e: 'signUpClick'): void
}

interface LoginCardProps {
  modal?: boolean
}

interface LoginCardState {
  email: string
  password: string
  showPassword: boolean
}

const emit = defineEmits<LoginCardEmits>()

const props = withDefaults(defineProps<LoginCardProps>(), {
  modal: false,
})

const state: LoginCardState = reactive({
  email: '',
  password: '',
  showPassword: false,
})

function login() {
  state.email = ''
  state.password = ''
  state.showPassword = false

  emit('close')
}
</script>
<script lang="ts">
export default {
  name: 'LogInCard',
  // components: {
  //   BaseButton,
  //   BaseInput,
  //   Card,
  //   CardBody,
  //   CardHeader,
  //   CloseButton,
  // },
}
</script>

<template>
  <Card id="loginCard" data-testid="login-card" class="login-card">
    <CardHeader class="login-card__header">
      <div class="login-card__title">Log In</div>

      <BaseButton
        id="sign-up-button"
        class="login-card__sign-up-button"
        @click="emit('signUpClick')"
      >
        Sign Up
      </BaseButton>

      <CloseButton v-show="props.modal" @click.prevent="emit('close')" />
    </CardHeader>

    <!-- <CardBody> -->
    <!-- <div class="login-card__body-wrapper">
        <BaseInput
          v-model="state.email"
          name="email"
          type="text"
          placeholder="Email"
          autocomplete="email"
        />

        <div class="login-card__input-wrapper">
          <BaseInput
            v-model="state.password"
            class="login-card__password-field"
            name="password"
            :type="state.showPassword ? 'text' : 'password'"
            placeholder="Password"
            autocomplete="password"
          />

          <div class="login-card__button-wrapper">
            <HideShowPassword
              id="hide-show-button"
              type="button"
              @click="state.showPassword = !state.showPassword"
              @keydown.enter.prevent
              @keyup.enter="state.showPassword = !state.showPassword"
            />
          </div>
        </div>

        <BaseButton class="login-button" @click="login"> Log In </BaseButton>
      </div>

      <div class="login-card__auth-buttons">
        <BaseButton class="login-button">
          <svg-icon class="mr-2 w-5 h-5" name="github" />

          <p>Log In with Github</p>
        </BaseButton>

        <BaseButton class="login-button">
          <svg-icon class="mr-2 w-5 h-5" name="google" />
          <p>Log In with Google</p>
        </BaseButton>
      </div> -->
    <!-- </CardBody> -->
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
