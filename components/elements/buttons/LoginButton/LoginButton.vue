<template>
  <BaseButton class="login-button" v-bind="$attrs" v-on="$listeners">
    Log In
  </BaseButton>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
import BaseButton from '~/components/elements/buttons/BaseButton';

export default defineComponent({
  name: 'LoginButton',
  components: {
    BaseButton,
  },
});
</script>

<style scoped>
.login-button {
  @apply mx-1 py-1 hover:bg-gray-100;
}
</style>
