<template>
  <BaseButton class="sign-up-button" v-bind="$attrs" v-on="$listeners">
    Sign Up
  </BaseButton>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import BaseButton from '~/components/elements/buttons/BaseButton.vue';

export default defineComponent({
  name: 'SignUpButton',
  components: {
    BaseButton,
  },
});
</script>

<style scoped>
.sign-up-button {
  @apply bg-gray-100 hover:bg-black mx-1 py-1 text-opacity-70 hover:text-white;
}
</style>
