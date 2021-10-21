<template>
  <div
    class="
      flex flex-row
      text-base text-black
      py-3
      border border-0 border-b-2 border-gray-200
    "
  >
    <div class="flex flex-col gap-x-5 mr-5 md:flex-row">
      <p>{{ standing }}</p>
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
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
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
      default: () => '123th',
      type: String,
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
});
</script>
