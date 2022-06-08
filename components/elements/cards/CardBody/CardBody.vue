<script setup lang="ts" />
<script lang="ts">
export default { name: 'CardBody' }
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
