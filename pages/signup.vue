<template>
  <div
    id="signup"
    class="container mx-auto p-3 flex justify-center items-center"
  >
    <sign-up-card @logInClick="$router.push('/login')" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SignUpCard from '../components/SignUpCard.vue'

export default Vue.extend({
  name: 'SignUp',

  components: {
    SignUpCard,
  },
})
</script>

<style></style>
