<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { isPasswordValid, passwordsAreTheSame } from 'lib/form_helpers'
import { toggleState } from 'lib/helpers'
import PasswordInput from 'elements/inputs/PasswordInput/PasswordInput.vue'
import HideShowPassword from 'elements/buttons/HideShowPassword/HideShowPassword.vue'
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'

interface RecoverAccountFormState {
  password: Ref<string>
  passwordConfirm: Ref<string>
}

const formState: RecoverAccountFormState = {
  password: ref(''),
  passwordConfirm: ref(''),
}

const state = {
  showPassword: ref(false),
}

const errorText = ref('')
const showErrorsText = ref(false)
const passwordInputValid = ref(true)
const passwordConfirmValid = ref(true)

function toggleShowPassword() {
  toggleState(state.showPassword)
}
</script>

<template>
  <div class="flex grow justify-center p-5">
    <div class="w-full rounded border-gray-300 p-5">
      <div class="form-wrapper">
        <h2 class="form-header">Please set a new password for your account.</h2>

        <div class="password-wrapper">
          <PasswordInput
            :model="formState.password"
            name="password"
            class="password-field"
            :style="{
              'border-color': !passwordInputValid ? 'rgb(185 28 28 / 1)' : '',
            }"
            :show-password="state.showPassword.value"
            placeholder="Password"
            autocomplete="password"
            data-testid="password-input"
            minlength="8"
            maxlength="80"
            @change="passwordInputValid = isPasswordValid(formState.password)"
            @hide-show-clicked="toggleShowPassword"
          />

          <PasswordInput
            :model="formState.passwordConfirm"
            name="passwordConfirm"
            class="password-field"
            :style="{
              'border-color': !passwordConfirmValid ? 'rgb(185 28 28 / 1)' : '',
            }"
            :show-password="state.showPassword.value"
            placeholder="Confirm"
            autocomplete="password"
            data-testid="password-confirm-input"
            minlength="8"
            maxlength="80"
            @change="
              passwordConfirmValid =
                passwordsAreTheSame(
                  formState.password,
                  formState.passwordConfirm,
                ) && isPasswordValid(formState.password)
            "
            @hide-show-clicked="toggleShowPassword"
          />

          <HideShowPassword
            id="hide-show-password"
            type="button"
            data-testid="hide-show-button"
            :hidden="state.showPassword.value"
            @click="toggleShowPassword"
            @keydown.enter="$event.preventDefault()"
            @keyup.enter="toggleShowPassword"
          />
        </div>

        <p>
          * Must be 8-80 characters, contain a number, lowercase, and uppercase
          letter
        </p>

        <p v-if="showErrorsText" class="text-red-600">{{ errorText }}</p>

        <div class="submit-button-container">
          <BaseButton
            class="submit-button"
            type="submit"
            :disabled="
              !(
                formState.password.value &&
                formState.passwordConfirm.value &&
                passwordInputValid &&
                passwordConfirmValid
              )
            "
          >
            Change Password
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.form-wrapper {
  @apply relative flex flex-col justify-center inset-0 h-full sm:max-w-xl mx-auto;

  .form-header {
    @apply text-xl border-2 border-transparent border-b-gray-300 pb-4 mb-4;
  }
}

.password-wrapper {
  @apply flex flex-col mb-4;

  .password-input {
    @apply py-2;
  }
}

.submit-button-container {
  @apply relative h-1/4 w-full flex items-center justify-center mt-4;

  .submit-button {
    @apply w-full fill-current bg-gray-100 text-gray-900 hover:bg-gray-200;
  }
}
</style>
