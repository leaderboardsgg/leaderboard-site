<script setup lang="ts">
import BaseButton from 'elements/buttons/BaseButton.vue'
</script>

<template>
  <BaseButton class="w-24 mx-1 py-1" v-bind="$attrs">
    {{ $t('logout') }}
  </BaseButton>
</template>
