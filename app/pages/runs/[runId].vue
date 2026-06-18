<script setup lang="ts">
import { ref, useRoute } from '#imports'
import BaseTooltip from '~/components/elements/modals/BaseTooltip/BaseTooltip.vue'
import { useGetRun } from '~/composables/api'
import type { TimedRunViewModel, ScoredRunViewModel } from '~~/lib/api/data-contracts'

const run = ref<TimedRunViewModel | ScoredRunViewModel | null>(null)

const route = useRoute()
const userId = route.params.runId as string

await useGetRun(userId, {
  onOkay: (validResponse) => {
    run.value = {
      ...validResponse,
      // TEMP NAMES MAY CHANGE
      leaderboardName: 'Super Mario World',
      categoryName: 'SixSeven%',
      leaderboardSlug: 'smw',
      categorySlug: 'all-castles',
    }
  },
})
</script>

<template>
  <div class="mt-8">
    <div v-if="run" class="flex flex-col items-center">
      <h1 class="text-xl">
        <span>Run of </span>
        <NuxtLink :to="`/game/${run.leaderboardSlug}`">{{ run.leaderboardName }}</NuxtLink>
        <span> by </span>

        <NuxtLink v-if="run.user.role !== 'Banned'" :to="`/user/${run.user.id}`">
          {{ run.user.username }}
        </NuxtLink>
        <BaseTooltip v-else :tooltip-id="'tooltip-banned-user'">
          <template v-slot:component>
            <span class="text-opacity-30 line-through">{{ run.user.username }}</span>
          </template>
          <template v-slot:tooltip> This user is banned.</template>
        </BaseTooltip>
      </h1>

      <template v-if="'time' in run">
        <p class="text-2xl">
          <NuxtLink :to="`/game/${run.leaderboardSlug}#${run.categorySlug}`">
            {{ run.categoryName }}
          </NuxtLink>
          in
          <span> {{ run.time }}</span>
        </p>
      </template>

      <template v-else>
        <p class="text-2xl">
          <span>
            {{ run.categoryName }}
          </span>
          <span> finished with a score of: </span>
          <span> {{ run.score }} </span>
        </p>
      </template>
    </div>

    <div v-else class="flex flex-col items-center">
      <p>
        ERROR: The run you have navigated to either doesn't exist, was deleted, or some error has
        occurred.
      </p>
    </div>
  </div>
</template>
