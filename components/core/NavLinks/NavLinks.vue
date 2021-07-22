<template>
  <nav class="
        flex flex-col lg:flex-row items-center
        w-auto
        space-y-2 lg:space-y-0
        text-center text-black
      "
  >
    <NavLink>Games</NavLink>
    <NavLink>About</NavLink>
  </nav>
</template>

<script>
import NavLink from './NavLink';

export default {
  components: {
    NavLink
  }
}
</script>