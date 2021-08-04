<template>
  <BaseButtonLink
    class="sign-up-button"
    to="#"
    v-bind="$attrs"
    v-on="$listeners"
  >
    Sign Up
  </BaseButtonLink>
</template>

<style scoped>
  .sign-up-button {
    @apply bg-gray-100 hover:bg-black mx-1 py-1 text-opacity-70 hover:text-white;
  }
</style>
