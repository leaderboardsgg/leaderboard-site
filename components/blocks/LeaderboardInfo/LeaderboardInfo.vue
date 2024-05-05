<script setup lang="ts">
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'root/tailwind.config'
import Desktop from './Desktop/Desktop.vue'
import Mobile from './Mobile/Mobile.vue'
import type { LeaderboardViewModel } from 'lib/api/data-contracts'

export interface LeaderboardInfoProps {
  leaderboard: LeaderboardViewModel
}

// TODO: Remove this. Get from model instead.
const todoPlatforms = ['PS4', 'PC', 'XboxSeriesX']

// TODO: Implement listeners
const emit = defineEmits<{
  (event: 'follow', leaderboardId: number): void
}>()

const isMobile =
  window.innerWidth <=
  parseInt(resolveConfig(tailwindConfig).theme.screens.sm.replace('px', ''), 10)

defineProps<LeaderboardInfoProps>()
</script>

<template>
  <Desktop
    v-if="!isMobile"
    data-testid="child"
    :leaderboard="leaderboard"
    :todo-platforms="todoPlatforms"
    @follow="emit('follow', leaderboard.id)"
  />
  <Mobile
    v-if="isMobile"
    data-testid="child"
    :leaderboard="leaderboard"
    :todo-platforms="todoPlatforms"
    @follow="emit('follow', leaderboard.id)"
  />
</template>

<style lang="postcss" scoped></style>
