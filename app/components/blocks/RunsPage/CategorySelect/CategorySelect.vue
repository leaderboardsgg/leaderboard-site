<script lang="ts" setup>
import ButtonLink from '~/components/elements/buttons/ButtonLink/ButtonLink.vue'
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
      :class="{ active: activeCategorySlug === slug }"
      class="border border-white px-6 py-3 text-xs text-white"
    >
      {{ name }}
    </ButtonLink>
  </div>
</template>

<style lang="postcss" scoped>
.active {
  @apply border-red-500 text-red-500;
}

/*  Quick fix for the broken hover state but probably
    need to redo how the buttons are styled at some point */
a:not(.active):hover {
  @apply bg-white text-black;
}

a.active:hover {
  @apply bg-red-500 text-white;
}
</style>
