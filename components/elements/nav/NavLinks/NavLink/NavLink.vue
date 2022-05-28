<script lang="ts">
import ButtonLink from '@/components/elements/buttons/ButtonLink/ButtonLink.vue'

export default {
  name: 'NavLink',
  components: {
    ButtonLink,
  },
}
</script>

<template>
  <ButtonLink class="nav-link" v-bind="$attrs">
    <slot />
  </ButtonLink>
</template>

<style lang="postcss" scoped>
.nav-link {
  @apply w-full mt-2 lg:mt-0 lg:mx-1 py-1 hover:bg-gray-100;
}
</style>
