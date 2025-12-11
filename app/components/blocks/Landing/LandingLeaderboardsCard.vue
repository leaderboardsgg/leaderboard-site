<script setup lang="ts">
import type { LeaderboardViewModel } from 'lib/api/data-contracts'
import { useLocalePath } from '#imports'
const localePath = useLocalePath()

const { id, slug, name, stats } =
  defineProps<Pick<LeaderboardViewModel, 'id' | 'slug' | 'name' | 'stats'>>()
</script>

<template>
  <NuxtLink
    :key="id"
    class="flex flex-col bg-gray-200 text-blue-500 underline hover:cursor-pointer"
    :to="localePath({ name: 'game-slug', params: { slug: slug } })"
  >
    <!-- TODO: replace span with image tag when backend returns image from model -->
    <span class="h-[250px] w-full flex-shrink object-cover" />
    <div class="p-2">
      <span class="block break-words font-bold"> {{ name }} </span>
      <span v-if="stats?.runCount">{{ stats.runCount }} runs</span>
    </div>
  </NuxtLink>
</template>
