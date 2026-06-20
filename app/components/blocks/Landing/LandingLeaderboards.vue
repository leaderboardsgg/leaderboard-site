<script setup lang="ts">
import type { LeaderboardViewModel } from '~~/lib/api/data-contracts'
import LandingLeaderboardsCard from './LandingLeaderboardsCard.vue'

interface LandingLeaderboardsProps {
  leaderboards: LeaderboardViewModel[]
}

defineProps<LandingLeaderboardsProps>()
</script>
<template>
  <div id="landing-leaderboards" class="leaderboards-grid w-full gap-4 grid">
    <LandingLeaderboardsCard
      v-for="{ id, name, slug, stats } in leaderboards"
      :id="id"
      :key="id"
      :name="name"
      :slug="slug"
      :stats="stats"
    />
  </div>
</template>

<style scoped>
.leaderboards-grid {
  --grid-col-min-size: 200px;
  --grid-item-max-height: 330px;

  grid-template-columns: repeat(auto-fill, minmax(min(var(--grid-col-min-size), 100%), 1fr));
  grid-auto-rows: min-content;

  > * {
    max-height: var(--grid-item-max-height);
  }
}
</style>
