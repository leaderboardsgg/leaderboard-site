<script setup lang="ts">
import BaseButton from 'elements/buttons/BaseButton.vue'
</script>

<template>
  <BaseButton
    class="hover:bg-black py-2 px-6 text-opacity-70 hover:text-white rounded border border-yellow-500"
    v-bind="$attrs"
  >
    {{ $t('signup') }}
  </BaseButton>
</template>
