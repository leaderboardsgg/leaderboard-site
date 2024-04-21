<script setup lang="ts">
import type { SharedState } from './DropDown.vue'

const sharedState: SharedState = inject('state', { active: ref(false) })

const emit = defineEmits<{
  (event: 'click'): void
}>()

function toggle() {
  sharedState.active.value = false
  emit('click')
}
</script>

<template>
  <button class="container" @click="toggle">
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
.container {
  @apply py-2 text-center border-b border-gray-200 hover:bg-gray-100;

  &:last-child {
    @apply border-b-0;
  }
}
</style>
