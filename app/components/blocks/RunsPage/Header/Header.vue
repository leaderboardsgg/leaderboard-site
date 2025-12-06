<script lang="ts" setup>
import type { LeaderboardViewModel } from '~~/lib/api/data-contracts'
import { useGetCategoriesForLeaderboard } from '~/composables/api'
import ButtonLink from '~/components/elements/buttons/ButtonLink/ButtonLink.vue'

interface HeaderProps {
  leaderboard: LeaderboardViewModel
  activeCategorySlug: string
}

const props = defineProps<HeaderProps>()

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
  <div class="flex w-full flex-col gap-6 bg-bg-content p-6">
    <h1 class="mb-4 text-xl font-semibold text-white">
      {{ leaderboard.name }}
    </h1>
    {{ leaderboard.info }}
  </div>
  <div v-if="error !== null" class="bg-black p-6 text-white">
    <span>{{ error.status ?? 500 }}</span>
    <br />
    <span>{{
      error.title ??
      'Something went wrong. Please refresh this page.'
    }}</span>
  </div>
  <div v-else-if="data?.data != null" class="flex justify-between p-6">
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
    Run Type: {{data.data.find(cat => cat.slug === activeCategorySlug)?.type}}
  </div>
</template>
