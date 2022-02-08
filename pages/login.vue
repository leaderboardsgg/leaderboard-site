<template>
  <div
    id="login"
    class="container flex grow justify-center items-center p-3 mx-auto"
  >
    <LogInCard @signUpClick="$router.push('/signup')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Login',
});
</script>
