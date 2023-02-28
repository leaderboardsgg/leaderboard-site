<template>
  <div class="profile-header">
    <div class="profile-banner">
      <img src="https://via.placeholder.com/885x120" alt="profile banner" />
    </div>
    <div class="profile-info-container">
      <div class="profile-info">
        <div class="profile-info__header">
          <UserActivity
            class="profile-header__user-activity"
            :game-count="gameCount"
            :run-count="runCount"
          />
          <div class="profile-info__picture-container">
            <img src="https://via.placeholder.com/120" alt="profile picture" />
          </div>
          <div class="profile-info__user-badges">
            <UserBadges :badges="badges" />
          </div>
        </div>
        <div class="profile-info__user-bio">
          <h1>{{ username }}</h1>
          <h2>{{ location }}</h2>
          <p>{{ bio }}</p>
        </div>
        <div class="profile-info__follow">
          <FollowButton />
        </div>
        <div class="profile-info__socials">
          <SocialButtons :socials="socials" />
        </div>
        <UserActivity
          class="profile-info__user-activity"
          :game-count="gameCount"
          :run-count="runCount"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UserActivity from '@/components/blocks/ProfileHeader/UserActivity/UserActivity.vue'
import UserBadges from '@/components/blocks/ProfileHeader/UserBadges/UserBadges.vue'
import SocialButtons from '@/components/elements/buttons/SocialButtons/SocialButtons.vue'
import FollowButton from '@/components/elements/buttons/FollowButton/FollowButton.vue'

export default defineComponent({
  name: 'ProfileHeader',
  components: {
    FollowButton,
    SocialButtons,
    UserActivity,
    UserBadges,
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
          icon: 'discord',
          name: 'Discord',
          url: 'https://discord.com/',
        },
        {
          icon: 'twitch',
          name: 'Twitch',
          url: 'https://twitch.tv/',
        },
        {
          icon: 'twitter',
          name: 'Twitter',
          url: 'https://twitter.com/',
        },
        {
          icon: 'youtube',
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
})
</script>

<style lang="postcss" scoped>
.profile-header {
  @apply h-[fit-content] min-h-[28.125rem] relative;

  @apply flex flex-col;
  @apply max-w-screen-md md:max-w-full md:min-h-0 md:h-auto;
  @apply border md:border-gray-300 md:rounded;

  & .profile-header__user-activity {
    @apply ml-[10px] mt-[5px];
  }

  & .profile-banner {
    @apply h-1/2 min-h-[50%];

    @apply md:h-auto md:min-h-0;
    @apply bg-cover bg-center bg-gray-900;
    @apply flex items-center justify-center overflow-hidden;

    & > img {
      @apply shrink-0 object-cover min-h-full min-w-full;
    }
  }

  & .profile-info-container {
    @apply absolute md:relative bg-transparent;
    @apply m-5 mb-0 md:m-0;

    & .profile-info {
      @apply mt-[3.75rem];
      @apply md:mt-0 md:px-4;

      @apply bg-white;
      @apply grid grid-cols-1 md:flex md:items-center;
      @apply border border-gray-300 rounded md:border-none;
      & .profile-info__header {
        @apply grid grid-rows-1 grid-cols-3 md:flex relative;
        & .profile-info__picture-container {
          @apply relative flex justify-center;
          & > img {
            @apply max-h-[7.5rem] max-w-[7.5rem];
            @apply drop-shadow-md;

            @apply absolute md:relative md:max-h-[5.125rem] md:max-w-[5.125rem] rounded -translate-y-1/2;
          }
        }
      }
      & .profile-info__socials {
        @apply p-4 pt-0;
      }
      & .profile-info__follow > .follow-button {
        @apply w-full md:px-5;
      }
      & .profile-info__follow,
      & .profile-info__user-activity,
      & .profile-info__user-badges {
        @apply p-4 md:pl-5 md:pr-0;
      }

      & .profile-info__user-activity {
        @apply md:grid-cols-2 md:gap-x-5;
        @apply hidden md:grid;
      }

      & .profile-info__user-bio {
        @apply mt-5 md:mt-0;
        @apply row-span-2;
        @apply px-4 md:pl-5 md:pr-0;
        @apply text-center;
      }
      & .profile-header__user-activity,
      & .profile-info__picture-container,
      & .profile-info__user-badges,
      & .profile-info__user-bio p {
        @apply md:hidden;
      }

      & .profile-info__user-bio {
        & h1 {
          @apply text-2xl font-semibold;
        }
        & h2 {
          @apply text-sm text-black text-opacity-50;
        }
        & p {
          @apply text-black text-opacity-50 pt-2;
        }
      }
    }
  }
}
</style>
