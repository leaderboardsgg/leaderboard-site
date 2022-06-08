<script setup lang="ts">
import { computed, defineEmits, withDefaults } from 'vue'

type BaseInputValueType = number | string
interface BaseInputProps {
  value?: BaseInputValueType
}

const props = withDefaults(defineProps<BaseInputProps>(), {
  value: '',
})

const emit = defineEmits<{ (e: 'input', value: BaseInputValueType): void }>()
const model = computed({
  get(): BaseInputValueType {
    return props.value
  },
  set(value: BaseInputValueType): void {
    emit('input', value)
  },
})
</script>
<script lang="ts">
export default { name: 'BaseInput' }
</script>

<template>
  <input v-model="model" class="input" />
</template>

<style lang="postcss" scoped>
.input {
  @apply border border-gray-300 rounded px-3 py-2 focus:outline-none;
}
</style>
