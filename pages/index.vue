<template>
  <div class="flex grow justify-center p-5">
    <div class="p-5 w-full rounded border border-gray-300">
      <h2 class="text-2xl font-bold text-center">{{ $t('welcome') }}</h2>
      <p class="text-center">This is just a primary content placeholder.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({});
</script>
