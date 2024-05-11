<script setup lang="ts">
import { useThrottleFn } from '@vueuse/core'
import resolveConfig from 'tailwindcss/resolveConfig'
import { ref } from 'vue'
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

const mobileWidth = parseInt(
  resolveConfig(tailwindConfig).theme.screens.sm.replace('px', ''),
  10,
)

const isMobile = ref(window.innerWidth <= mobileWidth)

function checkIsMobile() {
  isMobile.value = window.innerWidth <= mobileWidth
}

window.addEventListener('resize', useThrottleFn(checkIsMobile, 20))

defineProps<LeaderboardInfoProps>()
</script>

<template>
  <Mobile
    v-if="isMobile.valueOf()"
    data-testid="child"
    :leaderboard="leaderboard"
    :todo-platforms="todoPlatforms"
    @follow="emit('follow', leaderboard.id)"
  />
  <Desktop
    v-else
    data-testid="child"
    :leaderboard="leaderboard"
    :todo-platforms="todoPlatforms"
    @follow="emit('follow', leaderboard.id)"
  />
</template>

<style lang="postcss" scoped></style>
