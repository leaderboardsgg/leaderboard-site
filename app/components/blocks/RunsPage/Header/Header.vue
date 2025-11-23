<script lang="ts" setup>
import type { LeaderboardViewModel } from '~/lib/api/data-contracts'
import { useGetCategoriesForLeaderboard } from '~/composables/api'
import ButtonLink from '~/components/elements/buttons/ButtonLink/ButtonLink.vue'

interface HeaderProps {
  leaderboard: LeaderboardViewModel
  activeCategorySlug?: string
}

const props = defineProps<HeaderProps>()

const categories =
  props.leaderboard != null
    ? await useGetCategoriesForLeaderboard(
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
    : undefined
</script>

<template>
  <div class="flex w-full flex-col gap-6 bg-bg-content p-6">
    <h1 class="mb-4 text-xl font-semibold text-white">
      {{ leaderboard.name }}
    </h1>
    <div v-if="categories!.data?.data != null" class="flex gap-6">
      <ButtonLink
        v-for="cat of categories!.data.data"
        :key="cat.id"
        v-bind="{
          name: cat.name,
          to: `?category=${cat.slug}`,
        }"
        :class="
          activeCategorySlug?.toLocaleLowerCase() === cat.slug
            ? 'border-red-500 text-red-500'
            : ''
        "
        class="rounded border border-white px-6 py-3 text-xs text-white"
      >
        {{ cat.name }}
      </ButtonLink>
    </div>
  </div>
</template>
