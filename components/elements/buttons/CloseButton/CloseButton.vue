<script setup lang="ts">
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
</script>

<template>
  <BaseButton class="close-button" v-bind="$attrs">
    <i-svg-close class="size-5" />
  </BaseButton>
</template>

<style lang="postcss" scoped>
.close-button {
  @apply fill-current bg-gray-100 text-gray-900 hover:bg-gray-200;
}
</style>
