<template>
  <BaseButton class="login-button" v-bind="$attrs" v-on="$listeners">
    Log Out
  </BaseButton>
</template>

<style scoped>
.login-button {
  @apply mx-1 py-1 hover:bg-gray-100;
}
</style>
