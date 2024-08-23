<script setup lang="ts">
import { useI18n } from '#imports'
import type { ComputedRef } from 'vue'
// import { type LocaleObject } from '#imports'

const NuxtI18n = useI18n()
const locale = NuxtI18n.locale
const locales = NuxtI18n.locales as ComputedRef<any[]>
</script>

<template>
  <!-- eslint-disable vuejs-accessibility/form-control-has-label -->
  <select v-model="locale" class="language-selector" role="listbox">
    <option
      v-for="currentLocale in locales"
      :key="currentLocale.code"
      :value="currentLocale.code"
      :selected="currentLocale.code === locale"
    >
      {{ currentLocale.name }}
    </option>
  </select>
</template>

<style lang="postcss" scoped>
.language-selector {
  @apply bg-white border border-current rounded;
  @apply flex items-center px-2 py-2 relative;
  @apply w-32;
}
.language-selector > option {
  @apply flex items-center py-2;
}
</style>
