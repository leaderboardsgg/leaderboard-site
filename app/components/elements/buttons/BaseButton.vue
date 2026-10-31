<script setup lang="ts"></script>

<template>
  <button
    class="rounded-sm px-3 py-2 text-current cursor-pointer hover:bg-gray-100 hover:text-black"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
