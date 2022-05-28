<script lang="ts">
import SiteFooter from '@/components/blocks/SiteFooter/SiteFooter.vue'
import SiteNavbar from '@/components/blocks/nav/SiteNavbar/SiteNavbar.vue'

export default {
  components: {
    SiteFooter,
    SiteNavbar,
  },
}
</script>

<template>
  <div class="flex flex-col mx-auto h-screen">
    <SiteNavbar />
    <slot />
    <SiteFooter />
  </div>
</template>

<style lang="postcss" scoped></style>
