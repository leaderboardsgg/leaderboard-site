<script setup lang="ts">
import BaseButton from 'elements/buttons/BaseButton/BaseButton.vue'
import DropDown from 'elements/buttons/DropDown/DropDown.vue'
import DropDownContent from 'elements/buttons/DropDown/DropDownContent.vue'
import DropDownItem from 'elements/buttons/DropDown/DropDownItem.vue'
import FollowButton from 'elements/buttons/FollowButton/FollowButton.vue'
import SocialButtons from 'elements/buttons/SocialButtons/SocialButtons.vue'
import Tag from 'elements/tags/Tag/Tag.vue'
import PlatformTags from './PlatformTags/PlatformTags.vue'
import type { LeaderboardViewModel } from 'lib/api/data-contracts'

interface LeaderboardDetailProps {
  leaderboardDetail: LeaderboardViewModel
}

// TODO: Remove this. Get from model instead.
const todoPlatforms = ['PS4', 'PC', 'XboxSeriesX']

// TODO: Implement listeners
const emit = defineEmits<{
  (event: 'follow', leaderboardId: number): void
}>()

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
      <FollowButton
        class="middle__follow"
        data-testid="middle__follow"
        :on-click="() => emit('follow', leaderboardDetail.id)"
      />
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
      <DropDown class="bottom__button">
        <template #toggler>
          <span>More v</span>
        </template>
        <DropDownContent>
          <DropDownItem>
            <div class="w-full text-center">First</div>
          </DropDownItem>
          <DropDownItem>Second</DropDownItem>
          <DropDownItem>Third</DropDownItem>
        </DropDownContent>
      </DropDown>
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
