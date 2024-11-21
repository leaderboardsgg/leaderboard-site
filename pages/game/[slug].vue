<script setup lang="ts">
import { useRoute, createError } from '#imports'
import Loader from 'blocks/Loader/Loader.vue'
import { useGetLeaderboardBySlug } from '~/composables/api'
import LeaderboardInfo from '~/components/blocks/LeaderboardInfo/LeaderboardInfo.vue'
const {
  params: { slug },
} = useRoute()

const leaderboardDetail = await useGetLeaderboardBySlug(slug as string)

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
