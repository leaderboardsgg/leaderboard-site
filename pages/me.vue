<template>
  <div>
    <h1>Simple example page for auth</h1>
    <pre>{{ $auth.user }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  middleware: 'auth',
  setup() {},
});
</script>
