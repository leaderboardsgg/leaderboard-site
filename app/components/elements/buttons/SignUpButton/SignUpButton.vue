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
  @apply hover:bg-black py-2 px-6 text-opacity-70 hover:text-white rounded border border-yellow-500;
}
</style>
