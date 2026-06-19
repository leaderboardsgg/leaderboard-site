<script setup lang="ts">
import { computed } from 'vue'
import LanguageSelector from './LanguageSelector/LanguageSelector.vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="grid md:grid-cols-3 grid-cols-1 md:gap-y-0 gap-y-5 items-center rounded bg-gray-100 p-5 text-gray-600 mt-auto">
    <p class="md:col-start-2 w-full text-center">Copyright {{ currentYear }}</p>
    <LanguageSelector data-testid="language-selector" />
  </footer>
</template>