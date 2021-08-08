<template>
  <div
    id="signup"
    class="flex flex-grow container mx-auto p-3 justify-center items-start"
  >
    <SignUpCard @logInClick="$router.push('/login')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SignUp',
})
</script>
