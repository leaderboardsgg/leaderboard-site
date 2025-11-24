<script setup lang="ts">
import type { NuxtError } from '#app'
import { clearError } from '#imports'
import BaseButton from './components/elements/buttons/BaseButton/BaseButton.vue'

defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object as () => NuxtError,
})

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div
    class="flex flex-col gap-1 w-[100vw] h-[100vh] items-center justify-center"
  >
    <h1 class="font-bold">[HTTP Status Code: {{ error?.statusCode }}]</h1>
    <h2 class="mb-2">
      {{ error }}
    </h2>

    <BaseButton class="error-navigation-button" @click="handleError">
      {{ $t('errorNavigateHome') }}
    </BaseButton>
  </div>
</template>

<style lang="postcss" scoped>
.error-navigation-button {
  @apply bg-gray-100 hover:bg-black mx-1 py-1 text-opacity-70 hover:text-white;
}
</style>
