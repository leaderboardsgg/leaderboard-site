<script setup lang="ts" />
<script lang="ts">
import BaseButton from '@/components/elements/buttons/BaseButton/BaseButton.vue'

export default {
  name: 'LoginButton',
  components: {
    BaseButton,
  },
}
</script>

<template>
  <BaseButton class="login-button" v-bind="$attrs"> Log In </BaseButton>
</template>

<style lang="postcss" scoped>
.login-button {
  @apply mx-1 py-1 hover:bg-gray-100;
}
</style>
