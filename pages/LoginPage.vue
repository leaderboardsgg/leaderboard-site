<template>
  <div
    id="login"
    class="flex flex-grow container mx-auto p-3 justify-center items-center"
  >
    <LogInCard @signUpClick="$router.push('/signup')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'LoginPage',
});
</script>
