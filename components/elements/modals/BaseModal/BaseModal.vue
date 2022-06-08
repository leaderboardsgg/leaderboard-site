<script setup lang="ts" />
<script lang="ts">
export default { name: 'BaseModal' }
</script>

<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__container">
        <button
          class="modal-fade"
          type="button"
          @click.self="$emit('close')"
          @keypress.esc="$emit('close')"
        />

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
    @apply fixed z-10 inset-0 overflow-y-auto;
  }
  & .modal__container {
    @apply flex items-center min-h-screen p-5;
  }
  & .modal__content {
    @apply relative flex justify-center w-full;
  }
}
.modal-fade {
  all: unset;
  @apply fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity;
}
</style>
