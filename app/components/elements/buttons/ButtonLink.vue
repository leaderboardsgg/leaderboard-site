<script setup lang="ts">
const { to } = defineProps<{
  to: string
}>()
</script>

<template>
  <NuxtLink
    v-bind="$attrs"
    :to="to"
    class="rounded px-3 py-2 text-current hover:bg-current"
    data-testid="button-link"
    role="button"
  >
    <slot>Placeholder Link Text</slot>
  </NuxtLink>
</template>
