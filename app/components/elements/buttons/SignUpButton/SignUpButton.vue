<script setup lang="ts">
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
</script>

<template>
  <BaseButton class="sign-up-button" v-bind="$attrs">
    {{ $t('signup') }}
  </BaseButton>
</template>

<style lang="postcss" scoped>
.sign-up-button {
  @apply bg-gray-100 hover:bg-black mx-1 py-1 text-opacity-70 hover:text-white;
}
</style>
