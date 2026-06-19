<script lang="ts" setup>
import type { CategoryViewModel } from '~~/lib/api/data-contracts'

interface CategoryInfo {
  category: CategoryViewModel
}

const props = defineProps<CategoryInfo>()
</script>

<template>
  <div class="justify-self-end">Run Type: {{ props.category.type }}</div>
  <aside class="col-span-2">
    <h2 class="text-xl">Category Description</h2>
    <span>{{ props.category.info || '-' }}</span>
  </aside>
</template>

<style lang="postcss" scoped>
.active {
  @apply border-red-500 text-red-500;
}
</style>
