<script setup lang="ts">
// blargh
</script>

<template>
  <NuxtLink class="button-link" v-bind="$attrs" data-testid="button-link">
    <slot>Placeholder Link Text</slot>
  </NuxtLink>
</template>

<style lang="postcss" scoped>
.button-link {
  @apply rounded px-3 py-2 text-current hover:bg-current;
}
</style>
