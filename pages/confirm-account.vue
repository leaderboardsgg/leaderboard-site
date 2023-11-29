<script setup lang="ts">
import Loader from 'blocks/Loader/Loader.vue'

definePageMeta({
  layout: false,
  middleware: 'confirm-account',
})
</script>

<template>
  <Loader />
</template>
