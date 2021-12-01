<template>
  <div class="card" v-bind="$attrs" v-on="$listeners">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Card',
});
</script>

<style scoped>
.card {
  @apply rounded border border-gray-300;
}
</style>
