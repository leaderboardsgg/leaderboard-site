<template>
  <div class="sign-up-button">
    <SignUp class-names="lg:hidden"/>
    <SignUp
      class-names="
        m-1 lg:my-0
        hidden lg:inline
      "
    />
  </div>
</template>

<script>
import SignUp from './SignUp';

export default {
  components: {
    SignUp
  }
}
</script>
