<template>
  <BaseButtonLink
    :class-names="classNames + `
      bg-gray-100 text-opacity-70
      py-2
      hover:bg-black hover:text-white
    `"
    link-to="#"
  >
    Sign Up
  </BaseButtonLink>
</template>

<script>
export default {
  props: {
    classNames: {
      default: '',
      type: String
    }
  }
};
</script>
