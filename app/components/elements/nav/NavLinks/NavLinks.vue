<script setup lang="ts">
import NavLink from './NavLink/NavLink.vue'

interface NavLinksProps {
  navLinks?: {
    name: string
    to: string
  }[]
}

const { navLinks = [{ name: 'About', to: '#' }] } = defineProps<NavLinksProps>()
</script>

<template>
  <nav class="nav-link-container">
    <NavLink v-for="{ name, to } in navLinks" :key="name" :name="name" :to="to">
      {{ name }}
    </NavLink>
  </nav>
</template>

<style lang="postcss" scoped>
.nav-link-container {
  @apply flex flex-col lg:flex-row items-center w-auto space-y-2 lg:space-y-0 text-center;
}
</style>
