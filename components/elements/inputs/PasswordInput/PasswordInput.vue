<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseInput from 'elements/inputs/BaseInput/BaseInput.vue'

interface PasswordInputProps {
  showPassword: boolean
}

const props = defineProps<PasswordInputProps>()

const inputType = ref('password')

watch(
  () => props.showPassword,
  () => toggleShowPassword(),
)

function toggleShowPassword() {
  if (props.showPassword) {
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
