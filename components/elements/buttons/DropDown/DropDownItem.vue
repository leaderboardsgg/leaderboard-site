<script setup lang="ts" />

<template>
  <button class="container">
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
.container {
  @apply py-2 text-center hover:bg-gray-100;
}
.container:not(:last-child) {
  @apply border-gray-200 border-b;
}
</style>
