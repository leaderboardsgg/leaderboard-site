<template>
  <nav class="nav-link-container">
    <NavLink to="#">Games</NavLink>
    <NavLink to="#">About</NavLink>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import NavLink from './NavLink.vue';

export default defineComponent({
  components: {
    NavLink
  }
})
</script>

<style scoped>
  .nav-link-container {
    @apply flex flex-col lg:flex-row items-center w-auto space-y-2 lg:space-y-0 text-center text-black;
  }
</style>
