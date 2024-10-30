<script lang="ts" setup>
import LandingLeaderboards from './LandingLeaderboards.vue'
import LandingAbout from './LandingAbout.vue'

// TODO: Get api leaderboard lists
const leaderboards: Leaderboard[] = [
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'Thing' },
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'Okay Game' },
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'SHORT NAME' },
  {
    name: 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
  },
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'Getting Over It With Bennet Foddy' },
  { name: 'Getting Over It With Bennet Foddy' },
]
</script>

<template>
  <div class="flex">
    <LandingLeaderboards :leaderboards="leaderboards"></LandingLeaderboards>
    <LandingAbout />
  </div>
</template>
