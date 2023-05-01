<script setup lang="ts">
import { useGetLeaderboardDetail } from 'composables/api/useGetLeaderboardDetail'

const route = useRoute()
const leaderboardSlug = route.params.slug as string
const leaderboardDetail = await useGetLeaderboardDetail(leaderboardSlug)
</script>

<template>
  <p>Leaderboard Name: {{ leaderboardDetail.data?.name }}</p>
</template>
