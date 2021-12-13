<template>
  <BaseButton
    id="hide-show-password"
    data-testid="hide-show-password-button"
    class="button"
    v-bind="$attrs"
    v-on="$listeners"
    @click="toggleHidden"
    @keyup.enter="toggleHidden"
  >
    <svg-icon v-show="hidden" class="h-5 w-5" name="eye-hidden" />
    <svg-icon v-show="!hidden" class="h-5 w-5" name="eye-visible" />
  </BaseButton>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api';
import BaseButton from '@/components/elements/buttons/BaseButton.vue';

export default defineComponent({
  name: 'HideShowPassword',
  components: {
    BaseButton,
  },
  setup() {
    const state = reactive({
      hidden: true,
    });

    function toggleHidden() {
      state.hidden = !state.hidden;
    }

    return {
      ...toRefs(state),
      toggleHidden,
    };
  },
});
</script>

<style scoped>
.button {
  @apply hidden sm:inline bg-white;
}
</style>
