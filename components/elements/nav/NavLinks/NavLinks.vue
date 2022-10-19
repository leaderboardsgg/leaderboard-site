<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import NavLink from './NavLink/NavLink.vue'

interface NavLinksProps {
  navLinks?: {
    name: string
    to: string
  }[]
}

withDefaults(defineProps<NavLinksProps>(), {
  navLinks: () => [
    {
      name: 'Games',
      to: '#',
    },
    {
      name: 'About',
      to: '#',
    },
  ],
})
</script>

<template>
  <nav class="nav-link-container">
    <NavLink v-for="navLink in navLinks" v-bind="navLink" :key="navLink.name">
      {{ navLink.name }}
    </NavLink>
  </nav>
</template>

<style lang="postcss" scoped>
.nav-link-container {
  @apply flex flex-col lg:flex-row items-center w-auto space-y-2 lg:space-y-0 text-center text-black;
}
</style>
