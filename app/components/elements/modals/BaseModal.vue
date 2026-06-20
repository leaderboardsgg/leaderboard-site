<script setup lang="ts">
const emit = defineEmits<{
  (event: 'close'): void
}>()
</script>

<template>
  <div class="modal">
    <div class="fixed z-10 inset-0 overflow-y-auto transition-opacity bg-gray-900/50 ]">
      <div class="flex items-center min-h-screen p-5">
        <div class="relative flex justify-center w-full">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
