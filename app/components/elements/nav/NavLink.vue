<script setup lang="ts">
import ButtonLink from '~/components/elements/buttons/ButtonLink.vue'

const { name, to } = defineProps<{
  name: string
  to: string
}>()
</script>

<template>
  <ButtonLink class="w-full mt-2 lg:mt-0 lg:mx-1 py-1 hover:bg-gray-100" :name="name" :to="to">
    <slot />
  </ButtonLink>
</template>
