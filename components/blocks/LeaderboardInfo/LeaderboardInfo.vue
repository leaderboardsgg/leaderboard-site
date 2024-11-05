<script lang="ts" setup>
import type { LeaderboardViewModel } from '~/lib/api/data-contracts'
import LeaderboardInfoAccordion from './LeaderboardInfoAccordion.vue'
interface LeaderboardInfoProps {
  leaderboard: LeaderboardViewModel
}

defineProps<LeaderboardInfoProps>()
</script>

<template>
  <div class="flex w-full flex-col rounded border border-gray-300 p-5">
    <div id="leaderboard-show-header" class="mb-4 bg-gray-200 p-4">
      <h1 class="mb-4 text-xl font-bold">{{ leaderboard.name }}</h1>
      <LeaderboardInfoAccordion
        v-if="leaderboard?.info"
        :info="leaderboard.info"
      />
    </div>
  </div>
</template>
