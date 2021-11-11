<template>
  <button class="button" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Button',
});
</script>

<style>
.button {
  @apply rounded px-3 py-2 text-current hover:bg-current;
}
</style>
