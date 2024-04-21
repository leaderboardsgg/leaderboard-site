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

interface Props {
  className?: string
}

defineProps<Props>()
</script>

<template>
  <!-- TODO: Come up with a good way to set active bg colour -->
  <div class="container">
    <BaseButton :class="className" @click="toggle">
      <div class="container__toggler">
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
