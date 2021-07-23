<template>
  <BaseButtonLink
    :class-names="classNames"
    :link-to="linkTo"
    class="nav-link"
  >
    <slot />
  </BaseButtonLink>
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

<style scoped>
  @layer components {
    .nav-link {
      @apply w-full mt-2 lg:mt-0 lg:mx-1 py-1 hover:bg-gray-100;
    }
  }
</style>
