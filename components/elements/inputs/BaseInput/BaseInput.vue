<script setup lang="ts">
import { type Ref, toRef } from 'vue'

interface BaseInputProps {
  model?: Ref<string | number>
}

const props = defineProps<BaseInputProps>()
const model = toRef(props, 'model')
</script>

<template>
  <input v-model="model" class="input" v-bind="$attrs" >
</template>

<style lang="postcss" scoped>
.input {
  @apply border border-gray-300 rounded px-3 py-2 focus:outline-none;
}
</style>
