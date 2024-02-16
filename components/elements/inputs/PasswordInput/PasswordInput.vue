<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from 'elements/inputs/BaseInput/BaseInput.vue'
import HideShowPassword from 'elements/buttons/HideShowPassword/HideShowPassword.vue'

const showPassword = ref(false)
const inputType = ref('password')

function toggleShowPassword() {
  showPassword.value = !showPassword.value
  if (showPassword.value) {
    inputType.value = 'text'
  } else {
    inputType.value = 'password'
  }
}
</script>

<template>
  <div class="password-input">
    <BaseInput
      id="password"
      autocomplete="password"
      :type="inputType"
      v-bind="$attrs"
    />

    <div class="button-wrapper">
      <HideShowPassword
        id="hide-show-button"
        data-testid="hide-show-button"
        @click="toggleShowPassword"
        @keydown.enter="$event.preventDefault()"
        @keyup.enter="toggleShowPassword"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.password-input {
  @apply relative flex flex-col w-full;

  & #password {
    @apply bg-white pr-12;
  }

  & .button-wrapper {
    @apply absolute top-0 right-0 flex items-center h-full;

    & #hide-show-button {
      @apply text-gray-700 hover:bg-gray-100;
      @apply p-1 mr-2 rounded fill-current;
    }
  }
}
</style>
