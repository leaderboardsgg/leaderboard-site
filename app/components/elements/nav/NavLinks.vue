<script setup lang="ts">
import NavLink from './NavLink.vue'

interface NavLinksProps {
  navLinks?: {
    name: string
    to: string
  }[]
}

const { navLinks = [{ name: 'About', to: '/about' }] } = defineProps<NavLinksProps>()
</script>

<template>
  <nav
    class="flex flex-col lg:flex-row items-center w-auto space-y-2 lg:space-y-0 text-center hover:text-black"
  >
    <NavLink v-for="{ name, to } in navLinks" :key="name" :name="name" :to="to">
      {{ name }}
    </NavLink>
  </nav>
</template>
