<script setup lang="ts">
import BaseButton from '@/components/elements/buttons/BaseButton/BaseButton.vue'
</script>
<script lang="ts">
export default { name: 'CloseButton' }
</script>

<template>
  <BaseButton class="close-button" v-bind="$attrs">
    <i-svg-close class="w-5 h-5" />
  </BaseButton>
</template>

<style lang="postcss" scoped>
.close-button {
  @apply fill-current bg-gray-100 text-gray-900 hover:bg-gray-200;
}
</style>
