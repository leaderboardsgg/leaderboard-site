<template>
  <BaseButtonLink
    :class-names="classNames + `
      w-full
      py-0 lg:py-1
      hover:bg-gray-100
    `"
    :link-to="linkTo"
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