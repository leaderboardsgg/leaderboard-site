<script setup lang="ts" />

<template>
  <button class="container">
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
.container {
  @apply py-2 text-center border-b border-gray-200 hover:bg-gray-100;
}
.container:last-child {
  @apply border-b-0;
}
</style>
