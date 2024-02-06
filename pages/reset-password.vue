<script setup lang="ts">
import Loader from 'blocks/Loader/Loader.vue'

definePageMeta({
  layout: false,
  middleware: 'reset-password',
})
</script>

<template>
  <Loader />
</template>
