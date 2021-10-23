<template>
  <div class="card-body" v-bind="$attrs" v-on="$listeners">
    <slot />
  </div>
</template>

<style scoped>
.card-body {
  @apply p-3;
}
</style>
