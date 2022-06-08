<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/elements/buttons/BaseButton/BaseButton.vue'
import BaseInput from '@/components/elements/inputs/BaseInput/BaseInput.vue'

const inputValue = ref<string>('')
const emit = defineEmits<{ (e: 'search', value: string): void }>()

function onClick() {
  emit('search', inputValue.value)
}

function onEnter() {
  emit('search', inputValue.value)
}
</script>

<template>
  <div class="search-bar">
    <BaseInput
      v-model="inputValue"
      data-testid="search-input"
      name="search"
      placeholder="search..."
      @keyup.enter="onEnter"
    />
    <BaseButton data-testid="search-button" type="button" @click="onClick">
      <i-svg-search />
    </BaseButton>
  </div>
</template>

<style lang="postcss" scoped>
.search-bar {
  @apply flex items-center px-2 relative w-full;
}

.search-bar > input {
  @apply border border-gray-300 rounded bg-white w-full pr-12 px-4 py-1 focus:outline-none;
}

.search-bar > input::placeholder {
  @apply text-gray-300;
}

.search-bar > button {
  @apply absolute right-4 hover:bg-transparent;
}

.search-bar > button > svg {
  @apply h-5 w-5 stroke-gray-300 hover:stroke-black;
}
</style>
