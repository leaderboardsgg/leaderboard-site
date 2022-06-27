<script setup lang="ts" />

<template>
  <BaseButton class="logout-button" v-bind="$attrs"> Log Out </BaseButton>
</template>

<style lang="postcss" scoped>
.logout-button {
  @apply mx-1 py-1 hover:bg-gray-100;
}
</style>
