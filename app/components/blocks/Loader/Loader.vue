<template>
  <div class="flex justify-center items-center h-screen w-full">
    <i-svg-spinner class="loader-spinner h-20 w-20 fill-current" />
  </div>
</template>

<style scoped>
.loader-spinner {
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
