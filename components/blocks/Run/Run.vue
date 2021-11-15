<template>
  <div class="run">
    <div class="flex flex-col gap-x-5 mr-5 md:flex-row">
      <div class="flex flex-row gap-x-1 items-center">
        <svg
          v-if="standing <= 3"
          id="trophy"
          width="14"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            fill="#000"
            d="M12.444 1.556H10.89V.778A.78.78 0 0 0 10.11 0H3.89a.78.78 0 0 0-.778.778v.778H1.556C.7 1.556 0 2.256 0 3.11v.778C0 5.872 1.493 7.49 3.414 7.73a3.896 3.896 0 0 0 2.808 2.302v2.411H3.89a.78.78 0 0 0-.778.778c0 .428.35.778.778.778h6.222a.78.78 0 0 0 .778-.778.78.78 0 0 0-.778-.778H7.778v-2.41a3.896 3.896 0 0 0 2.808-2.303C12.506 7.49 14 5.872 14 3.89v-.78c0-.855-.7-1.555-1.556-1.555ZM1.556 3.889V3.11H3.11v2.971A2.341 2.341 0 0 1 1.556 3.89Zm10.888 0a2.341 2.341 0 0 1-1.555 2.193v-2.97h1.555v.777Z"
          />
        </svg>
        <p>{{ formattedStanding }}</p>
      </div>
      <p>{{ user }}</p>
    </div>
    <div
      class="
        flex flex-col
        text-right
        md:text-center md:flex-row
        gap-x-5
        flex-grow
      "
    >
      <p class="md:flex-grow">{{ time }}</p>
      <div class="hidden md:flex flex-row md:flex-grow">
        <p>{{ platform }}</p>
      </div>
      <div
        class="
          flex flex-row
          opacity-75
          gap-x-5
          md:opacity-100
          justify-end
          items-center
        "
      >
        <p>{{ date }}</p>
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 4.5V1C14 0.45 13.55 0 13 0H1C0.45 0 0 0.45 0 1V11C0 11.55 0.45 12 1 12H13C13.55 12 14 11.55 14 11V7.5L16.29 9.79C16.92 10.42 18 9.97 18 9.08V2.91C18 2.02 16.92 1.57 16.29 2.2L14 4.5Z"
            fill="black"
            fill-opacity="0.71"
          />
        </svg>
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

<style scoped>
.run {
  @apply flex flex-row text-base text-black py-3 border border-b-2 border-gray-200;
}
</style>
