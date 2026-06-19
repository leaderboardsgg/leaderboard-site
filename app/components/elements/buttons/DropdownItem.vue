<script setup lang="ts">
import { inject, ref } from 'vue'
import type { SharedState } from './Dropdown.vue'

const emit = defineEmits<{
  (event: 'click'): void
}>()

const { setActive } = inject<SharedState>('active', {
  active: ref(false),
})

function hide() {
  if (setActive) {
    setActive(false)
  }
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

  &:first-child {
    @apply pt-3;
  }
}
</style>
