<script setup lang="ts">
import SiteFooter from 'blocks/SiteFooter/SiteFooter.vue'
import SiteNavbar from 'blocks/nav/SiteNavbar/SiteNavbar.vue'
</script>

<template>
  <div class="mx-auto flex h-screen flex-col">
    <SiteNavbar />
    <slot />
    <SiteFooter />
  </div>
</template>

<style lang="postcss" scoped></style>
