<script setup lang="ts">
import { useRoute, createError } from '#imports'
import Loader from 'blocks/Loader/Loader.vue'
import { useGetLeaderboardBySlug } from '~/composables/api'
import LeaderboardInfo from '~/components/blocks/LeaderboardInfo/LeaderboardInfo.vue'
const route = useRoute()
const leaderboardSlug = route.params.slug as string

const leaderboardDetail = await useGetLeaderboardBySlug(leaderboardSlug)

if (leaderboardDetail?.error?.status === 404) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  })
}
</script>

<template>
  <div>
    <Loader v-if="leaderboardDetail?.loading"></Loader>
    <LeaderboardInfo v-else :leaderboard="leaderboardDetail?.data!" />
  </div>
</template>
