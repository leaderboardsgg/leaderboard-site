<template>
  <NuxtLink class="button-link" :to="url" v-bind="$attrs" v-on="$listeners">
    <slot>Placeholder Link Text</slot>
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ButtonLink',
  props: {
    alt: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
});
</script>

<style scoped>
.button-link {
  @apply rounded px-3 py-2 text-current hover:bg-current;
}
</style>
