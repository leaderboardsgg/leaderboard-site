<template>
  <div class="search-bar">
    <input
      data-testid="search-input"
      name="search"
      placeholder="search..."
      @keyup.enter="onEnter"
    />
    <button data-testid="search-button" type="submit" @click="onClick">
      <svg-icon name="search" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'SearchBar',
  props: {
    onSubmit: {
      default: () => console.log('submit'), // eslint-disable-line no-console
      type: Function as PropType<() => void>,
    },
  },
  methods: {
    onClick() {
      this.$props.onSubmit();
    },
    onEnter() {
      this.$props.onSubmit();
    },
  },
});
</script>

<style lang="postcss" scoped>
.search-bar {
  @apply flex items-center px-2 relative text-gray-300 w-full;
}

.search-bar > input {
  @apply border border-current rounded bg-white w-full pr-12 px-4 py-1 focus:outline-none;
}

.search-bar > button {
  @apply absolute right-4 text-current;
}

.search-bar > button > svg {
  @apply h-5 w-5 stroke-current;
}
</style>
