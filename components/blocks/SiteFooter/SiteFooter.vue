<template>
  <div class="site-footer">
    <p class="site-footer__copyright">Copyright 2021</p>
    <LanguageSelector
      class="site-footer__language-selector"
      data-testid="language-selector"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import LanguageSelector from '@/components/blocks/SiteFooter/LanguageSelector/LanguageSelector.vue';

export default defineComponent({
  name: 'SiteFooter',
  components: {
    LanguageSelector,
  },
});
</script>

<style lang="postcss" scoped>
.site-footer {
  @apply grid md:grid-cols-3 grid-cols-1 md:gap-y-0 gap-y-5 items-center;
  @apply rounded bg-gray-100 p-5 text-gray-600;

  & .site-footer__copyright {
    @apply md:col-start-2 w-full text-center;
  }
}

.site-footer__language-selector {
  @apply justify-self-end right-0 md:w-min w-full;
}
</style>
