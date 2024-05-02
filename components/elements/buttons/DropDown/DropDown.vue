<script setup lang="ts">
// Explicitly-importing these because tests don't like the auto-imports - zysim
import { provide, ref } from 'vue'
import BaseButton from '../BaseButton/BaseButton.vue'

export interface SharedState {
  active: Ref<boolean>
}

const state: SharedState = { active: ref(false) }

provide('state', state)

function toggle() {
  state.active.value = !state.active.value
}

interface Props {
  className?: string
}

defineProps<Props>()
</script>

<template>
  <!-- TODO: Come up with a good way to set active bg colour -->
  <div class="container">
    <BaseButton
      data-testid="toggler"
      :class="[className, 'container__button']"
      @click="toggle"
    >
      <div class="container__toggler">
        More
        <img
          src="/icons/arrows/down.svg"
          alt="Dropdown arrow"
          width="10"
          data-testid="arrow"
          :class="state.active.value && 'selected'"
        />
      </div>
    </BaseButton>
    <div
      v-if="state.active.value"
      data-testid="dropdown-content"
      class="container__content"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.container {
  @apply flex flex-col;

  & .container__toggler {
    @apply flex justify-center items-center gap-2;

    & img.selected {
      @apply rotate-180;
    }
  }
}
</style>
