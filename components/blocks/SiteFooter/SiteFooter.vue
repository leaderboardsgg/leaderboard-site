<template>
  <div class="site-footer">
    <p class="site-footer__copyright">Copyright 2021</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'SiteFooter',
});
</script>

<style scoped>
.site-footer {
  @apply flex flex-wrap rounded bg-gray-100 p-5 text-gray-600;
  & .site-footer__copyright {
    @apply w-full text-center;
  }
}
</style>
