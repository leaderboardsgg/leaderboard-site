<script setup lang="ts">
import LeaderboardInfo from 'blocks/LeaderboardInfo/LeaderboardInfo.vue'
import Loader from 'blocks/Loader/Loader.vue'
import { useGetLeaderboardBySlug } from '~/composables/api'

const route = useRoute()
const leaderboardSlug = route.params.slug as string
const leaderboardDetail = await useGetLeaderboardBySlug(leaderboardSlug)
</script>

<template>
  <div>
    <Loader v-if="leaderboardDetail.loading"></Loader>
    <LeaderboardInfo
      v-if="!leaderboardDetail.loading && leaderboardDetail.data != null"
      :leaderboard="leaderboardDetail.data!"
      @follow="(id) => console.log(id)"
    />
  </div>
</template>
