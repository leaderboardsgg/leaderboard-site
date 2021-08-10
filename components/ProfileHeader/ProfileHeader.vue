<template>
  <div class="profile-header">
    <div class="profile-banner">
      <img src="https://via.placeholder.com/885x120" alt="profile banner" />
    </div>
    <div class="profile-info-container">
      <div class="profile-info">
        <div class="profile-info--header">
          <div class="profile-info--user-activity">
            <p><span class="font-semibold">Runs: </span>{{ runCount }}</p>
            <p><span class="font-semibold">Games: </span>{{ gameCount }}</p>
          </div>
          <div class="profile-info--picture-container">
            <img src="https://via.placeholder.com/120" alt="profile picture" />
          </div>
          <div class="profile-info--user-badges">
            <CoreUserBadges bagdes="badges" />
          </div>
        </div>
        <div class="profile-info--user-bio">
          <h1 class="text-2xl font-semibold">{{ username }}</h1>
          <h2 class="text-sm text-black text-opacity-50">{{ location }}</h2>
          <p class="text-black text-opacity-50 pt-2">{{ bio }}</p>
        </div>
        <div class="profile-info--follow">
          <CoreFollowButton :badges="badges" />
        </div>
        <div class="profile-info--socials">
          <CoreSocialButtons :socials="socials" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
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
          icon: 'twtr',
          name: 'Twitter',
          url: 'https://twitter.com/',
        },
        {
          icon: 'twtr',
          name: 'Twitter',
          url: 'https://twitter.com/',
        },
        {
          icon: 'twtr',
          name: 'Twitter',
          url: 'https://twitter.com/',
        },
        {
          icon: 'twtr',
          name: 'Twitter',
          url: 'https://twitter.com/',
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
  @apply max-w-screen-sm;
  @apply border border-current;
}

.profile-banner {
  height: 50%;
  min-height: 50%;

  @apply bg-cover bg-center bg-gray-900;
  @apply flex items-center justify-center overflow-x-hidden;
}

.profile-banner > img {
  @apply flex-shrink-0 object-cover min-h-full min-w-full;
}

.profile-info-container {
  position: absolute;
  @apply bg-transparent;
  @apply m-5 mb-0;
}

.profile-info {
  margin-top: 60px;

  @apply bg-white;
  @apply grid grid-cols-1;
  @apply border border-gray-300 rounded;
}

.profile-info--header {
  @apply grid grid-rows-1 grid-cols-3 relative;
}

.profile-info--picture-container {
  @apply relative;
}

.profile-info--picture-container > img {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  max-height: 120px;
  max-width: 120px;

  @media screen(md) {
    max-height: 82px;
    max-width: 82px;
  }

  @apply absolute transform -translate-y-1/2;
  @apply rounded;
}

.profile-info--socials {
  @apply p-4 pt-0;
}

.profile-info--follow > .follow-button {
  @apply w-full;
}

.profile-info--follow,
.profile-info--user-activity,
.profile-info--user-badges {
  @apply p-4;
}

.profile-info--user-bio {
  @apply row-span-2;
  @apply px-4;
  @apply text-center;
}
</style>
