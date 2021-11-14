<template>
  <div class="border-b border-gray-300">
    <div
      class="
        container
        relative
        flex flex-wrap
        lg:flex-row
        justify-between
        mx-auto
        px-3
        py-3
      "
    >
      <div class="flex flex-grow">
        <NuxtLink class="flex" to="/">
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
              text-lg text-center
              md:text-left
              font-semibold
              leading-6
              tracking-tight
              hidden
              md:inline
            "
          >
            leaderboards.gg
          </h1>
        </NuxtLink>
      </div>
      <div
        :class="{ hidden: !mobileNavIsActive }"
        class="
          lg:flex
          border-t border-gray-300
          lg:border-t-0
          flex-col
          lg:flex-row
          mt-2
          lg:mt-0
          w-full
          lg:w-auto
          space-y-2
          lg:space-y-0
        "
      >
        <CoreNavLinks />
        <CoreSearchBar />
      </div>
      <div
        class="
          flex flex-row
          items-center
          absolute
          right-2
          top-4
          lg:relative lg:right-0 lg:top-0
          space-x-2
          lg:space-x-0
        "
      >
        <CoreLoginButton
          data-testId="site-navbar-login-button"
          @click="toggleLoginModal"
          @keyup.enter="toggleLoginModal"
        />
        <CoreSignUpButton
          data-testId="site-navbar-sign-up-button"
          @click="toggleSignUpModal"
          @keyup.enter="toggleSignUpModal"
        />

        <button
          class="items-center rounded text-black lg:hidden"
          @click="toggleMenu"
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

    <transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseModal v-show="showModal" @close="showModal = false">
        <LogInCard
          v-show="showLogin"
          class="shadow-xl"
          :modal="true"
          @close="showModal = false"
          @signUpClick="showLogin = false"
        />
        <SignUpCard
          v-show="!showLogin"
          class="shadow-xl"
          :modal="true"
          @close="showModal = false"
          @logInClick="showLogin = true"
        />
      </BaseModal>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api';
import LogInCard from '../LogInCard/LogInCard.vue';
import SignUpCard from '../SignUpCard/SignUpCard.vue';

export default defineComponent({
  components: {
    LogInCard,
    SignUpCard,
  },
  setup() {
    const state = reactive({
      mobileNavIsActive: false,
      showLogin: false,
      showModal: false,
    });

    function toggleMenu() {
      state.mobileNavIsActive = !state.mobileNavIsActive;
    }

    function toggleLoginModal() {
      state.showModal = !state.showModal;
      state.showLogin = true;
    }

    function toggleSignUpModal() {
      state.showModal = !state.showModal;
      state.showLogin = false;
    }

    return {
      ...toRefs(state),
      toggleLoginModal,
      toggleMenu,
      toggleSignUpModal,
    };
  },
});
</script>
