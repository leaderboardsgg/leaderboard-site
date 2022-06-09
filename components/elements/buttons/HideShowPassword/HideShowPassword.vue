<script setup lang="ts">
import { reactive, toRef } from 'vue'
import BaseButton from '@/components/elements/buttons/BaseButton/BaseButton.vue'

interface HideShowPasswordState {
  hidden: boolean
}

const state: HideShowPasswordState = reactive({
  hidden: true,
})

const hiddenRef = toRef(state, 'hidden')

function toggleHidden() {
  hiddenRef.value = !hiddenRef.value
}
</script>

<template>
  <BaseButton
    id="hide-show-password"
    data-testid="hide-show-password-button"
    class="button"
    v-bind="$attrs"
    @click="toggleHidden"
    @keyup.enter="toggleHidden"
  >
    <i-svg-eye-hidden
      v-show="hiddenRef"
      class="w-5 h-5"
      data-testid="hidden-eye-icon"
    />
    <i-svg-eye-visible
      v-show="!hiddenRef"
      class="w-5 h-5"
      data-testid="visible-eye-icon"
    />
  </BaseButton>
</template>

<style lang="postcss" scoped>
.button {
  @apply hidden sm:inline bg-white;
}
</style>
