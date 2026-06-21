<script setup lang="ts">
const emit = defineEmits<{
  (event: 'follow'): void
}>()
</script>

<template>
  <button
    class="px-3 py-2 text-center border border-current rounded border-gray-300 hover:bg-gray-100"
    v-bind="$attrs"
    @click="emit('follow')"
    @keyup.enter="emit('follow')"
  >
    Follow
  </button>
</template>
