<script setup lang="ts">
import ButtonLink from 'elements/buttons/ButtonLink/ButtonLink.vue'
import DropDown from 'elements/buttons/DropDown/DropDown.vue'
import DropDownContent from 'elements/buttons/DropDown/DropDownContent.vue'
import DropDownItem from 'elements/buttons/DropDown/DropDownItem.vue'
import FollowButton from 'elements/buttons/FollowButton/FollowButton.vue'
import SocialButtons from 'elements/buttons/SocialButtons/SocialButtons.vue'
import Tag from 'elements/tags/Tag/Tag.vue'
import PlatformTags from '../PlatformTags/PlatformTags.vue'
import type { LeaderboardInfoProps } from '../LeaderboardInfo.vue'

interface Props extends LeaderboardInfoProps {
  todoPlatforms: string[]
  onClick: () => void
  socials: Socials[]
}

defineProps<Props>()
</script>

<template>
  <div class="leaderboard-info">
    <!-- TODO: Do not provide defaults and instead return nothing if on production -->
    <div class="title">{{ leaderboard.name || 'Game Name' }}</div>
    <div class="middle">
      <img src="https://via.placeholder.com/220x220" alt="game-art" />
      <Tag>{{ leaderboard.categories[0] ?? 'TODO' }}</Tag>
      <span class="middle__published-year">YEAR</span>
      <PlatformTags :tags="todoPlatforms" />
      <FollowButton
        class="middle__follow"
        data-testid="middle__follow"
        :on-click="onClick"
      />
    </div>
    <div class="bottom">
      <ButtonLink class="bottom__button" to="#">
        <i-svg-book />
        <span>Guides</span>
      </ButtonLink>
      <ButtonLink class="bottom__button" to="#">
        <i-svg-link />
        <div>Resources</div>
      </ButtonLink>
      <DropDown class="bottom__button">
        <DropDownContent>
          <DropDownItem>First</DropDownItem>
          <DropDownItem>Second</DropDownItem>
          <DropDownItem>Third</DropDownItem>
        </DropDownContent>
      </DropDown>
      <SocialButtons :socials="socials" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.leaderboard-info {
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

    & .bottom__button,
    & :deep(button.bottom__button) {
      @apply w-full flex flex-row place-content-center gap-2 hover:bg-gray-100;
      @apply md:mr-1 md:my-1 md:p-1;
      @apply border-gray-200 border-2 rounded;
    }
  }
}
</style>
