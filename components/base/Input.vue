<template>
  <input class="input" v-model="model" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: ['value'],

  computed: {
    model: {
      get(): any {
        return this.value
      },
      set(value: any): void {
        this.$emit('input', value)
      },
    },
  },
})
</script>

<style scoped>
.input {
  @apply border border-gray-300 rounded px-3 py-2 focus:outline-none;
}
</style>
