<template>
  <BaseButtonLink class="login-button" to="#" v-bind="$attrs" v-on="$listeners">
    Log In
  </BaseButtonLink>
</template>

<style scoped>
  .login-button {
    @apply mx-1 py-1 hover:bg-gray-100;
  }
</style>
