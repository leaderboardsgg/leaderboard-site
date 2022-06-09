<script setup lang="ts">
import { defineEmits } from 'vue'
import BaseButton from '@/components/elements/buttons/BaseButton/BaseButton.vue'

const emit = defineEmits(['close'])
</script>

<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__container">
        <BaseButton
          class="modal__close-button"
          data-testid="modal-close-button"
          type="button"
          @click="emit('close')"
          @keypress.esc="emit('close')"
        >
          <i-svg-close class="w-5 h-5" />
        </BaseButton>

        <div class="modal__content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.modal {
  & .modal__wrapper {
    @apply fixed z-10 inset-0 overflow-y-auto bg-gray-900 bg-opacity-50 transition-opacity;
  }
  & .modal__container {
    @apply flex items-center min-h-screen p-5;
  }
  & .modal__content {
    @apply relative flex justify-center w-full;
  }
}

.modal__close-button {
  @apply absolute top-2 left-2 p-1 bg-gray-100 bg-opacity-50 hover:bg-gray-100 hover:bg-opacity-75;
}
</style>
