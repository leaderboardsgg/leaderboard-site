<script setup lang="ts" />
<script lang="ts">
import BaseButton from '@/components/elements/buttons/BaseButton/BaseButton.vue'

export default {
  name: 'LogoutButton',
  components: {
    BaseButton,
  },
}
</script>

<template>
  <BaseButton class="logout-button" v-bind="$attrs"> Log Out </BaseButton>
</template>

<style lang="postcss" scoped>
.logout-button {
  @apply mx-1 py-1 hover:bg-gray-100;
}
</style>
