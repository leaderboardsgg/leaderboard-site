<template>
  <div class="social-buttons">
    <a
      v-for="social in socials"
      :key="social.name"
      class="social-button"
      :alt="social.name"
      :href="social.url"
    >
      <img :src="'/icons/social/' + social.icon + '.svg'" :alt="social.icon" />
    </a>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'SocialButtons',
  props: {
    socials: {
      required: true,
      type: Array,
    },
  },
})
</script>

<style lang="postcss" scoped>
.social-buttons {
  @apply my-1;
  @apply grid auto-cols-fr grid-cols-4 gap-3;
  @apply md:ml-5 md:mt-5;
}

@media (max-width: 767px) {
  .social-button {
    @apply flex content-center items-center justify-center justify-items-center;
    @apply rounded bg-gray-100;
    @apply p-2;
  }
  .social-button img {
    @apply max-w-[30%];
  }
}
.social-button img {
  @apply w-5;
}
</style>
