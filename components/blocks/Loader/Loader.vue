<script setup lang="ts"></script>

<template>
  <div class="loader__container">
    <i-svg-spinner class="loader__spinner" />
  </div>
</template>

<style lang="postcss" scoped>
.loader__container {
  @apply flex justify-center items-center h-screen w-full;
}

.loader__spinner {
  @apply h-20 w-20 fill-current;
  animation: spin 1.25s steps(9, end) infinite;

  @media (prefers-reduced-motion) {
    animation-duration: 9s;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
