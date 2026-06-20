<script setup lang="ts">
import { type Ref, ref } from 'vue'
import BaseButton from 'elements/buttons/BaseButton.vue'
import CloseButton from '~/components/elements/buttons/CloseButton.vue'
import BaseInput from '~/components/elements/inputs/BaseInput.vue'
import PasswordInput from '~/components/elements/inputs/PasswordInput.vue'
import CardBody from '~/components/elements/cards/CardBody.vue'
import CardHeader from '~/components/elements/cards/CardHeader.vue'
import Card from '~/components/elements/cards/Card.vue'
import HideShowPassword from '~/components/elements/buttons/HideShowPassword.vue'
import useLoginUser from '~/composables/api/useLoginUser'

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
  <Card id="logInCard" data-testid="log-in-card" class="bg-white w-full max-w-xl">
    <CardHeader class="flex flex-row space-x-3">
      <div class="flex flex-1 justify-center px-3 py-2 rounded bg-gray-100 text-gray-900">
        Log In
      </div>

      <BaseButton
        id="sign-up-button"
        class="flex flex-1 justify-center bg-white text-gray-900 border border-gray-300 hover:bg-gray-100"
        data-testid="sign-up-button"
        @click="emit('signUpClick')"
      >
        Sign Up
      </BaseButton>

      <CloseButton v-show="modal" data-testid="close-button" @click.prevent="emit('close')" />
    </CardHeader>

    <CardBody>
      <div class="flex flex-col space-y-3 pb-3 mb-3">
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
            name="password"
            data-testid="password-input"
            placeholder="Password"
            @keyup.enter="login"
          />

          <HideShowPassword
            id="hide-show-password"
            type="button"
            data-testid="hide-show-button"
            class="hidden sm:inline text-gray-700 bg-gray-100 hover:bg-gray-300"
            @click="showPassword = !showPassword"
            @keydown.enter="$event.preventDefault()"
            @keyup.enter="showPassword = !showPassword"
          />
        </div>
        <p v-if="showErrorText" class="text-red-600">
          Error: Invalid Email, or Password for given email.
        </p>

        <BaseButton
          class="flex flex-1 items-center justify-center fill-current bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-black"
          data-testid="login-button"
          :disabled="!(state.email.value && state.password.value)"
          @click="login"
        >
          Log In
        </BaseButton>
        <BaseButton
          class="flex flex-1 items-center justify-center fill-current bg-gray-100 text-gray-900 hover:bg-gray-200 bg-transparent border border-gray-300"
          data-testid="forgot-password-button"
          @click="emit('forgotPasswordClick')"
        >
          Forgot Password?
        </BaseButton>
      </div>
    </CardBody>
  </Card>
</template>
