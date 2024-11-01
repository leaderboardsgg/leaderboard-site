<script lang="ts" setup>
import LandingLeaderboards from './LandingLeaderboards.vue'
import LandingAbout from './LandingAbout.vue'
import { useGetLeaderboards } from '~/composables/api'

import Loader from 'blocks/Loader/Loader.vue'

const leaderboards = await useGetLeaderboards()
</script>

<template>
  <div>
    <h2 class="mb-4 text-3xl font-bold">Games</h2>
    <div class="flex flex-col lg:flex-row">
      <Loader v-if="leaderboards.loading"></Loader>
      <LandingLeaderboards
        v-if="!leaderboards.loading && leaderboards.data != null"
        :leaderboards="leaderboards"
      ></LandingLeaderboards>
      <LandingAbout />
    </div>
  </div>
</template>
