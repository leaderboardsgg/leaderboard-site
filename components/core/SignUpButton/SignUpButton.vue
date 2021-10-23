<template>
  <BaseButton class="sign-up-button" v-bind="$attrs" v-on="$listeners">
    Sign Up
  </BaseButton>
</template>

<style scoped>
.sign-up-button {
  @apply bg-gray-100 hover:bg-black mx-1 py-1 text-opacity-70 hover:text-white;
}
</style>
