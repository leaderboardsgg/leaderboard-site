<script setup lang="ts" />

<template>
  <BaseButton class="close-button" v-bind="$attrs">
    <i-svg-close class="h-5 w-5" />
  </BaseButton>
</template>

<style lang="postcss" scoped>
.close-button {
  @apply fill-current bg-gray-100 text-gray-900 hover:bg-gray-200;
}
</style>
