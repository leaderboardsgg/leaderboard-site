<template>
  <input v-model="model" class="input" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
  },
  setup(props, { emit }) {
    const model = computed({
      get(): any {
        return props.value;
      },
      set(value: any): void {
        emit('input', value);
      },
    });

    return {
      model,
    };
  },
});
</script>

<style scoped>
.input {
  @apply border border-gray-300 rounded px-3 py-2 focus:outline-none;
}
</style>
