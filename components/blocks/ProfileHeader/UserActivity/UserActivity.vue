<script setup lang="ts">
interface UserActivityProps {
  gameCount: number
  runCount: number
}

withDefaults(defineProps<UserActivityProps>(), {
  gameCount: () => 6,
  runCount: () => 42,
})
</script>

<template>
  <div class="user-activity" v-bind="$attrs">
    <p><span>Runs: </span>{{ runCount }}</p>
    <p><span>Games: </span>{{ gameCount }}</p>
  </div>
</template>

<style lang="postcss" scoped>
.user-activity {
  & span {
    @apply font-semibold;
  }
}
</style>
