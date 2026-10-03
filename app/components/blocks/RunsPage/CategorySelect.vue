<script lang="ts" setup>
import ButtonLink from '~/components/elements/buttons/ButtonLink.vue'
import type { CategoryViewModel } from '~~/lib/api/data-contracts'

interface CategorySelect {
  categories: CategoryViewModel[]
  activeCategorySlug: string
}

const props = defineProps<CategorySelect>()
</script>

<template>
  <div class="flex gap-3">
    <ButtonLink
      v-for="{ name, slug, id } of props.categories"
      :key="id"
      :name="name"
      :to="`#${slug}`"
      :class="
        activeCategorySlug === slug
          ? 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
          : 'hover:bg-white hover:text-black'
      "
      class="border border-white px-6 py-3 text-xs text-white"
    >
      {{ name }}
    </ButtonLink>
  </div>
</template>
