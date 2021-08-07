<template>
  <nav class="nav-link-container">
    <NavLink v-for="navLink in navLinks" v-bind="navLink" :key="navLink.name">
      {{ navLink.name }}
    </NavLink>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import NavLink from './NavLink/NavLink.vue';

export default defineComponent({
  components: {
    NavLink,
  },
  props: {
    navLinks: {
      default: () => [
        {
          name: 'Games',
          to: '#',
        },
        {
          name: 'About',
          to: '#',
        },
      ],
      type: Array,
    },
  },
});
</script>

<style scoped>
.nav-link-container {
  @apply flex flex-col lg:flex-row items-center w-auto space-y-2 lg:space-y-0 text-center text-black;
}
</style>
