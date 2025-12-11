<script setup lang="ts">
import type { LeaderboardViewModel } from '~~/lib/api/data-contracts'
import LandingLeaderboardsCard from './LandingLeaderboardsCard.vue'

interface LandingLeaderboardsProps {
  leaderboards: LeaderboardViewModel[]
}

defineProps<LandingLeaderboardsProps>()
</script>
<template>
  <div id="landing-leaderboards" class="leaderboards-grid w-full">
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

<style lang="postcss" scoped>
.leaderboards-grid {
  --grid-col-min-size: 200px;
  --grid-item-max-height: 330px;

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(min(var(--grid-col-min-size), 100%), 1fr)
  );
  grid-auto-rows: min-content;
  gap: 1rem;

  > * {
    max-height: var(--grid-item-max-height);
  }
}
</style>
