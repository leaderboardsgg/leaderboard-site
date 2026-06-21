<script setup lang="ts">
interface UserActivityProps {
  gameCount?: number
  runCount?: number
}

withDefaults(defineProps<UserActivityProps>(), {
  gameCount: () => 6,
  runCount: () => 42,
})
</script>

<template>
  <div class="font-semibold" v-bind="$attrs">
    <p><span class="font-semibold">Runs: </span>{{ runCount }}</p>
    <p><span class="font-semibold">Games: </span>{{ gameCount }}</p>
  </div>
</template>
