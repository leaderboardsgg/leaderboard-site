<script setup lang="ts">
import { inject } from 'vue'
import type { SharedState } from './DropDown.vue'
const sharedState: SharedState = inject('state', { active: ref(false) })
</script>

<template>
  <div v-if="sharedState.active.value" class="drop-down-content__container">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.drop-down-content__container {
  @apply border border-gray-200 rounded;
}
</style>
