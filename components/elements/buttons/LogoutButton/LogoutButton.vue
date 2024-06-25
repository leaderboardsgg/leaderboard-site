<script setup lang="ts">
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
</script>

<template>
  <BaseButton class="logout-button" v-bind="$attrs">
    {{ $t('logout') }}
  </BaseButton>
</template>

<style lang="postcss" scoped>
.logout-button {
  @apply mx-1 py-1 hover:bg-gray-100;
}
</style>
