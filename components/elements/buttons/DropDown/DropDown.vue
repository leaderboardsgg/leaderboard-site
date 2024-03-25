<script setup lang="ts">
import BaseButton from '../BaseButton/BaseButton.vue'

export interface SharedState {
  active: Ref<boolean>
}

const sharedState: SharedState = { active: ref(true) }
provide('state', sharedState)

function toggle() {
  sharedState.active.value = !sharedState.active.value
}

function dismiss() {
  sharedState.active.value = false
}
</script>

<template>
  <BaseButton
    class="button__toggler"
    @click="toggle"
    @keyup.enter="toggle"
    @keyup.space="toggle"
    @keyup.esc="dismiss"
  >
    <slot name="toggler">Toggle</slot>
  </BaseButton>
  <slot />
</template>

<style lang="postcss" scoped>
.button__toggler {
  @apply bg-slate-50 hover:bg-slate-200;
}
</style>
