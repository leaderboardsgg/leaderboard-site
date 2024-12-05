<script setup lang="ts">
import { useRoute, createError } from '#imports'
import Loader from 'blocks/Loader/Loader.vue'
import { useGetLeaderboardBySlug } from '~/composables/api'
import LeaderboardInfo from '~/components/blocks/LeaderboardInfo/LeaderboardInfo.vue'
const {
  params: { slug },
} = useRoute()

const {
  loading,
  error: leaderboardError,
  data,
} = await useGetLeaderboardBySlug(slug as string)

if (leaderboardError?.status === 404) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Board Not Found',
    fatal: true,
  })
}
</script>

<template>
  <div>
    <Loader v-if="loading"></Loader>
    <LeaderboardInfo v-else :leaderboard="data!" />
  </div>
</template>
