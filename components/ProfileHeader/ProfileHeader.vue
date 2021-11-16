<template>
  <div class="profile-header">
    <div class="profile-banner">
      <img src="https://via.placeholder.com/885x120" alt="profile banner" />
    </div>
    <div class="profile-info-container">
      <div class="profile-info">
        <div class="profile-info--header">
          <UserActivity
            class="md:hidden"
            :game-count="gameCount"
            :run-count="runCount"
          />
          <div class="profile-info--picture-container">
            <img src="https://via.placeholder.com/120" alt="profile picture" />
          </div>
          <div class="profile-info--user-badges md:hidden">
            <CoreUserBadges :badges="badges" />
          </div>
        </div>
        <div class="profile-info--user-bio">
          <h1 class="text-2xl font-semibold">
            {{ username }}
          </h1>
          <h2 class="text-sm text-black text-opacity-50">
            {{ location }}
          </h2>
          <p class="text-black text-opacity-50 pt-2 md:hidden">
            {{ bio }}
          </p>
        </div>
        <div class="profile-info--follow">
          <CoreFollowButton />
        </div>
        <UserActivity
          class="hidden md:grid"
          :game-count="gameCount"
          :run-count="runCount"
        />
        <div class="profile-info--socials md:hidden">
          <CoreSocialButtons :socials="socials" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
import UserActivity from './UserActivity/UserActivity.vue';

export default defineComponent({
  components: {
    UserActivity,
  },
  props: {
    badges: {
      default: () => [],
      type: Array,
    },
    bio: {
      default: () =>
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dapibus libero. Morbi ultricies varius accumsan.',
      type: String,
    },
    gameCount: {
      default: () => 6,
      type: Number,
    },
    location: {
      default: () => 'Olympus Mons, Mars',
      type: String,
    },
    runCount: {
      default: () => 42,
      type: Number,
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
    username: {
      default: () => 'JohnSmithRuns',
      type: String,
    },
  },
});
</script>

<style scoped>
.profile-header {
  height: fit-content;
  min-height: 450px;
  position: relative;

  @apply flex flex-col;
  @apply max-w-screen-md md:max-w-full md:min-h-0 md:h-auto;
  @apply border md:border-gray-300 md:rounded;
}

.profile-banner {
  height: 50%;
  min-height: 50%;

  @apply md:h-auto md:min-h-0;
  @apply bg-cover bg-center bg-gray-900;
  @apply flex items-center justify-center overflow-hidden;
}

.profile-banner > img {
  @apply flex-shrink-0 object-cover min-h-full min-w-full;
}

.profile-info-container {
  @apply absolute md:relative bg-transparent;
  @apply m-5 mb-0 md:m-0;
}

.profile-info {
  margin-top: 60px;
  @apply md:mt-0 md:px-4;

  @apply bg-white;
  @apply grid grid-cols-1 md:flex md:items-center;
  @apply border border-gray-300 rounded md:border-none;
}

.profile-info--header {
  @apply grid grid-rows-1 grid-cols-3 md:flex relative;
}

.profile-info--picture-container {
  @apply relative flex justify-center;
}

.profile-info--picture-container > img {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  max-height: 120px;
  max-width: 120px;

  @media screen(md) {
    max-height: 82px;
    max-width: 82px;
  }

  @apply absolute md:relative rounded transform -translate-y-1/2;
}

.profile-info--socials {
  @apply p-4 pt-0;
}

.profile-info--follow > .follow-button {
  @apply w-full md:px-5;
}

.profile-info--follow,
.profile-info--user-activity,
.profile-info--user-badges {
  @apply p-4 md:pl-5 md:pr-0;
}

.profile-info--user-activity {
  @apply md:grid-cols-2 md:gap-x-5;
}

.profile-info--user-bio {
  @apply row-span-2;
  @apply px-4 md:pl-5 md:pr-0;
  @apply text-center;
}
</style>
