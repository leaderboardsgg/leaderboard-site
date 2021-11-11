<template>
  <NuxtLink class="button-link" v-bind="$attrs" v-on="$listeners">
    <slot> Placeholder </slot>
  </NuxtLink>
</template>

<style>
.button-link {
  @apply rounded px-3 py-2 text-current hover:bg-current;
}
</style>
