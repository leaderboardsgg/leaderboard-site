<template>
  <button class="base-button" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<style>
.base-button {
  @apply rounded px-3 py-2 text-current hover:bg-current;
}
</style>
