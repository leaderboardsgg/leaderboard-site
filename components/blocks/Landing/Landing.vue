<script lang="ts" setup>
import LandingLeaderboards from './LandingLeaderboards.vue'
import LandingAbout from './LandingAbout.vue'

// TODO: Get api leaderboard lists
const leaderboards: Leaderboard[] = [
  { id: 1, name: 'Getting Over It With Bennet Foddy' },
  { id: 2, name: 'Getting Over It With Bennet Foddy' },
  { id: 3, name: 'Getting Over It With Bennet Foddy' },
  { id: 4, name: 'Thing' },
  { id: 5, name: 'Getting Over It With Bennet Foddy' },
  { id: 6, name: 'Getting Over It With Bennet Foddy' },
  { id: 7, name: 'Getting Over It With Bennet Foddy' },
  { id: 8, name: 'Okay Game' },
  { id: 9, name: 'Getting Over It With Bennet Foddy' },
  { id: 10, name: 'Getting Over It With Bennet Foddy' },
  { id: 11, name: 'Getting Over It With Bennet Foddy' },
  { id: 12, name: 'SHORT NAME' },
  {
    id: 13,
    name: 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
  },
  { id: 14, name: 'Getting Over It With Bennet Foddy' },
  { id: 15, name: 'Getting Over It With Bennet Foddy' },
  { id: 16, name: 'Getting Over It With Bennet Foddy' },
  { id: 17, name: 'Getting Over It With Bennet Foddy' },
  { id: 18, name: 'Getting Over It With Bennet Foddy' },
  { id: 19, name: 'Getting Over It With Bennet Foddy' },
]
</script>

<template>
  <div class="flex flex-col lg:flex-row">
    <LandingLeaderboards :leaderboards="leaderboards"></LandingLeaderboards>
    <LandingAbout />
  </div>
</template>
