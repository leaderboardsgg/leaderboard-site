<script setup lang="ts">
import { useRoute, createError } from '#imports'
import Loader from '~/components/blocks/Loader/Loader.vue'
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
  <div v-if="!leaderboardError">
    <Loader v-if="loading" />
    <LeaderboardInfo v-else-if="data" :leaderboard="data" />
  </div>
</template>
