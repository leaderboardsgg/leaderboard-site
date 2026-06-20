<script setup lang="ts">
import { type Ref, ref } from 'vue'
import BaseButton from 'elements/buttons/BaseButton.vue'
import BaseInput from '~/components/elements/inputs/BaseInput.vue'

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
  <div class="flex items-center px-2 relative w-full">
    <BaseButton data-testid="search-button" type="button" @click="onClick">
      <i-svg-search />
    </BaseButton>
    <BaseInput
      :model="state.input"
      class="border border-gray-300 rounded bg-white w-full pr-12 px-4 py-1 focus:outline-none"
      data-testid="search-input"
      name="search"
      placeholder="search..."
      @keyup.enter="onEnter"
    />
    <BaseButton
      data-testid="search-button"
      type="button"
      class="absolute right-4 hover:bg-transparent"
      @click="onClick"
    >
      <i-svg-search class="h-5 w-5 stroke-gray-300 hover:stroke-black" />
    </BaseButton>
  </div>
</template>
