<script setup lang="ts">
import Tag from 'elements/tags/Tag/Tag.vue'
interface PlatformTagsProps {
  tags: string[]
}

defineProps<PlatformTagsProps>()
</script>

<template>
  <div class="platform-tags">
    <Tag v-for="tag in tags" :key="tag">
      {{ tag }}
    </Tag>
  </div>
</template>

<style lang="postcss" scoped>
.platform-tags {
  @apply flex flex-row place-content-center gap-1;
}
</style>
