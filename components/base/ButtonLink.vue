<template>
  <NuxtLink
    :class="classNames"
    :to="linkTo"
    class="button-link"
  >
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    classNames: {
      default: '',
      type: String
    },
    linkTo: {
      default: '#',
      type: String
    }
  }
};
</script>

<style>
  @layer components {
    .button-link {
      @apply rounded px-3 py-2 text-current hover:bg-current;
    }
  }
</style>
