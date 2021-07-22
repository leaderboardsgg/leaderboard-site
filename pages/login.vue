<template>
  <div
    id="login"
    class="container mx-auto p-3 flex justify-center items-center"
  >
    <log-in-card @signUpClick="$router.push('/signup')" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LogInCard from '../components/LogInCard.vue'

export default Vue.extend({
  name: 'Login',

  components: {
    LogInCard,
  },
})
</script>

<style></style>
