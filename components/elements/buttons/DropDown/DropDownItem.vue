<script setup lang="ts">
import type { SharedState } from './DropDown.vue'

const emit = defineEmits<{
  (event: 'click'): void
}>()

const state: SharedState = inject('state', { active: ref(false) })

function hide() {
  state.active.value = false
  emit('click')
}
</script>

<template>
  <button
    :class="['container', state.active.value && 'selected']"
    @click="hide"
  >
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
