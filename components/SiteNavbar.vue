<template>
  <div class="border-b border-gray-300">
    <div
      class="
        container relative
        flex flex-wrap lg:flex-row justify-between
        mx-auto px-3 py-3
      "
    >
      <NuxtLink class="flex flex-grow" to="/">
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 mx-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1
            class="
              w-full
              py-2
              text-lg text-center md:text-left
              font-semibold
              leading-6
              tracking-tight
              hidden md:inline
            "
          >
            speedrun.website
          </h1>
        </div>
      </NuxtLink>
      <div
        v-show="lg || mobileNavIsActive"
        class="
          border-t border-gray-300 lg:border-t-0
          flex flex-col lg:flex-row
          mt-2 lg:mt-0
          w-full lg:w-auto
          space-y-2 lg:space-y-0
        "
      >
        <CoreNavLinks />
        <CoreSearchBar />
      </div>
      <div class="
             flex flex-row items-center
             absolute right-2 top-4
             lg:relative lg:right-0 lg:top-0
             space-x-2 lg:space-x-0
           "
      >
        <CoreLoginButton />
        <CoreSignUpButton />
        <button
          class="
            items-center
            rounded
            text-black
            lg:hidden
          "
          @click="mobileNavIsActive = !mobileNavIsActive"
        >
          <svg
            class="fill-current h-5 w-5 mx-2"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * TODO use https://vueuse.org/core/usebreakpoints and
 * https://vueuse.org/core/useEventListener/
 */

export default Vue.extend({
  data: () => ({
    lg: false,
    mobileNavIsActive: false,
  }),
  mounted() {
    this.lgSetBool()
  },
  beforeMount() {
    addEventListener('resize', this.lgSetBool)
  },
  beforeDestroy() {
    removeEventListener('resize', this.lgSetBool)
  },
  methods: {
    lgSetBool() {
      return (this.lg = innerWidth >= 1024)
    },
  },
})
</script>
