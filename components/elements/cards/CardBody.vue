<template>
  <div class="card-body" v-bind="$attrs" v-on="$listeners">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'CardBody',
});
</script>

<style scoped>
.card-body {
  @apply p-3;
}
</style>
