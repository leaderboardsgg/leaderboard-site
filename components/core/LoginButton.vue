<template>
  <BaseButtonLink
    :class-names="classNames"
    class="login-button"
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

<style scoped>
  @layer components {
    .login-button {
      @apply mx-1 py-1 hover:bg-gray-100;
    }
  }
</style>
