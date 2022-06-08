<script setup lang="ts" />
<script lang="ts">
export default { name: 'Card' }
</script>

<template>
  <div class="card" v-bind="$attrs">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.card {
  @apply rounded border border-gray-300;
}
</style>
