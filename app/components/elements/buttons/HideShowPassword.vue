<script setup lang="ts">
import { toRef, reactive } from 'vue'
import BaseButton from 'elements/buttons/BaseButton.vue'

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
    class="hidden sm:inline bg-white"
    v-bind="$attrs"
    @click="toggleHidden"
    @keyup.enter="toggleHidden"
  >
    <i-svg-eye-hidden v-show="hiddenRef" class="size-5" data-testid="hidden-eye-icon" />
    <i-svg-eye-visible v-show="!hiddenRef" class="size-5" data-testid="visible-eye-icon" />
  </BaseButton>
</template>
