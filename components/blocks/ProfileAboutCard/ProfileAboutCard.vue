<template>
  <div class="profile-about-card">
    <div class="border-b border-gray-300">
      <h2 class="text-xl font-bold">About</h2>
    </div>

    <div>
      <p class="text-black">{{ bio }}</p>
      <div class="mt-5">
        <CoreSocialButtons :socials="socials" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
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
.profile-about-card {
  @apply hidden md:flex flex-col border rounded border-gray-300;
}

.profile-about-card > div {
  @apply p-5;
}
</style>
