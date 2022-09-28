<script setup lang="ts">
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
</script>

<template>
  <BaseButton class="login-button" v-bind="$attrs"> Log In </BaseButton>
</template>

<style lang="postcss" scoped>
.login-button {
  @apply mx-1 py-1 hover:bg-gray-100;
}
</style>
