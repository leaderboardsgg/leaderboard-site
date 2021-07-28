<template>
  <nav class="nav-link-container">
    <NavLink to="#">Games</NavLink>
    <NavLink to="#">About</NavLink>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import NavLink from './NavLink.vue';

export default Vue.extend({
  components: {
    NavLink
  }  
})
</script>

<style scoped>
  @layer components {
    .nav-link-container {
      @apply flex flex-col lg:flex-row items-center w-auto space-y-2 lg:space-y-0 text-center text-black;
    }
  }
</style>
