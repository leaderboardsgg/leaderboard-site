<template>
  <div
    id="signup"
    class="container flex grow justify-center items-center p-3 mx-auto"
  >
    <SignUpCard @logInClick="$router.push('/login')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'SignUp',
});
</script>
