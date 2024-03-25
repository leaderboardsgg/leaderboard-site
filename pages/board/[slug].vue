<script setup lang="ts">
import Info from 'blocks/LeaderboardDetails/LeaderboardDetails.vue'
import Loader from 'blocks/Loader/Loader.vue'
import { useGetLeaderboardDetail } from 'composables/api/useGetLeaderboardDetail'

const route = useRoute()
const leaderboardSlug = route.params.slug as string
const leaderboardDetail = await useGetLeaderboardDetail(leaderboardSlug)
</script>

<template>
  <div>
    <Loader v-if="leaderboardDetail.loading"></Loader>
    <Info
      v-if="!leaderboardDetail.loading && leaderboardDetail.data != null"
      :leaderboard-detail="leaderboardDetail.data!"
    />
  </div>
</template>
