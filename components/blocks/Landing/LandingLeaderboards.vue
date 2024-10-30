<script setup lang="ts">
interface LandingLeaderboardsProps {
  leaderboards: Leaderboard[]
}

defineProps<LandingLeaderboardsProps>()
</script>
<template>
  <div
    id="landing-leaderboards"
    class="grid auto-rows-[1fr] grid-cols-2 justify-center gap-4 align-middle"
  >
    <div
      v-for="leaderboard in leaderboards"
      :key="leaderboard"
      class="mb-2 content-center bg-gray-200 px-4 py-2"
    >
      <span class="break-words">
        {{ leaderboard?.name }}
      </span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.platform-tags {
  @apply flex flex-row place-content-center gap-1;
}
</style>
