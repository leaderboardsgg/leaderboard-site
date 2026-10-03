<script setup lang="ts">
import { provide, ref, type Ref } from 'vue'
import BaseButton from './BaseButton.vue'

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
  <div class="flex flex-col">
    <BaseButton data-testid="toggler" :class="[className, 'relative', 'z-10']" @click="toggle">
      <div class="flex justify-center items-center gap-2">
        More
        <img
          src="/icons/arrows/down.svg"
          alt="Dropdown arrow"
          width="10"
          data-testid="arrow"
          :class="active ? 'rotate-180' : ''"
        />
      </div>
    </BaseButton>
    <div v-if="active" data-testid="dropdown-content" class="-mt-1">
      <slot />
    </div>
  </div>
</template>
