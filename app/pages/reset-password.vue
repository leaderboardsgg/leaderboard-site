<script setup lang="ts">
import { computed, type Ref, ref } from 'vue'
import { isPasswordValid, renderErrors } from 'lib/form_helpers'
import { toggleState } from 'lib/helpers'
import PasswordInput from '~/components/elements/inputs/PasswordInput.vue'
import BaseButton from 'elements/buttons/BaseButton.vue'
import { useRoute, navigateTo } from '#app'
import { definePageMeta, useModalAlert } from '#imports'
import useChangePassword from '~/composables/api/useChangePassword'

definePageMeta({
  middleware: 'reset-password',
})

interface RecoverAccountFormState {
  password: Ref<string>
  passwordConfirm: Ref<string>
}

const route = useRoute()
const resetPasswordCode = route.query?.code as string

const formState: RecoverAccountFormState = {
  password: ref(''),
  passwordConfirm: ref(''),
}

const showPassword = ref(false)
const errorText = ref('')
const showErrorsText = ref(false)

const passwordInputValid = computed(() => isPasswordValid(formState.password.value))

const passwordConfirmValid = computed(
  () =>
    formState.password.value === formState.passwordConfirm.value &&
    isPasswordValid(formState.passwordConfirm.value),
)

const { showAlert } = useModalAlert()

async function changePassword() {
  showErrorsText.value = false
  await useChangePassword(
    resetPasswordCode,
    { password: formState.password.value },
    {
      onError: (response: any) => {
        if (response.error && response.error?.errors) {
          const errors = Object.values(response.error.errors) as string[][]
          errorText.value = renderErrors(errors)
        } else {
          switch (response.status) {
            case 404:
              errorText.value = 'Reset link has expired. Please request a new link'
              break
            case 409:
              errorText.value = 'Password cannot be the same as the existing password'
              break
            default:
              errorText.value = 'Something went wrong. Reach out to support if the problem persists'
          }
        }
        showErrorsText.value = true
      },
      onOkay: () => {
        showAlert({
          body: 'Password changed successfully',
          onClose: () => navigateTo('/', { replace: true }),
          title: 'Success!',
          type: 'success',
        })
      },
    },
  )
}

function toggleShowPassword() {
  toggleState(showPassword)
}
</script>

<template>
  <div class="flex grow justify-center p-5">
    <div class="w-full rounded border-gray-300 p-5">
      <div class="relative flex flex-col justify-center inset-0 h-full sm:max-w-xl mx-auto">
        <h2 class="text-xl border-2 border-transparent border-b-gray-300 pb-4 mb-4">
          Please set a new password for your account.
        </h2>

        <div class="flex flex-col mb-4">
          <PasswordInput
            :model="formState.password"
            name="password"
            class="password-field"
            :style="{
              'border-color': !passwordInputValid ? 'rgb(185 28 28 / 1)' : '',
            }"
            placeholder="Password"
            autocomplete="password"
            data-testid="password-input"
            minlength="8"
            maxlength="80"
            :show-password="showPassword"
            @hide-show-clicked="toggleShowPassword"
          />

          <PasswordInput
            :model="formState.passwordConfirm"
            name="passwordConfirm"
            class="password-field"
            :style="{
              'border-color': !passwordConfirmValid ? 'rgb(185 28 28 / 1)' : '',
            }"
            placeholder="Confirm"
            autocomplete="password"
            data-testid="password-confirm-input"
            minlength="8"
            maxlength="80"
            :show-password="showPassword"
            @hide-show-clicked="toggleShowPassword"
          />
        </div>

        <p>* Must be 8-80 characters, contain a number, lowercase, and uppercase letter</p>

        <p v-if="showErrorsText" class="text-red-600">{{ errorText }}</p>

        <div class="relative h-1/4 w-full flex items-center justify-center mt-4">
          <BaseButton
            class="w-full fill-current bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            type="submit"
            :disabled="!(passwordInputValid && passwordConfirmValid)"
            @click.prevent="changePassword"
          >
            Change password
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
