<script lang="ts">
export default {
  name: 'SiteFooter',
}
</script>

<template>
  <div class="site-footer">
    <p class="site-footer__copyright">Copyright 2021</p>
  </div>
</template>

<style lang="postcss" scoped>
.site-footer {
  @apply grid md:grid-cols-3 grid-cols-1 md:gap-y-0 gap-y-5 items-center;
  @apply rounded bg-gray-100 p-5 text-gray-600;

  & .site-footer__copyright {
    @apply md:col-start-2 w-full text-center;
  }
}
</style>
