<script setup lang="ts">
import { type Ref, ref } from 'vue'
import {
  isEmailValid,
  isPasswordValid,
  isUsernameValid,
  passwordsAreTheSame,
  renderErrors,
} from 'lib/form_helpers'
import BaseInput from '~/components/elements/inputs/BaseInput.vue'
import PasswordInput from '~/components/elements/inputs/PasswordInput.vue'
import HideShowPassword from '~/components/elements/buttons/HideShowPassword.vue'
import BaseButton from 'elements/buttons/BaseButton.vue'
import CloseButton from '~/components/elements/buttons/CloseButton.vue'
import Card from '~/components/elements/cards/Card.vue'
import CardHeader from '~/components/elements/cards/CardHeader.vue'
import CardBody from '~/components/elements/cards/CardBody.vue'
import useLoginUser from '~/composables/api/useLoginUser'
import useRegisterUser from '~/composables/api/useRegisterUser'

interface SignUpCardProps {
  modal?: boolean
}

interface UserRegister {
  email: Ref<string>
  password: Ref<string>
  passwordConfirm: Ref<string>
  username: Ref<string>
}

const emit = defineEmits<{
  (event: 'close' | 'logInClick' | 'signUpClick'): void
}>()

withDefaults(defineProps<SignUpCardProps>(), {
  modal: false,
})

const register: UserRegister = {
  email: ref(''),
  password: ref(''),
  passwordConfirm: ref(''),
  username: ref(''),
}

const errorText = ref('')
const passwordErrorsText = ref('')
const emailValid = ref(true)
const passwordInputValid = ref(true)
const passwordConfirmValid = ref(true)
const usernameValid = ref(true)
const showPassword = ref(false)

async function signup() {
  await useRegisterUser(
    {
      email: register.email.value,
      password: register.password.value,
      username: register.username.value,
    },
    {
      onError: (val: any) => {
        const errors = Object.values(val.error?.errors) as string[][]
        errorText.value = renderErrors(errors)
      },
      onOkay: () => {
        useLoginUser({
          email: register.email.value,
          password: register.password.value,
        })
        register.email.value = ''
        register.password.value = ''
        register.passwordConfirm.value = ''
        register.username.value = ''
        showPassword.value = false
        emit('close')
      },
    },
  )

  emit('signUpClick')
}

function validatePasswordInputs() {
  passwordErrorsText.value = ''
  const passwordsTheSame = passwordsAreTheSame(register.password, register.passwordConfirm)
  const passwordValid = isPasswordValid(register.password.value)

  if (!passwordValid) {
    passwordInputValid.value = false
    // helps visually show that the password isn't valid as that's higher priority
    // information than that of the passwords not being the same
    passwordConfirmValid.value = true
    passwordErrorsText.value = 'Password is not valid'
    return
  }

  if (!passwordsTheSame) {
    passwordInputValid.value = false
    passwordConfirmValid.value = false
    passwordErrorsText.value = 'Passwords are not the same'
    return
  }

  passwordInputValid.value = true
  passwordConfirmValid.value = true
}
</script>

<template>
  <Card id="signUpCard" data-testid="sign-up-card" class="bg-white w-full max-w-xl">
    <CardHeader class="flex flex-row space-x-3">
      <BaseButton
        id="login-button"
        class="flex flex-1 justify-center bg-white text-gray-900 border border-gray-300 hover:bg-gray-100"
        data-testid="login-button"
        @click="emit('logInClick')"
      >
        Log In
      </BaseButton>

      <div class="flex flex-1 justify-center px-3 py-2 rounded-sm bg-gray-100 text-gray-900">
        Sign Up
      </div>

      <CloseButton v-show="modal" data-testid="close-button" @click.prevent="emit('close')" />
    </CardHeader>

    <CardBody>
      <div class="flex flex-col space-y-3 pb-3 mb-3">
        <BaseInput
          :model="register.email"
          name="email"
          type="text"
          placeholder="Email"
          autocomplete="email"
          data-testid="email-input"
          :style="{
            'border-color': !emailValid ? 'rgb(185 28 28 / 1)' : '',
          }"
          @change="emailValid = isEmailValid(register.email)"
        />

        <BaseInput
          :model="register.username"
          name="username"
          type="text"
          placeholder="Username"
          autocomplete="nickname"
          data-testid="username-input"
          minlength="2"
          maxlength="25"
          :style="{
            'border-color': !usernameValid ? 'rgb(185 28 28 / 1)' : '',
          }"
          @change="usernameValid = isUsernameValid(register.username)"
        />

        <div class="signup-card__input-wrapper">
          <div class="flex flex-row gap-1">
            <div class="flex flex-col gap-1 grow">
              <PasswordInput
                :model="register.password"
                name="password"
                class="signup-card__password-field"
                :style="{
                  'border-color': !passwordInputValid ? 'rgb(185 28 28 / 1)' : '',
                }"
                :show-password="showPassword"
                placeholder="Password"
                autocomplete="password"
                test-id="password-input"
                minlength="8"
                maxlength="80"
                @change="validatePasswordInputs"
              />

              <PasswordInput
                :model="register.passwordConfirm"
                name="passwordConfirm"
                class="signup-card__password-field"
                :style="{
                  'border-color': !passwordConfirmValid ? 'rgb(185 28 28 / 1)' : '',
                }"
                :show-password="showPassword"
                placeholder="Confirm"
                autocomplete="password"
                test-id="password-confirm-input"
                minlength="8"
                maxlength="80"
                @change="validatePasswordInputs"
              />
            </div>

            <HideShowPassword
              id="hide-show-password"
              type="button"
              data-testid="hide-show-button"
              class="hidden sm:inline text-gray-700 bg-gray-100 hover:bg-gray-300 mt-1 grow-0"
              @click="showPassword = !showPassword"
              @keydown.enter="$event.preventDefault()"
              @keyup.enter="showPassword = !showPassword"
            />
          </div>

          <p v-if="passwordErrorsText" class="text-red-600">
            {{ passwordErrorsText }}
          </p>

          <p class="text-black">
            * Must be 8-80 characters, contain a number, lowercase, and uppercase letter
          </p>

          <p v-if="errorText" class="text-red-600">{{ errorText }}</p>
        </div>

        <!-- The disabled check is trivial because we're just checking already computed booleans -->
        <BaseButton
          class="flex flex-1 items-center justify-center fill-current bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-black"
          data-testid="sign-up-button"
          :disabled="
            !(
              emailValid &&
              passwordInputValid &&
              usernameValid &&
              register.password.value === register.passwordConfirm.value
            )
          "
          @click="signup"
        >
          Sign Up
        </BaseButton>
      </div>
    </CardBody>
  </Card>
</template>
