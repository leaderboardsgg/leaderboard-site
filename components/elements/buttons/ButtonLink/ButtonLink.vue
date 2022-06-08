<script setup lang="ts" />

<template>
  <NuxtLink class="button-link" v-bind="$attrs">
    <slot>Placeholder Link Text</slot>
  </NuxtLink>
</template>

<style lang="postcss" scoped>
.button-link {
  @apply rounded px-3 py-2 text-current hover:bg-current;
}
</style>
