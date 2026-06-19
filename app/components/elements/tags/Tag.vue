<script setup lang="ts"></script>

<template>
  <div class="tag" v-bind="$attrs">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.tag {
  @apply bg-gray-100 rounded-md text-center p-1 text-sm;
}
</style>
