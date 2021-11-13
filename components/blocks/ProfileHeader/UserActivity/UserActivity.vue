<template>
  <div class="profile-info--user-activity" v-bind="$attrs">
    <p><span class="font-semibold">Runs: </span>{{ runCount }}</p>
    <p><span class="font-semibold">Games: </span>{{ gameCount }}</p>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
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
