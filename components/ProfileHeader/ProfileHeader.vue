<template>
  <div class="profile-header">
    <div class="profile-banner"></div>
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
          <p class="text-black text-opacity-50 py-2">{{ bio }}</p>
        </div>
        <CoreFollowButton />
        <div class="profile-info--socials">
          <CoreSocialButtons socials="socials" />
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
    banner: {
      desktop: {
        default: '',
        type: String,
      },
      mobile: {
        default: '',
        type: String,
      },
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
    profile: {
      desktop: {
        default: '',
        type: String,
      },
      mobile: {
        default: '',
        type: String,
      },
    },
    runCount: {
      default: () => 42,
      type: Number,
    },
    socials: {
      default: () => [],
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
  height: 450px;
  max-height: 450px;
  position: relative;

  @apply flex flex-col;
  @apply max-w-screen-sm;
  @apply border border-current;
}

.profile-banner {
  height: 50%;
  min-height: 50%;

  @apply bg-cover bg-center bg-gray-900;
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
  @apply border border-current rounded;
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

.profile-info--user-activity,
.profile-info--user-badges {
  @apply p-4;
}

.profile-info--user-bio {
  @apply row-span-2;
  @apply px-4;
  @apply text-center;
}

.follow-button {
  @apply mx-4;
}
</style>
