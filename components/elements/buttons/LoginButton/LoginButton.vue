<script setup lang="ts" />

<template>
  <BaseButton class="login-button" v-bind="$attrs"> Log In </BaseButton>
</template>

<style lang="postcss" scoped>
.login-button {
  @apply mx-1 py-1 hover:bg-gray-100;
}
</style>
