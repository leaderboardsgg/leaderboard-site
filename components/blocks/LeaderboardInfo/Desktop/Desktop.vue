<script setup lang="ts">
import ButtonLink from 'elements/buttons/ButtonLink/ButtonLink.vue'
import Dropdown from 'elements/buttons/Dropdown/Dropdown.vue'
import DropdownItem from 'elements/buttons/Dropdown/DropdownItem.vue'
import FollowButton from 'elements/buttons/FollowButton/FollowButton.vue'
import SocialButtons from 'elements/buttons/SocialButtons/SocialButtons.vue'
import Tag from 'elements/tags/Tag/Tag.vue'
import PlatformTags from '../PlatformTags/PlatformTags.vue'
import type { LeaderboardInfoProps } from '../LeaderboardInfo.vue'

interface Props extends LeaderboardInfoProps {
  todoPlatforms: string[]
  onClick: () => void
}

// TODO: Get actual links tied to the leaderboard
const socials: Socials[] = [
  {
    icon: 'twitch',
    name: 'Twitch',
    url: 'https://twitch.tv',
  },
  {
    icon: 'globe',
    name: 'Site',
    url: '#',
  },
  {
    icon: 'discord',
    name: 'Discord',
    url: 'https://discord.gg',
  },
  {
    icon: 'message',
    name: 'Message',
    url: '#',
  },
]

defineProps<Props>()
</script>

<template>
  <div class="leaderboard-info">
    <!-- TODO: Do not provide defaults and instead return nothing if on production -->
    <div class="title">{{ leaderboard.name || 'Game Name' }}</div>
    <div class="body">
      <img
        src="https://via.placeholder.com/220x220"
        alt="game-art"
        class="body__game-art"
      />
      <Tag>{{ leaderboard.categories[0] ?? 'TODO' }}</Tag>
      <span class="body__published-year">YEAR</span>
      <PlatformTags :tags="todoPlatforms" />
      <FollowButton
        class="body__follow"
        data-testid="body__follow"
        :on-click="onClick"
      />
      <div class="body__divider" />
      <div class="body__internal-link-buttons">
        <ButtonLink class="body__internal-link-buttons__button" to="#">
          <i-svg-book />
          <span>Guides</span>
        </ButtonLink>
        <ButtonLink class="body__internal-link-buttons__button" to="#">
          <i-svg-link />
          <div>Resources</div>
        </ButtonLink>
        <Dropdown class-name="body__internal-link-buttons__button">
          <DropdownItem>First</DropdownItem>
          <DropdownItem>Second</DropdownItem>
          <DropdownItem>Third</DropdownItem>
        </Dropdown>
      </div>
      <SocialButtons :socials="socials" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.icon {
  @apply w-2;
}

.leaderboard-info {
  @apply h-[fit-content] min-h-[28.125rem] w-[fit-content] relative;
  @apply flex flex-col items-center;
  @apply border-gray-300 border rounded;

  & .title {
    @apply w-full text-center;
    @apply font-bold text-lg p-3;
    @apply border-b-gray-200 border-b-2;
  }

  & .body {
    @apply m-4;
    @apply flex flex-col items-center gap-1;

    & .body__game-art {
      @apply my-1 px-8;
    }

    & .body__published-year {
      @apply text-sm;
    }

    & .body__follow {
      @apply mt-3;
    }

    & .body__divider {
      @apply border-b border-gray-300 w-full my-3;
    }

    & .body__internal-link-buttons {
      @apply w-full flex flex-col mb-4 gap-2;

      & .body__internal-link-buttons__button {
        @apply w-full flex justify-center items-center gap-2 bg-white hover:bg-gray-100;
        @apply border-gray-200 border-2 rounded;
      }

      & :deep(.body__internal-link-buttons__button) {
        @apply w-full bg-white hover:bg-gray-100;
        @apply border-gray-200 border-2 rounded;
      }
    }
  }
}
</style>
elements/buttons/Dropdown/Dropdown.vueelements/buttons/Dropdown/DropdownItem.vue
