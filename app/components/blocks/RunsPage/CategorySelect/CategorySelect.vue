<script lang="ts" setup>
import ButtonLink from '~/components/elements/buttons/ButtonLink/ButtonLink.vue'
import type { CategoryViewModel } from '~~/lib/api/data-contracts'

interface CategorySelect {
  categories: CategoryViewModel[]
  activeCategory: CategoryViewModel
}

const props = defineProps<CategorySelect>()

function isActiveCategorySlug(slug: string) {
  return props.activeCategory.slug.toLocaleLowerCase() === slug
}
</script>

<template>
  <div class="grid grid-cols-2 gap-6 p-6">
    <div class="flex gap-3">
      <ButtonLink
        v-for="{ name, slug, id } of categories"
        :key="id"
        :name="name"
        :to="`?category=${slug}`"
        :class="{ active: isActiveCategorySlug(slug) }"
        class="border border-white px-6 py-3 text-xs text-white"
      >
        {{ name }}
      </ButtonLink>
    </div>
    <div class="justify-self-end">Run Type: {{ activeCategory?.type }}</div>
    <aside class="col-span-2">
      <h2 class="text-xl">Category Description</h2>
      <span>{{ activeCategory?.info || '-' }}</span>
    </aside>
    <ButtonLink class="w-fit !bg-white !text-black">
      Submit your run!
    </ButtonLink>
  </div>
</template>

<style lang="postcss" scoped>
.active {
  @apply border-red-500 text-red-500;
}
</style>
