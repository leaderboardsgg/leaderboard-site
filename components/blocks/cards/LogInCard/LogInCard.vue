<template>
  <Card id="loginCard" data-testid="login-card" class="login-card">
    <CardHeader class="login-card__header">
      <div class="login-card__title">Log In</div>

      <BaseButton
        id="sign-up-button"
        class="login-card__sign-up-button"
        @click="$emit('signUpClick')"
      >
        Sign Up
      </BaseButton>

      <CloseButton v-show="modal" @click.prevent="$emit('close')" />
    </CardHeader>

    <CardBody>
      <div class="login-card__body-wrapper">
        <BaseInput
          v-model="email"
          name="email"
          type="text"
          placeholder="Email"
          autocomplete="email"
        />

        <div class="login-card__input-wrapper">
          <BaseInput
            v-model="password"
            class="login-card__password-field"
            name="password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            autocomplete="password"
          />

          <div class="login-card__button-wrapper">
            <HideShowPassword
              id="hide-show-button"
              type="button"
              @click="showPassword = !showPassword"
              @keydown.enter.prevent
              @keyup.enter="showPassword = !showPassword"
            />
          </div>
        </div>

        <BaseButton class="login-button" @click="login">Log In</BaseButton>
      </div>

      <div class="login-card__auth-buttons">
        <BaseButton class="login-button">
          <svg
            class="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 512"
          >
            <path
              fill="currentColor"
              d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
            />
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
            />
          </svg>

          <p>Log In with Google</p>
        </BaseButton>
      </div>
    </CardBody>
  </Card>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api';
import HideShowPassword from '@/components/elements/buttons/HideShowPassword/HideShowPassword.vue';
import BaseInput from '@/components/elements/BaseInput.vue';
import Card from '@/components/elements/cards/Card.vue';
import CardBody from '@/components/elements/cards/CardBody.vue';
import CardHeader from '@/components/elements/cards/CardHeader.vue';
import BaseButton from '@/components/elements/buttons/BaseButton.vue';
import CloseButton from '@/components/elements/buttons/CloseButton.vue';

export default defineComponent({
  components: {
    BaseButton,
    BaseInput,
    Card,
    CardBody,
    CardHeader,
    CloseButton,
    HideShowPassword,
  },
  props: {
    modal: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(_, { emit }) {
    const { $auth } = useContext();

    const state = reactive({
      email: '',
      password: '',
      showPassword: false,
    });

    async function login() {
      await $auth.loginWith('local', {
        data: {
          email: state.email,
          password: state.password,
        },
      });

      state.email = '';
      state.password = '';
      state.showPassword = false;

      emit('close');
    }

    return {
      ...toRefs(state),
      login,
    };
  },
});
</script>

<style scoped>
.login-card {
  @apply bg-white w-full max-w-xl;
  & .login-card__header {
    @apply flex flex-row space-x-3;
  }
  & .login-card__title {
    @apply flex flex-1 justify-center px-3 py-2 rounded bg-gray-100 text-gray-900;
  }
  & .login-card__sign-up-button {
    @apply flex flex-1 justify-center bg-white text-gray-900 border border-gray-300;
  }
  & .login-card__body-wrapper {
    @apply flex flex-col space-y-3 pb-3 mb-3 border-b border-gray-300;
  }
  & .login-card__input-wrapper {
    @apply relative flex flex-col w-full;
  }
  & .login-card__button-wrapper {
    @apply absolute top-0 right-0 flex items-center h-full;
  }
  & .login-card__auth-buttons {
    @apply flex flex-col w-full space-y-2;
  }
  & .login-card__password-field {
    @apply bg-white pr-12;
  }
}

#hide-show-button {
  @apply text-gray-700 hover:bg-gray-100;
  @apply p-1 mr-2 rounded fill-current;
}

#sign-up-button {
  @apply hover:bg-gray-100;
}

.login-button {
  @apply flex flex-1 items-center justify-center fill-current bg-gray-100 text-gray-900 hover:bg-gray-200;
}
</style>
