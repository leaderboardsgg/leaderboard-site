<template>
  <transition
    enter-active-class="transition-opacity duration-200"
    leave-active-class="transition-opacity duration-200"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="visible" class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-fade"></div>
        <div ref="target" class="modal-content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { onClickOutside, useMagicKeys, whenever } from '@vueuse/core';

export default defineComponent({
  props: {
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
    dismissableMask: {
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  setup(props, { emit }) {
    const target = ref(null);
    const { escape } = useMagicKeys();

    onClickOutside(target, () => props.dismissableMask && emit('close'));

    whenever(
      () => escape?.value,
      () => props.closeOnEscape && emit('close'),
    );

    return { target };
  },
});
</script>

<style scoped>
.modal-wrapper {
  @apply fixed z-10 inset-0 overflow-y-auto;
}

.modal-container {
  @apply flex flex-row items-center justify-center min-h-screen p-5;
}

.modal-fade {
  @apply fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity;
}

.modal-content {
  @apply relative max-w-xl flex justify-center w-full;
}
</style>
