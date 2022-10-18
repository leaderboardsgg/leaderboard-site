<script setup lang="ts">
// blargh
</script>

<template>
  <div class="card-body" v-bind="$attrs">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.card-body {
  @apply p-3;
}
</style>
