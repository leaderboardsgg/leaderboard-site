<script setup lang="ts">
import { ref, watch } from 'vue'
import BaseInput from '~/components/elements/inputs/BaseInput.vue'

interface PasswordInputProps {
  showPassword: boolean
  testId?: string
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
  <div class="relative flex flex-col w-full">
    <BaseInput
      id="password"
      class="bg-white pr-12"
      autocomplete="password"
      :data-testid="testId"
      :type="inputType"
      v-bind="$attrs"
    />
  </div>
</template>
