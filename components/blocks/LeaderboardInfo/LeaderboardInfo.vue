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

// TODO: Get actual links tied to the leaderboard
const socials: Socials[] = [
  {
    icon: 'twitch',
    name: 'Twitch',
    url: 'https://twitch.tv',
  },
  {
    icon: 'youtube', // TODO: Add a globe SVG. Maybe from Icons8
    name: 'Socials',
    url: 'https://example.com',
  },
  {
    icon: 'discord',
    name: 'Discord',
    url: 'https://discord.gg',
  },
]

const isMobile =
  window.innerWidth <=
  parseInt(resolveConfig(tailwindConfig).theme.screens.sm.replace('px', ''), 10)

defineProps<LeaderboardInfoProps>()
</script>

<template>
  <Desktop
    v-if="!isMobile"
    :leaderboard="leaderboard"
    :todo-platforms="todoPlatforms"
    :on-click="() => emit('follow', leaderboard.id)"
    :socials="socials"
  />
  <Mobile
    v-if="isMobile"
    :leaderboard="leaderboard"
    :todo-platforms="todoPlatforms"
    :on-click="() => emit('follow', leaderboard.id)"
    :socials="socials"
  />
</template>

<style lang="postcss" scoped></style>
