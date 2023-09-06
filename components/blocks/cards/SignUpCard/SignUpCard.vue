<script setup lang="ts">
import { type Ref, ref } from 'vue'
import BaseInput from 'elements/inputs/BaseInput/BaseInput.vue'
import HideShowPassword from 'elements/buttons/HideShowPassword/HideShowPassword.vue'
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
import CloseButton from 'elements/buttons/CloseButton/CloseButton.vue'
import Card from 'elements/cards/Card/Card.vue'
import CardHeader from 'elements/cards/CardHeader/CardHeader.vue'
import CardBody from 'elements/cards/CardBody/CardBody.vue'
import { useLoginUser, useRegisterUser } from 'composables/api'

interface SignUpCardProps {
  modal?: boolean
}

interface SignUpCardState {
  showPassword: Ref<boolean>
}

interface UserRegister {
  email: Ref<string>
  password: Ref<string>
  passwordConfirm: Ref<string>
  username: Ref<string>
}

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'logInClick'): void
  (event: 'signUpClick'): void
}>()

const props = withDefaults(defineProps<SignUpCardProps>(), {
  modal: false,
})

const register: UserRegister = {
  email: ref(''),
  password: ref(''),
  passwordConfirm: ref(''),
  username: ref(''),
}

const state: SignUpCardState = {
  showPassword: ref(false),
}

const errorText = ref('')
const showErrorsText = ref(false)
const emailValid = ref(true)
const passwordInputValid = ref(true)
const passwordConfirmValid = ref(true)
const usernameValid = ref(true)

// Regex(s) //
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
// Taken from: https://emailregex.com/index.html
const emailRegex =
  // eslint-disable-next-line
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Below is our username specification :)
// A valid username must not contain fewer than 2 characters.
// A valid username must not contain greater than 25 characters.
// A valid username must not contain any single character that is not alphanumeric, a hyphen, an underscore, or an apostrophe.
// A valid username must not contain any hyphens, underscores, or apostrophes that are not immediately and individually preceded and followed by one or more alphanumeric characters.
const usernameRegex = /^(?:[a-zA-Z0-9]+[-_']?[a-zA-Z0-9]+)+$/

function isPasswordValid() {
  // password length between 8-80 characters
  // must contain a number, uppercase, and lowercase letter
  return (
    passwordRegex.test(register.password.value) &&
    register.password.value.length > 7 &&
    register.password.value.length < 81
  )
}

function isUsernameValid() {
  return (
    usernameRegex.test(register.username.value) &&
    register.username.value.length > 1 &&
    register.username.value.length < 26
  )
}

function passwordsAreTheSame() {
  return register.password.value === register.passwordConfirm.value
}

async function signup() {
  showErrorsText.value = false
  await useRegisterUser(
    {
      email: register.email.value,
      password: register.password.value,
      username: register.username.value,
    },
    {
      onError: (val: any) => {
        errorText.value = `Error(s): ${(
          Object.values(val.error.errors) as string[]
        ).reduce(
          (accumulator: string, val: string) => `${accumulator} ${val}`,
          '',
        )}`
        showErrorsText.value = true
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
        state.showPassword.value = false
        emit('close')
      },
    },
  )

  emit('signUpClick')
}
</script>

<template>
  <Card id="signUpCard" data-testid="sign-up-card" class="signup-card">
    <CardHeader class="signup-card__header">
      <BaseButton
        id="login-button"
        class="signup-card__login-button"
        data-testid="login-button"
        @click="emit('logInClick')"
      >
        Log In
      </BaseButton>

      <div class="signup-card__title">Sign Up</div>

      <CloseButton
        v-show="props.modal"
        data-testid="close-button"
        @click.prevent="emit('close')"
      />
    </CardHeader>

    <CardBody>
      <div class="signup-card__body-wrapper">
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
          @change="emailValid = emailRegex.test(register.email.value)"
        />

        <div class="signup-card__input-wrapper">
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
            @change="usernameValid = isUsernameValid()"
          />
        </div>

        <div class="signup-card__input-wrapper">
          <div class="signup-card__password-wrapper">
            <BaseInput
              :model="register.password"
              name="password"
              class="signup-card__password-field"
              :style="{
                'border-color': !passwordInputValid ? 'rgb(185 28 28 / 1)' : '',
              }"
              :type="state.showPassword.value ? 'text' : 'password'"
              placeholder="Password"
              autocomplete="password"
              data-testid="password-input"
              minlength="8"
              maxlength="80"
              @change="passwordInputValid = isPasswordValid()"
            />

            <BaseInput
              :model="register.passwordConfirm"
              name="passwordConfirm"
              class="signup-card__password-field"
              :style="{
                'border-color': !passwordConfirmValid
                  ? 'rgb(185 28 28 / 1)'
                  : '',
              }"
              :type="state.showPassword.value ? 'text' : 'password'"
              placeholder="Confirm"
              autocomplete="password"
              data-testid="password-confirm-input"
              minlength="8"
              maxlength="80"
              @change="
                passwordConfirmValid =
                  passwordsAreTheSame() && isPasswordValid()
              "
            />

            <HideShowPassword
              id="hide-show-password"
              type="button"
              data-testid="hide-show-button"
              @click="state.showPassword.value = !state.showPassword.value"
              @keydown.enter.prevent=""
              @keyup.enter="
                state.showPassword.value = !state.showPassword.value
              "
            />
          </div>

          <p>
            * Must be 8-80 characters, contain a number, lowercase, and
            uppercase letter
          </p>

          <p v-if="showErrorsText" class="text-red-600">{{ errorText }}</p>
        </div>

        <!-- The disabled check is trivial because we're just checking already computed booleans -->
        <BaseButton
          class="signup-button"
          data-testid="sign-up-button"
          :disabled="
            !(
              register.email.value &&
              register.password.value &&
              register.passwordConfirm.value &&
              register.username.value &&
              passwordConfirmValid &&
              passwordInputValid &&
              emailValid &&
              usernameValid
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

<style lang="postcss" scoped>
.signup-card {
  @apply bg-white w-full max-w-xl;

  & .signup-card__header {
    @apply flex flex-row space-x-3;
  }

  & .signup-card__title {
    @apply flex flex-1 justify-center px-3 py-2 rounded bg-gray-100 text-gray-900;
  }

  & .signup-card__login-button {
    @apply flex flex-1 justify-center bg-white text-gray-900 border border-gray-300;
  }

  & .signup-card__body-wrapper {
    @apply flex flex-col space-y-3 pb-3 mb-3;
  }

  & .signup-card__input-wrapper {
    @apply flex flex-1 flex-col space-y-1;
  }

  & .signup-card__password-wrapper {
    @apply flex flex-1 flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2;
  }

  & .signup-card__password-field {
    @apply grow sm:w-full md:w-9/12;
  }

  & p {
    @apply text-sm;
  }
}

#hide-show-password {
  @apply text-gray-700 hover:bg-gray-100;
}

#login-button {
  @apply hover:bg-gray-100;
}

.signup-button {
  @apply flex flex-1 items-center justify-center fill-current bg-gray-100 text-gray-900 hover:bg-gray-200;
}
</style>
