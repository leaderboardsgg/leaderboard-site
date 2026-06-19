<script setup lang="ts">
import { definePageMeta } from '#imports';
import Loader from 'blocks/Loader/Loader.vue'

definePageMeta({
  layout: false,
  middleware: 'confirm-account',
})
</script>

<template>
  <Loader />
</template>
