<template>
  <nav class="nav-link-container">
    <NavLink>Games</NavLink>
    <NavLink>About</NavLink>
  </nav>
</template>

<script>
import NavLink from './NavLink';

export default {
  components: {
    NavLink
  }
}
</script>

<style scoped>
  @layer components {
    .nav-link-container {
      @apply flex flex-col lg:flex-row items-center w-auto space-y-2 lg:space-y-0 text-center text-black;
    }
  }
</style>
