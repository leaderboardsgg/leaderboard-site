<script lang="ts" setup>
import type { LeaderboardViewModel } from '~~/lib/api/data-contracts'
import { useGetCategoriesForLeaderboard } from '~/composables/api'
import ButtonLink from '~/components/elements/buttons/ButtonLink/ButtonLink.vue'

interface CategorySelect {
  leaderboard: LeaderboardViewModel
  activeCategorySlug: string
}

const props = defineProps<CategorySelect>()

const { error, data } = await useGetCategoriesForLeaderboard(
  {
    id: props.leaderboard.id,
  },
  {
    onError() {
      return null
    },
    onOkay(d) {
      return d
    },
  },
)
</script>

<template>
  <div v-if="error !== null" class="bg-black p-6 text-white">
    <span>{{ error.status ?? 500 }}</span>
    <br />
    <span>{{
      error.title ??
      'Something went wrong. Please refresh this page.'
      }}</span>
  </div>
  <div v-else-if="data?.data != null" class="grid grid-cols-2 gap-6 p-6">
    <div class="flex gap-3">
      <ButtonLink v-for="cat of data.data" :key="cat.id" v-bind="{
        name: cat.name,
        to: `?category=${cat.slug}`,
      }" :class="activeCategorySlug.toLocaleLowerCase() === cat.slug
        ? 'border-red-500 text-red-500'
        : ''
        " class="border border-white px-6 py-3 text-xs text-white">
        {{ cat.name }}
      </ButtonLink>
    </div>
    <div class="justify-self-end">
      Run Type: {{data.data.find(cat => cat.slug === activeCategorySlug)?.type}}
    </div>
    <aside class="col-span-2">
      <h2 class="text-xl">Category Description</h2>
      <span>{{data.data.find(cat => cat.slug === activeCategorySlug)?.info || '-'}}</span>
    </aside>
    <ButtonLink class="rounded-none bg-white text-black">
      Submit your run!
    </ButtonLink>
  </div>
</template>
