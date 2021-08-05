<template>
  <div class="search-bar">
    <input
      data-testid="search-input"
      name="search"
      placeholder="search..."
      @keyup.enter="onEnter"
    />
    <button data-testid="search-button" type="submit" @click="onClick">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    onSubmit: {
      default: () => console.log('submit'), // eslint-disable-line no-console
      type: Function,
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

<style scoped>
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
