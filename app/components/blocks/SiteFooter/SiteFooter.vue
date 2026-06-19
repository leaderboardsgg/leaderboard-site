<script setup lang="ts">
import { computed } from 'vue'
import LanguageSelector from './LanguageSelector/LanguageSelector.vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="site-footer mt-auto">
    <p class="site-footer__copyright">Copyright {{ currentYear }}</p>
    <LanguageSelector class="site-footer__language-selector" data-testid="language-selector" />
  </footer>
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
