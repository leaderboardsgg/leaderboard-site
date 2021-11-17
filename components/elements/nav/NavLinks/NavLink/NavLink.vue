<template>
  <ButtonLink class="nav-link" v-bind="$attrs" v-on="$listeners">
    <slot />
  </ButtonLink>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ButtonLink from '@/components/elements/buttons/ButtonLink/ButtonLink.vue';

export default defineComponent({
  name: 'NavLink',
  components: {
    ButtonLink,
  },
});
</script>

<style scoped>
.nav-link {
  @apply w-full mt-2 lg:mt-0 lg:mx-1 py-1 hover:bg-gray-100;
}
</style>
