<template>
  <div class="flex flex-col mx-auto h-screen">
    <SiteNavbar />
    <Nuxt />
    <SiteFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import SiteFooter from '@/components/blocks/SiteFooter/SiteFooter.vue';
import SiteNavbar from '@/components/blocks/nav/SiteNavbar/SiteNavbar.vue';

export default defineComponent({
  components: {
    SiteFooter,
    SiteNavbar,
  },
});
</script>
