<script setup lang="ts">
import type { CategoryViewModel } from '~/lib/api/data-contracts'

interface CategoryInfoProps {
  category: CategoryViewModel
}

defineProps<CategoryInfoProps>()
</script>
<template>
  <div class="flex max-w-[330px] flex-col p-6">
    <h2 class="text-lg font-semibold">{{ category.name }}</h2>
    <h3 class="mt-6 font-medium">Run Type Description</h3>
    <p class="text-xs">
      {{ category.info || '-' }}
    </p>
    <h3 class="mt-6 font-medium">Run Type Rules</h3>
    <p class="text-xs">
      {{ category.info || '-' }}
    </p>
    <!-- TODO: Create Create Run page and add link to that page -->
    <ButtonLink
      class="mt-12 w-fit rounded border border-yellow-400 px-9 py-3 text-xl font-semibold capitalize"
    >
      Submit A Run
    </ButtonLink>
  </div>
</template>
