<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import BaseButton from '@/components/elements/buttons/BaseButton/BaseButton.vue'

interface HideShowPasswordState {
  hidden: boolean
}

const state: HideShowPasswordState = reactive({
  hidden: true,
})

const { hidden } = toRefs(state)

function toggleHidden() {
  state.hidden = !state.hidden
}
</script>
<script lang="ts">
export default { name: 'HideShowPassword' }
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
      v-show="hidden"
      class="w-5 h-5"
      data-testid="hidden-eye-icon"
    />
    <i-svg-eye-visible
      v-show="!hidden"
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
