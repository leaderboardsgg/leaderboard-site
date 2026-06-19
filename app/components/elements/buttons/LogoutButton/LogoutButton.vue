<script setup lang="ts">
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
</script>

<template>
  <BaseButton class="mx-1 py-1 hover:bg-gray-100 hover:text-black" v-bind="$attrs">
    {{ $t('logout') }}
  </BaseButton>
</template>
