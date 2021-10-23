<template>
  <div
    id="signup"
    class="flex flex-grow container mx-auto p-3 justify-center items-center"
  >
    <SignUpCard @logInClick="pushLogin" @success="pushLogin" />
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'SignUp',
  middleware: 'guest',
  setup() {
    const router = useRouter();

    function pushLogin() {
      router.push('/login');
    }

    return {
      pushLogin,
    };
  },
});
</script>
