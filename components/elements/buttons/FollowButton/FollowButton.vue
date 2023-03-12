<script setup lang="ts">
import { withDefaults } from 'vue'

interface FollowButtonProps {
  onClick: () => void
}

withDefaults(defineProps<FollowButtonProps>(), {
  onClick: () => () => 2,
})
</script>

<template>
  <button
    class="follow-button"
    v-bind="$attrs"
    @click="onClick"
    @keyup.enter="onClick"
  >
    Follow
  </button>
</template>

<style lang="postcss" scoped>
.follow-button {
  @apply px-3 py-2 text-center border border-current rounded border-gray-300 hover:bg-gray-100;
}
</style>
