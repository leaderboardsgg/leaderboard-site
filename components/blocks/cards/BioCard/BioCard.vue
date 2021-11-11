<template>
  <div class="bio-card">
    <div class="bio-card__header">
      <h2>About</h2>
    </div>

    <div class="bio-card__content">
      <p>{{ bio }}</p>
      <div class="bio-card__buttons">
        <SocialButtons :socials="socials" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
import SocialButtons from '~/components/core/SocialButtons/SocialButtons';

export default defineComponent({
  name: 'BioCard',
  components: { SocialButtons },
  props: {
    bio: {
      default: () =>
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dapibus libero. Morbi ultricies varius accumsan.',
      type: String,
    },
    socials: {
      default: () => [
        {
          icon: 'dscrd',
          name: 'Discord',
          url: 'https://discord.com/',
        },
        {
          icon: 'twch',
          name: 'Twitch',
          url: 'https://twitch.tv/',
        },
        {
          icon: 'twtr',
          name: 'Twitter',
          url: 'https://twitter.com/',
        },
        {
          icon: 'yt',
          name: 'Youtube',
          url: 'https://youtube.com/',
        },
      ],
      type: Array,
    },
  },
});
</script>

<style scoped>
.bio-card {
  @apply hidden md:flex flex-col border rounded border-gray-300;
  & > div {
    @apply p-5;
  }
  ,
  &__header {
    @apply border-b border-gray-300;
    h2 {
      @apply text-xl font-bold;
    }
  }
  ,
  &__content {
    p {
      @apply text-black;
    }
  }
  ,
  &__buttons {
    @apply mt-5;
  }
}
</style>
