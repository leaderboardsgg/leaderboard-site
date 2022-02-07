<template>
  <BaseButton class="close-button" v-bind="$attrs" v-on="$listeners">
    <svg-icon class="h-5 w-5" name="close" />
  </BaseButton>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import BaseButton from '@/components/elements/buttons/BaseButton.vue';

export default defineComponent({
  name: 'CloseButton',
  components: {
    BaseButton,
  },
});
</script>

<style lang="postcss" scoped>
.close-button {
  @apply fill-current bg-gray-100 text-gray-900 hover:bg-gray-200;
}
</style>
