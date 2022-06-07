<script setup lang="ts" />
<script lang="ts">
export default { name: 'BaseButton' }
</script>

<template>
  <button class="button" v-bind="$attrs">
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
.button {
  @apply rounded px-3 py-2 text-current hover:bg-current;
}
</style>
