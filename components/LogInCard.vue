<template>
  <BaseCard id="loginCard" class="bg-white w-full max-w-xl">
    <BaseCardHeader class="flex flex-row space-x-3">
      <div
        class="
          flex flex-1
          justify-center
          px-3
          py-2
          rounded
          bg-gray-100
          text-gray-900
        "
      >
        Log In
      </div>

      <BaseButton
        class="
          flex flex-1
          justify-center
          bg-white
          text-gray-900
          border border-gray-300
          hover:bg-gray-100
        "
        @click="$emit('signUpClick')"
      >
        Sign Up
      </BaseButton>

      <CoreCloseButton v-show="modal" @click.prevent="$emit('close')" />
    </BaseCardHeader>

    <BaseCardBody>
      <div class="flex flex-col space-y-3 pb-3 mb-3 border-b border-gray-300">
        <BaseInput
          v-model="email"
          class="bg-white"
          name="email"
          type="text"
          placeholder="Email"
          autocomplete="email"
        />

        <div class="relative flex flex-col w-full">
          <BaseInput
            v-model="password"
            class="bg-white pr-12"
            name="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            autocomplete="password"
          />

          <div class="absolute top-0 right-0 flex items-center h-full">
            <BaseButton
              type="submit"
              class="
                p-1
                mr-2
                rounded
                fill-current
                text-gray-500
                hover:bg-gray-100 hover:text-gray-600
              "
              @click="showPassword = !showPassword"
            >
              <svg
                v-show="!showPassword"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clip-rule="evenodd"
                />
                <path
                  d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                />
              </svg>

              <svg
                v-show="showPassword"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fill-rule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </BaseButton>
          </div>
        </div>

        <BaseButton to="#" class="login-button">Log In</BaseButton>
      </div>

      <div class="flex flex-col w-full space-y-2">
        <BaseButton class="login-button">
          <svg
            class="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 512"
          >
            <path
              fill="currentColor"
              d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
            ></path>
          </svg>

          <p>Log In with Github</p>
        </BaseButton>

        <BaseButton class="login-button">
          <svg
            class="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>

          <p>Log In with Google</p>
        </BaseButton>
      </div>
    </BaseCardBody>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LoginCard',

  props: {
    modal: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    }
  },
})
</script>

<style scoped>
.login-button {
  @apply flex flex-1 items-center justify-center fill-current bg-gray-100 text-gray-900 hover:bg-gray-200;
}
</style>
