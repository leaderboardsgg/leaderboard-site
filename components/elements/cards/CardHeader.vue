<template>
  <div class="card-header" v-bind="$attrs" v-on="$listeners">
    <slot />
  </div>
</template>

<style scoped>
.card-header {
  @apply p-3 border-b border-gray-300;
}
</style>
