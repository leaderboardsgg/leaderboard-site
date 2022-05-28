<script lang="ts">
export default {
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
}
</script>

<template>
  <NuxtLink class="button-link" :to="url" v-bind="$attrs">
    <slot>Placeholder Link Text</slot>
  </NuxtLink>
</template>

<style lang="postcss" scoped>
.button-link {
  @apply rounded px-3 py-2 text-current hover:bg-current;
}
</style>
