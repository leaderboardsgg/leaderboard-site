<template>
  <div class="modal-wrapper">
    <div class="modal-container">
      <div class="modal-fade" @click.self="$emit('close')"></div>

      <div class="modal-content" @click.self="$emit('close')">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-wrapper {
  @apply fixed z-10 inset-0 overflow-y-auto;
}

.modal-container {
  @apply flex items-center min-h-screen p-5;
}

.modal-fade {
  @apply fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity;
}

.modal-content {
  @apply relative flex justify-center w-full;
}
</style>
