<template>
  <BaseButtonLink
    :class-names="classNames + `
      w-full
      mt-2 lg:mt-0
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