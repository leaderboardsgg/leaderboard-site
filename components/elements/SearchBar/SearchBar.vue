<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref<string>('')
const emit = defineEmits<{(e: 'search', value: string): void}>()

function onClick() {
  emit('search', inputValue.value)
}

function onEnter() {
  emit('search', inputValue.value)
}
</script>

<template>
  <div class="search-bar">
    <input
      v-model="inputValue"
      data-testid="search-input"
      name="search"
      placeholder="search..."
      @keyup.enter="onEnter"
    />
    <button data-testid="search-button" type="button" @click="onClick">
      <i-svg-search />
    </button>
  </div>
</template>

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
