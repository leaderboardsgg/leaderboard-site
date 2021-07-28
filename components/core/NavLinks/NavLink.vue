<template>
  <BaseButtonLink
    class="nav-link"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </BaseButtonLink>
</template>

<style scoped>
  @layer components {
    .nav-link {
      @apply w-full mt-2 lg:mt-0 lg:mx-1 py-1 hover:bg-gray-100;
    }
  }
</style>
