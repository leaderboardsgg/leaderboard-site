<script lang="ts" setup>
import LandingLeaderboards from './LandingLeaderboards.vue'
import LandingAbout from './LandingAbout.vue'
import { useGetLeaderboards } from '~/composables/api'
import Loader from 'blocks/Loader/Loader.vue'

const { data: leaderboards, loading } = await useGetLeaderboards()
</script>

<template>
  <div>
    <h2 class="mb-4 text-3xl font-bold">Games</h2>
    <div class="flex flex-col lg:flex-row">
      <Loader v-if="loading"></Loader>
      <LandingLeaderboards :leaderboards="leaderboards?.data || []" />
      <LandingAbout />
    </div>
  </div>
</template>
