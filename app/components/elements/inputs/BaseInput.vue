<script setup lang="ts">
import { type Ref, toRef } from 'vue'

interface BaseInputProps {
  model?: Ref<string | number>
}

const props = defineProps<BaseInputProps>()
const model = toRef(props, 'model')
</script>

<template>
  <input
    v-model="model"
    class="border border-gray-300 text-black rounded-sm px-3 py-2 focus:outline-hidden"
    v-bind="$attrs"
  />
</template>
