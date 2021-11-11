<template>
  <div class="social-buttons">
    <a
      v-for="social in socials"
      :key="social.name"
      class="social-button"
      :alt="social.name"
      :href="social.url"
    >
      {{ social.icon }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    socials: {
      required: true,
      type: Array,
    },
  },
});
</script>

<style scoped>
.social-buttons {
  @apply my-1;
  @apply grid auto-cols-fr grid-cols-4 gap-3;
}

.social-button {
  @apply flex content-center items-center justify-center justify-items-center;
  @apply rounded bg-gray-100;
  @apply p-2;
}
</style>
