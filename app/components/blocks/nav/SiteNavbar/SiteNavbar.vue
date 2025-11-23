<script setup lang="ts">
import { useSessionToken } from '#imports'
import ForgotPasswordCard from 'blocks/cards/ForgotPasswordCard/ForgotPasswordCard.vue'
import LogInCard from 'blocks/cards/LogInCard/LogInCard.vue'
import SignUpCard from 'blocks/cards/SignUpCard/SignUpCard.vue'
import SearchBar from 'blocks/SearchBar/SearchBar.vue'
import LoginButton from 'elements/buttons/LoginButton/LoginButton.vue'
import LogoutButton from 'elements/buttons/LogoutButton/LogoutButton.vue'
import SignUpButton from 'elements/buttons/SignUpButton/SignUpButton.vue'
import BaseModal from 'elements/modals/BaseModal/BaseModal.vue'
import { computed, reactive } from 'vue'
import { useLogoutUser } from '~/composables/api'

interface NavbarState {
  mobileNavIsActive: boolean
  showForgotPassword: boolean
  showLogin: boolean
  showModal: boolean
  showSignUp: boolean
}

const state: NavbarState = reactive({
  mobileNavIsActive: false,
  showForgotPassword: false,
  showLogin: false,
  showModal: false,
  showSignUp: false,
})

const token = useSessionToken()
const loggedIn = computed(() => !!token.value)

function showForgotPassword() {
  state.showForgotPassword = true
  state.showLogin = false
  state.showSignUp = false
}

function showLogin() {
  state.showForgotPassword = false
  state.showLogin = true
  state.showSignUp = false
}

function showSignUp() {
  state.showForgotPassword = false
  state.showLogin = false
  state.showSignUp = true
}

function toggleMenu() {
  state.mobileNavIsActive = !state.mobileNavIsActive
}

function toggleLoginModal() {
  state.showModal = !state.showModal
  showLogin()
}

function toggleSignUpModal() {
  state.showModal = !state.showModal
  showSignUp()
}

function logout() {
  useLogoutUser()
  state.showModal = false
}
</script>

<template>
  <div class="site-navbar">
    <div class="site-navbar__wrapper">
      <NuxtLink to="/">
        <i-svg-logo />
      </NuxtLink>
      <SearchBar />
      <div class="mobile-navbar">
        <NavLinks />
        <LoginButton
          v-if="!loggedIn"
          data-testid="site-navbar-login-button"
          @click="toggleLoginModal"
        />
        <SignUpButton
          v-if="!loggedIn"
          data-testid="site-navbar-sign-up-button"
          class="ml-4"
          @click="toggleSignUpModal"
        />
        <LogoutButton
          v-if="loggedIn"
          data-testid="site-navbar-logout-button"
          @click="logout"
        />
        <button class="mobile-navbar__toggle" @click="toggleMenu">
          <i-svg-menu class="mx-2 size-5 fill-current" />
        </button>
      </div>
    </div>

    <transition
      v-if="!loggedIn"
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
      enter-to-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <BaseModal v-show="state.showModal" @close="state.showModal = false">
        <ForgotPasswordCard
          v-show="state.showForgotPassword"
          data-testid="forgot-password-card"
          class="shadow-xl"
          :modal="true"
          @close="state.showModal = false"
          @cancel-click="showLogin"
        />
        <LogInCard
          v-show="state.showLogin"
          data-testid="log-in-card"
          class="shadow-xl"
          :modal="true"
          @close="state.showModal = false"
          @sign-up-click="showSignUp"
          @forgot-password-click="showForgotPassword"
        />
        <SignUpCard
          v-show="state.showSignUp"
          data-testid="sign-up-card"
          class="shadow-xl"
          :modal="true"
          @close="state.showModal = false"
          @log-in-click="showLogin"
        />
      </BaseModal>
    </transition>
  </div>
</template>

<style lang="postcss" scoped>
.site-navbar {
  @apply bg-bg-content text-white text-lg;

  & .site-navbar__wrapper {
    @apply flex justify-between items-center m-6;

    & .mobile-navbar {
      @apply flex;

      & .mobile-navbar__toggle {
        @apply items-center rounded lg:hidden;
      }
    }
  }
}
</style>
