<template>
  <div class="user-activity" v-bind="$attrs">
    <p><span>Runs: </span>{{ runCount }}</p>
    <p><span>Games: </span>{{ gameCount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UserActivity',
  props: {
    gameCount: {
      default: () => 6,
      type: Number,
    },
    runCount: {
      default: () => 42,
      type: Number,
    },
  },
});
</script>

<style scoped>
.user-activity {
  & span {
    @apply font-semibold;
  }
}
</style>
