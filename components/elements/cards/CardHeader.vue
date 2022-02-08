<template>
  <div class="card-header" v-bind="$attrs" v-on="$listeners">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'CardHeader',
});
</script>

<style lang="postcss" scoped>
.card-header {
  @apply p-3 border-b border-gray-300;
}
</style>
