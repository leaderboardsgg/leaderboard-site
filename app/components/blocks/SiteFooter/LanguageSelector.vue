<script setup lang="ts">
import { ref, useI18n, watch } from '#imports'
const { locale, locales, setLocale } = useI18n()

const localLocale = ref(locale.value)

watch(localLocale, () => {
  setLocale(localLocale.value)
})
</script>

<template>
  <select
    v-model="localLocale"
    class="bg-white border border-current rounded-sm flex items-center px-2 py-2 relative w-32"
    role="listbox"
  >
    <option
      v-for="currentLocale in locales"
      class="flex items-center py-2"
      :key="currentLocale.code"
      :value="currentLocale.code"
      :selected="currentLocale.code === locale"
    >
      {{ currentLocale.name }}
    </option>
  </select>
</template>
