<template>
  <NuxtLink
    class="
      rounded
      px-3
      text-current
      hover:bg-current
    "
    :class="classNames"
    :to="linkTo"
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
