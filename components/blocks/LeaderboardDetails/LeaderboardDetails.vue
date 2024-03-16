<script setup lang="ts">
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
import FollowButton from 'elements/buttons/FollowButton/FollowButton.vue'
import SocialButtons from 'elements/buttons/SocialButtons/SocialButtons.vue'
import PlatformTags from './PlatformTags.vue'
import Tag from 'elements/tags/Tag/tag.vue'
import type { LeaderboardViewModel } from 'lib/api/data-contracts'

interface LeaderboardDetailProps {
  leaderboardDetail: LeaderboardViewModel
}

const todoPlatforms = ['PS4', 'PC', 'XboxSeriesX']

const onFollow = () => {
  // TODO: Trigger follow leaderboard flow
}

const onToggleMore = () => {
  // TODO: Open the dropdown
}

// TODO: Get actual links tied to the leaderboard
const socials: Socials[] = [
  {
    icon: 'twitch',
    name: 'Twitch',
    url: 'https://twitch.tv',
  },
  {
    icon: 'youtube', // TODO: Add a globe SVG. Maybe from Icons8
    name: 'Socials',
    url: 'https://example.com',
  },
  {
    icon: 'discord',
    name: 'Discord',
    url: 'https://discord.gg',
  },
]

defineProps<LeaderboardDetailProps>()
</script>

<template>
  <div class="leaderboard-details">
    <div class="title">{{ leaderboardDetail.name }}</div>
    <div class="middle">
      <img src="https://via.placeholder.com/220x220" alt="game-art" />
      <Tag>{{ leaderboardDetail.categories[0] ?? 'TODO' }}</Tag>
      <span class="middle__published-year">TODO</span>
      <PlatformTags :tags="todoPlatforms" />
      <FollowButton class="middle__follow" :on-click="onFollow" />
    </div>
    <div class="bottom">
      <BaseButton class="bottom__button" to="">
        <i-svg-menu />
        <span>Guides</span>
      </BaseButton>
      <BaseButton class="bottom__button" to="">
        <i-svg-menu />
        <div>Resources</div>
      </BaseButton>
      <BaseButton class="bottom__button" @click="onToggleMore">
        <div>More &or;</div>
      </BaseButton>
      <SocialButtons :socials="socials" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.leaderboard-details {
  @apply h-[fit-content] min-h-[28.125rem] w-[fit-content] relative;
  @apply flex flex-col items-center;
  @apply border-gray-200 border-2 rounded;

  & .title {
    @apply w-full text-center;
    @apply font-bold text-lg md:p-3;
    @apply border-b-gray-200 border-b-2;
  }

  & .middle {
    @apply md:m-4;
    @apply flex flex-col items-center;
    @apply border-b-gray-200 border-b-2;

    & .middle__published-year {
      @apply text-sm;
    }

    & .middle__follow {
      @apply md:m-4;
    }
  }

  & .bottom {
    @apply md:w-full md:p-4;

    & .bottom__button {
      @apply w-full flex flex-row place-content-center gap-2 hover:bg-gray-100;
      @apply md:mr-1 md:my-1 md:p-1;
      @apply border-gray-200 border-2 rounded;
    }
  }
}
</style>
