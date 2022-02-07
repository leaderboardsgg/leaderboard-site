<template>
  <div class="run">
    <div class="run__wrapper">
      <div class="run__standing">
        <svg-icon
          v-if="standing <= 3"
          name="trophy"
          data-testid="trophy-icon"
        />
        <p>{{ formattedStanding }}</p>
      </div>
      <p>{{ user }}</p>
    </div>
    <div class="run__info">
      <p>{{ time }}</p>
      <div class="hidden md:flex flex-row md:flex-grow">
        <p>{{ platform }}</p>
      </div>
      <div
        class="flex flex-row opacity-75 gap-x-5 md:opacity-100 justify-end items-center"
      >
        <p>{{ date }}</p>
        <svg-icon name="video" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Run',
  props: {
    date: {
      default: () => '1 year ago',
      type: String,
    },
    platform: {
      default: () => 'PC',
      type: String,
    },
    standing: {
      default: () => 1,
      type: Number,
    },
    time: {
      default: () => '01:23:45',
      type: String,
    },
    user: {
      default: () => 'JohnSmithRuns',
      type: String,
    },
  },
  setup(props) {
    const formattedStanding = computed(() => {
      /**
       * We shouldn't hard code this because
       * of i18n support
       */
      switch (props.standing) {
        case 1:
          return `${props.standing}st`;
        case 2:
          return `${props.standing}nd`;
        case 3:
          return `${props.standing}rd`;
        default:
          return `${props.standing}th`;
      }
    });

    return {
      formattedStanding,
    };
  },
});
</script>

<style lang="postcss" scoped>
.run {
  @apply flex flex-row text-base text-black py-3 border border-b-2 border-gray-200;
  & .run__wrapper {
    @apply flex flex-col gap-x-5 mr-5 md:flex-row;
    & .run__standing {
      @apply flex flex-row gap-x-1 items-center;
    }
  }
  & .run__info {
    @apply flex flex-col text-right md:text-center md:flex-row gap-x-5 flex-grow;
    & p {
      @apply md:flex-grow;
    }
  }
}
</style>
