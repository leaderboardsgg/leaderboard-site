<script setup lang="ts"></script>

<template>
  <div class="card-header" v-bind="$attrs">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.card-header {
  @apply p-3 border-b border-gray-300;
}
</style>
