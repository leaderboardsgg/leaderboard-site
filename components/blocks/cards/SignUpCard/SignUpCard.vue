<script setup lang="ts">
interface SignUpCardProps {
  modal?: boolean
}

interface SignUpCardState {
  showPassword: boolean
}

interface UserRegister {
  email: string
  password: string
  passwordConfirm: string
  username: string
}

const emit = defineEmits(['close', 'logInClick', 'signUpClick'])

const props = withDefaults(defineProps<SignUpCardProps>(), {
  modal: false,
})

const register = reactive<UserRegister>({
  email: '',
  password: '',
  passwordConfirm: '',
  username: '',
})

const state = reactive<SignUpCardState>({
  showPassword: false,
})

function signup() {
  register.email = ''
  register.password = ''
  register.passwordConfirm = ''
  register.username = ''
  state.showPassword = false

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
          v-model="register.email"
          name="email"
          type="text"
          placeholder="Email"
          autocomplete="email"
          data-testid="email-input"
        />

        <div class="signup-card__input-wrapper">
          <BaseInput
            v-model="register.username"
            name="username"
            type="text"
            placeholder="Username"
            autocomplete="nickname"
            data-testid="username-input"
          />
          <p>This can be changed later</p>
        </div>

        <div class="signup-card__input-wrapper">
          <div class="signup-card__password-wrapper">
            <BaseInput
              v-model="register.password"
              name="password"
              class="signup-card__password-field"
              :type="state.showPassword ? 'text' : 'password'"
              placeholder="Password"
              autocomplete="password"
              data-testid="password-input"
            />

            <BaseInput
              v-model="register.passwordConfirm"
              name="passwordConfirm"
              class="signup-card__password-field"
              :type="state.showPassword ? 'text' : 'password'"
              placeholder="Confirm"
              autocomplete="password"
              data-testid="password-confirm-input"
            />

            <HideShowPassword
              id="hide-show-password"
              type="button"
              data-testid="hide-show-button"
              @click="state.showPassword = !state.showPassword"
              @keydown.enter.prevent
              @keyup.enter="state.showPassword = !state.showPassword"
            />
          </div>

          <p>* Must be 8 characters with a mix of letters and numbers</p>
        </div>

        <BaseButton
          class="signup-button"
          data-testid="sign-up-button"
          @click="signup"
        >
          Sign Up
        </BaseButton>
      </div>

      <div class="signup-card__auth-buttons">
        <BaseButton class="signup-button">
          <i-svg-github class="mr-2 h-5 w-5" />

          <p>Sign Up with Github</p>
        </BaseButton>

        <BaseButton class="signup-button">
          <i-svg-google class="mr-2 h-5 w-5" />

          <p>Sign Up with Google</p>
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
    @apply flex flex-col space-y-3 pb-3 mb-3 border-b border-gray-300;
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

  & .signup-card__auth-buttons {
    @apply flex flex-col w-full space-y-2;
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
