<script setup lang="ts">
import { type Ref, ref } from 'vue'
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
import BaseInput from 'elements/inputs/BaseInput/BaseInput.vue'

const emit = defineEmits<{ (e: 'search', value: string): void }>()

interface SearchBarState {
  input: Ref<string>
}

const state: SearchBarState = {
  input: ref(''),
}

function onClick() {
  emit('search', state.input.value)
}

function onEnter() {
  emit('search', state.input.value)
}
</script>

<template>
  <div class="search-bar">
    <BaseButton data-testid="search-button" type="button" @click="onClick">
      <i-svg-search />
    </BaseButton>
    <BaseInput
      :model="state.input"
      data-testid="search-input"
      name="search"
      :placeholder="$t('searchPlaceholder')"
      @keyup.enter="onEnter"
    />
  </div>
</template>

<style lang="postcss" scoped>
.search-bar {
  @apply flex items-center px-2 relative;
}

.search-bar > input {
  @apply border border-yellow-500 rounded bg-black w-fit pl-12 px-4 focus:outline-none;
}

.search-bar > input::placeholder {
  @apply text-white;
}

.search-bar > button {
  @apply absolute left-4 hover:bg-transparent;
}

.search-bar > button > svg {
  @apply h-5 w-5 stroke-gray-300 hover:stroke-white;
}
</style>
