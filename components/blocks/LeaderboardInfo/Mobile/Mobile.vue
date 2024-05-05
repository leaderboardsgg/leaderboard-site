<script setup lang="ts">
import ButtonLink from 'elements/buttons/ButtonLink/ButtonLink.vue'
import FollowButton from 'elements/buttons/FollowButton/FollowButton.vue'
import Tag from 'elements/tags/Tag/Tag.vue'
import PlatformTags from '../PlatformTags/PlatformTags.vue'
import type { LeaderboardInfoProps } from '../LeaderboardInfo.vue'

interface Props extends LeaderboardInfoProps {
  todoPlatforms: string[]
}

const emit = defineEmits<{
  (event: 'follow'): void
}>()

defineProps<Props>()
</script>

<template>
  <div class="leaderboard-info">
    <!-- TODO: Do not provide defaults and instead return nothing if on production -->
    <div class="top">
      <div class="top__title" data-testid="title">
        {{ leaderboard.name || 'Game Name' }}
      </div>
      <div class="top__button-container">
        <FollowButton
          class="top__button top__button__follow"
          data-testid="top__button__follow"
          @follow="emit('follow')"
        />
        <ButtonLink
          class="top__button top__button__submit"
          data-testid="top__button__submit"
          to="#"
        >
          <span>Submit Run</span>
        </ButtonLink>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom__category-year">
        <Tag data-testid="tag">{{
          leaderboard.categories[0]?.name ?? 'TODO'
        }}</Tag>
        <span class="bottom__published-year">YEAR</span>
      </div>
      <PlatformTags :tags="todoPlatforms" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.leaderboard-info {
  @apply h-[fit-content] w-full relative;
  @apply flex flex-col gap-2;
  @apply border-gray-200 border-2 rounded;
  @apply p-4;

  & .top {
    @apply flex justify-between items-start;
  }

  & .top__title {
    @apply font-bold text-lg;
  }

  & .top__button-container {
    @apply flex gap-1;
  }

  & .top__button__submit {
    @apply bg-gray-100;
  }

  & .bottom {
    @apply flex justify-between items-center;
  }

  & .bottom__category-year {
    @apply flex gap-2 items-center text-sm;
  }
}
</style>
