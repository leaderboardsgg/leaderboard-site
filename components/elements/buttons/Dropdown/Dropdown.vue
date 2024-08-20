<script setup lang="ts">
import { provide, ref, type Ref } from 'vue'
import BaseButton from '../BaseButton/BaseButton.vue'

export interface SharedState {
  active: Ref<boolean>
  setActive?: (act: boolean) => void
}

const active = ref(false)

function setActive(act: boolean) {
  active.value = act
}

provide('active', { active, setActive })

function toggle() {
  active.value = !active.value
}

defineProps<{
  className?: string
}>()
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
          :class="active ? 'isOpen' : 'isClosed'"
        />
      </div>
    </BaseButton>
    <div
      v-if="active"
      data-testid="dropdown-content"
      class="container__content"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.container {
  @apply flex flex-col;

  & .container__button {
    @apply relative z-10;
  }

  & .container__toggler {
    @apply flex justify-center items-center gap-2;

    & img.isOpen {
      @apply rotate-180;
    }
  }

  & .container__content {
    @apply -mt-1;
  }
}
</style>
