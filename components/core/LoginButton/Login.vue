<template>
  <BaseButtonLink
    :class-names="classNames + `
      py-2
      hover:bg-gray-100
    `"
    link-to="#"
  >
    Log In
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
