<script setup lang="ts">
import BaseButton from '../BaseButton/BaseButton.vue'

export interface SharedState {
  active: Ref<boolean>
}

const sharedState: SharedState = { active: ref(false) }
provide('state', sharedState)

function toggle() {
  sharedState.active.value = !sharedState.active.value
}
</script>

<template>
  <!-- TODO: Come up with a good way to set active bg colour -->
  <BaseButton v-bind="$attrs" @click="toggle">
    <div class="container">
      More
      <img
        src="/icons/arrows/down.svg"
        alt="Dropdown arrow"
        width="10"
        :class="sharedState.active.value && 'selected'"
      />
    </div>
  </BaseButton>
  <slot />
</template>

<style lang="postcss" scoped>
.container {
  @apply flex flex-row justify-center items-center gap-2;

  & img.selected {
    @apply rotate-180;
  }
}
</style>
