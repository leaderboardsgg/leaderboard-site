<script setup lang="ts">
interface NavLinksProps {
  socials: Socials[]
}

defineProps<NavLinksProps>()
</script>

<template>
  <div class="w-full grid auto-cols-fr grid-cols-4 gap-2">
    <a
      v-for="social in socials"
      :key="social.name"
      class="flex content-center items-center justify-center rounded-sm bg-gray-100 p-2"
      :alt="social.name"
      :href="social.url"
    >
      <img class="w-5" :src="`/icons/social/${social.icon}.svg`" :alt="social.icon" />
    </a>
  </div>
</template>
