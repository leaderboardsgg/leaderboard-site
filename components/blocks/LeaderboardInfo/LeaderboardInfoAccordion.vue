<script lang="ts" setup>
import { ref } from 'vue'

interface LeaderboardInfoAccordionProps {
  info: string
}
const enabled = ref(false)
const toggle = () => {
  enabled.value = !enabled.value
}

defineProps<LeaderboardInfoAccordionProps>()
</script>

<template>
  <div>
    <button
      id="leaderboard-info-button"
      class="hover:cursor-pointer"
      @click="toggle"
      @keypress="toggle"
    >
      <span v-if="enabled" class="mr-2">▼</span>
      <span v-else class="mr-2">▶</span>
      <span class="text-blue-500 underline">
        {{ $t('info') }}
      </span>
    </button>
    <p v-if="enabled" id="leaderboard-info-text" class="mt-2 bg-white p-4">
      {{ info }}
    </p>
  </div>
</template>
