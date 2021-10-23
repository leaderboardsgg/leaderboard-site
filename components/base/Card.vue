<template>
  <div class="card" v-bind="$attrs" v-on="$listeners">
    <slot />
  </div>
</template>

<style scoped>
.card {
  @apply rounded border border-gray-300;
}
</style>
