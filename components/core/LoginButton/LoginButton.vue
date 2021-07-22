<template>
  <div class="login-button">
    <Login class-names="lg:hidden"/>
    <Login
      class-names="
        m-1 lg:my-0
        hidden lg:inline
      "
    />
  </div>
</template>

<script>
import Login from './Login';

export default {
  components: {
    Login
  }
}
</script>
