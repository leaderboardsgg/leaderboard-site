<script setup lang="ts">
import BaseButton from 'elements/buttons/BaseButton.vue'
</script>

<template>
  <BaseButton class="fill-current bg-gray-100 text-gray-900 hover:bg-gray-200" v-bind="$attrs">
    <i-svg-close class="size-5" />
  </BaseButton>
</template>
