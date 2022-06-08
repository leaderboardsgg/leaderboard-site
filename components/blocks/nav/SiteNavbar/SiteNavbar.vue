<script setup lang="ts">
import { reactive } from 'vue'
import BaseModal from '@/components/elements/modals/BaseModal/BaseModal.vue'
import LogInCard from '@/components/blocks/cards/LogInCard/LogInCard.vue'
import LoginButton from '@/components/elements/buttons/LoginButton/LoginButton.vue'
import LogoutButton from '@/components/elements/buttons/LogoutButton/LogoutButton.vue'
import NavLinks from '@/components/elements/nav/NavLinks/NavLinks.vue'
import SearchBar from '@/components/blocks/SearchBar/SearchBar.vue'
import SignUpButton from '@/components/elements/buttons/SignUpButton/SignUpButton.vue'
import SignUpCard from '@/components/blocks/cards/SignUpCard/SignUpCard.vue'

interface NavbarState {
  mobileNavIsActive: boolean
  showLogin: boolean
  showModal: boolean
}

const state: NavbarState = reactive({
  mobileNavIsActive: false,
  showLogin: false,
  showModal: false,
})

const $auth = { loggedIn: false }

function toggleMenu() {
  state.mobileNavIsActive = !state.mobileNavIsActive
}

function toggleLoginModal() {
  state.showModal = !state.showModal
  state.showLogin = true
}

function toggleSignUpModal() {
  state.showModal = !state.showModal
  state.showLogin = false
}

function logout() {
  console.log('logout') // eslint-disable-line no-console
}
</script>
<script lang="ts">
export default { name: 'SiteNavbar' }
</script>

<template>
  <div class="site-navbar">
    <div class="site-navbar__wrapper">
      <div class="site-logo">
        <NuxtLink class="site-navbar__homelink" to="/">
          <i-svg-clock class="mx-1 w-10 h-10" />
          <h1>leaderboards.gg</h1>
        </NuxtLink>
      </div>
      <div :class="{ hidden: !state.mobileNavIsActive }" class="mobile-menu">
        <NavLinks />
        <SearchBar />
      </div>
      <div class="mobile-navbar">
        <LoginButton
          v-if="!$auth.loggedIn"
          data-testId="site-navbar-login-button"
          @click="toggleLoginModal"
          @keyup.enter="toggleLoginModal"
        />
        <SignUpButton
          v-if="!$auth.loggedIn"
          data-testId="site-navbar-sign-up-button"
          @click="toggleSignUpModal"
          @keyup.enter="toggleSignUpModal"
        />
        <LogoutButton
          v-if="$auth.loggedIn"
          data-testId="site-navbar-logout-button"
          @click="logout"
          @keyup.enter="logout"
        />

        <button class="mobile-menu__toggle" @click="toggleMenu">
          <i-svg-menu class="mx-2 w-5 h-5 fill-current" />
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
      <BaseModal v-show="state.showModal" @close="state.showModal = false">
        <LogInCard
          v-show="state.showLogin"
          class="shadow-xl"
          :modal="true"
          @close="state.showModal = false"
          @signUpClick="state.showLogin = false"
        />
        <SignUpCard
          v-show="!state.showLogin"
          class="shadow-xl"
          :modal="true"
          @close="state.showModal = false"
          @logInClick="state.showLogin = true"
        />
      </BaseModal>
    </transition>
  </div>
</template>

<style lang="postcss" scoped>
.site-navbar {
  @apply border-b border-gray-300;
  & .site-navbar__wrapper {
    @apply container relative flex flex-wrap lg:flex-row justify-between mx-auto px-3 py-3;
    & .mobile-menu {
      @apply lg:flex border-t border-gray-300 lg:border-t-0 flex-col lg:flex-row mt-2 lg:mt-0 w-full lg:w-auto space-y-2 lg:space-y-0;
    }
    & .mobile-navbar {
      @apply flex flex-row items-center absolute right-2 top-4 lg:relative lg:right-0 lg:top-0 space-x-2 lg:space-x-0;
      & .mobile-menu__toggle {
        @apply items-center rounded text-black lg:hidden;
      }
    }
  }
  & .site-logo {
    @apply flex grow;
    & .site-navbar__homelink {
      @apply flex;
      & h1 {
        @apply w-full py-2 text-lg text-center md:text-left font-semibold leading-6 tracking-tight hidden md:inline;
      }
    }
  }
}
</style>
