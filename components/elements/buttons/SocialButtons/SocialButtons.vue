<script setup lang="ts">
interface NavLinksProps {
  socials: Socials[]
}

defineProps<NavLinksProps>()
</script>

<template>
  <div class="social-buttons">
    <a
      v-for="social in socials"
      :key="social.name"
      class="social-button"
      :alt="social.name"
      :href="social.url"
    >
      <img :src="`/icons/social/${social.icon}.svg`" :alt="social.icon" />
    </a>
  </div>
</template>

<style lang="postcss" scoped>
.social-buttons {
  @apply w-full grid auto-cols-fr grid-cols-4 gap-2;
}

.social-button {
  @apply flex content-center items-center justify-center;
  @apply rounded bg-gray-100;
  @apply p-2;
}

.social-button img {
  @apply w-5;
}
</style>
