<script setup lang="ts">
import type { ComputedRef } from '#imports'
import { computed, navigateTo, useCurrentUser, useRoute } from '#imports'
import { createRef } from '@vueuse/core'
import Loader from '~/components/blocks/Loader/Loader.vue'
import BaseButton from '~/components/elements/buttons/BaseButton/BaseButton.vue'
import TimeInput from '~/components/elements/inputs/TimeInput/TimeInput.vue'
import { useGetCategoryBySlug, useGetLeaderboardBySlug } from '~/composables/api'
import useCreateRun from '~/composables/api/useCreateRun'
import type {
  CreateRunPayload,
  CreateScoredRunRequest,
  CreateTimedRunRequest,
  ProblemDetails,
  ValidationProblemDetails,
} from '~~/lib/api/data-contracts'

const {
  params: { slug },
  query: { cat },
} = useRoute()

const { data: user } = useCurrentUser()

const {
  loading,
  error: leaderboardError,
  data: board,
} = await useGetLeaderboardBySlug(slug as string)

const {
  loading: loadingCategory,
  error: categoryError,
  data: category,
} = board
  ? await useGetCategoryBySlug({ slug: cat as string, id: board.id })
  : {
      loading: false,
      // Since the error's on the board, we can return the board's error
      error: leaderboardError,
      data: null,
    }

const errorStatus = computed(() => {
  const status = leaderboardError?.status ?? 500
  if (status >= 400 && status < 500) {
    return 'Game not found.'
  }
  return 'An error occurred.'
})

const categoryErrorStatus = computed(() => {
  const status = categoryError?.status ?? 500
  if (status >= 400 && status < 500) {
    return 'Category not found.'
  }
  return 'An error occurred.'
})

const isAgreementChecked = createRef(false)
const hours = createRef<string | null>(null)
const minutes = createRef<string | null>(null)
const seconds = createRef<string | null>(null)
const millis = createRef<string | null>(null)
const isSubmitting = createRef(false)
const submissionError = createRef<ProblemDetails | null>(null)
const submissionValidationError = createRef<ValidationProblemDetails | null>(null)

const payload = computed<CreateRunPayload | null>(() => {
  if (category == null) {
    return null
  }
  return {
    $type: category.type,
    time: '',
    score: 0,
    playedOn: '',
    info: undefined,
  }
})

async function submit() {
  if (category == null || payload.value === null || isSubmitting.value) {
    return
  }

  submissionError.value = null
  submissionValidationError.value = null
  isSubmitting.value = true

  if (category.type === 'Time') {
    const { value } = payload as ComputedRef<CreateTimedRunRequest>
    value.time = `${[
      hours.value ?? '0',
      (minutes.value ?? '').padStart(2, '0'),
      (seconds.value ?? '').padStart(2, '0'),
    ].join(':')}.${(millis.value ?? '').padStart(3, '0')}`
  }

  console.log(payload.value)

  const { error, errors, data } = await useCreateRun(category.id, payload.value)

  isSubmitting.value = false
  submissionError.value = error
  submissionValidationError.value = errors

  if (data !== undefined) {
    navigateTo(`/run/${data.id}`)
  }
}

const submissionErrorMessage = computed(() => {
  if (submissionError.value === null) {
    return ''
  }
  const title = submissionError.value.title ? `: ${submissionError.value.title}` : ''
  return `${submissionError.value.status}${title}`
})
</script>

<template>
  <Loader v-if="loading || loadingCategory" />
  <div v-else-if="leaderboardError || board == null" class="bg-black p-6 text-white">
    {{ errorStatus }}
  </div>
  <div v-else-if="categoryError || category == null" class="bg-black p-6 text-white">
    {{ categoryErrorStatus }}
  </div>
  <div v-else>
    <div v-if="submissionError || submissionValidationError" class="flex flex-col gap-3">
      <span>Submission failed:</span>
      <ul class="list-disc list-inside">
        <li v-if="submissionError">
          {{ submissionErrorMessage }}
        </li>
        <li v-if="submissionValidationError">
          {{ submissionValidationError.status }}
        </li>
        <li v-for="(details, error) in submissionValidationError?.errors" :key="error">
          {{ error }}
          <ul
            v-for="detail in details"
            :key="`${error}.${detail}`"
            class="ml-4 list-disc list-inside"
          >
            <li>{{ detail }}</li>
          </ul>
        </li>
      </ul>
      <span> Please fix any errors listed and try again, or contact us for help. </span>
    </div>
    <div class="flex flex-col gap-6 bg-black p-6 text-white">
      <h1 class="text-lg">
        Submit
        <NuxtLink :to="`/game/${board.slug}#${category.slug}`"
          >{{ board.name }}: {{ category.name }}</NuxtLink
        >
      </h1>

      <div>
        <template v-if="board.deletedAt !== null">
          The leaderboard has been deleted, and no new runs can be submitted.
        </template>
        <template v-else-if="category.deletedAt !== null">
          The category has been deleted, and no new runs can be submitted.
        </template>
        <!-- If logged-out, `user` is an empty object, and *not* `undefined`. -->
        <template v-else-if="user?.id">
          <template v-if="user.role === 'Banned'"> You are banned </template>
          <template v-else-if="user.role === 'Registered'">
            You need to confirm your email first before submitting.
          </template>
          <template v-else-if="payload">
            <form
              autocomplete="on"
              class="max-w-screen-xl flex flex-col gap-3 p-6 mx-auto"
              @submit.prevent="submit"
            >
              <fieldset class="flex flex-col gap-1">
                <div class="flex gap-2">
                  <label for="played-on">Played On: </label>
                  <input
                    id="played-on"
                    v-model="payload.playedOn"
                    type="date"
                    required
                    class="flex-1 text-black px-2"
                  />
                </div>
                <p class="text-right italic">
                  This must be the date you made this run, and not the date you're submitting it.
                </p>
              </fieldset>
              <fieldset class="flex gap-2">
                <label :for="category.type === 'Score' ? 'score' : 'hours'"
                  >{{ category.type }}:</label
                >
                <input
                  v-if="category.type === 'Score'"
                  id="score"
                  v-model="(payload as CreateScoredRunRequest).score"
                  type="number"
                  required
                  class="flex-1 text-black px-2"
                />
                <TimeInput
                  v-else
                  v-model:hours="hours"
                  v-model:minutes="minutes"
                  v-model:seconds="seconds"
                  v-model:millis="millis"
                />
              </fieldset>
              <fieldset class="flex gap-2">
                <label for="info">Info (optional): </label>
                <textarea
                  id="info"
                  v-model="payload.info"
                  rows="5"
                  class="flex-1 text-black px-2"
                />
              </fieldset>
              <fieldset class="flex gap-2">
                <input
                  id="agreement"
                  v-model="isAgreementChecked"
                  type="checkbox"
                  required
                  class="text-black"
                />
                <label for="agreement"
                  >Submissions that violate the site rules may result in punishment including
                  removal of the submission and/or a ban from the website. Check this box if you
                  have read and agree with this.</label
                >
              </fieldset>
              <BaseButton type="submit" class="col-span-2">{{
                isSubmitting ? 'Submitting' : 'Submit'
              }}</BaseButton>
            </form>
          </template>
        </template>
        <template v-else>You must log in first before submitting.</template>
      </div>
    </div>
  </div>
</template>
