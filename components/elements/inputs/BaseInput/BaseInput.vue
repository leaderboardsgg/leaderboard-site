<script setup lang="ts">
import { ref, withDefaults } from 'vue'

type BaseInputValueType = number | string
interface BaseInputProps {
  value?: BaseInputValueType
}

const props = withDefaults(defineProps<BaseInputProps>(), {
  value: '',
})

const model = ref<BaseInputValueType>(props.value)
</script>

<template>
  <input v-model="model" class="input" v-bind="$attrs" />
</template>

<style lang="postcss" scoped>
.input {
  @apply border border-gray-300 rounded px-3 py-2 focus:outline-none;
}
</style>
