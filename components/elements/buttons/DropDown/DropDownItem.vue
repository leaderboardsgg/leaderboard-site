<script setup lang="ts">
import { inject, ref } from 'vue'
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
  <button class="container" data-testid="container" @click="hide">
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
.container {
  @apply py-2 text-center border border-t-0 border-gray-200 hover:bg-gray-100;

  &:first {
    @apply pt-4;
  }
}
</style>
