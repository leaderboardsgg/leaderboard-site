<script setup lang="ts">
import { useTemplateRef, watchEffect } from 'vue'

const hours = defineModel<string | null>('hours', { default: null })
const minutes = defineModel<string | null>('minutes', { default: null })
const seconds = defineModel<string | null>('seconds', { default: null })
const millis = defineModel<string | null>('millis', { default: null })

const minutesInput = useTemplateRef('minutesInput')
const secondsInput = useTemplateRef('secondsInput')
const millisInput = useTemplateRef('millisInput')

watchEffect(() => {
  if (hours.value !== null && hours.value.length > 0) {
    const [newHours, ...rest] = hours.value.split(':')
    hours.value = newHours?.replaceAll(/\D/g, '') || null
    if (rest.length > 0) {
      minutes.value = rest.join(':')
      minutesInput.value?.focus()
    }
  }
})
watchEffect(() => {
  if (minutes.value !== null && minutes.value.length > 0) {
    const [newMinutes, newSecondsAndMilis] = minutes.value.split(':')
    minutes.value = newMinutes?.replaceAll(/\D/g, '')?.slice(-2) || null
    if (newSecondsAndMilis !== undefined) {
      seconds.value = newSecondsAndMilis
      secondsInput.value?.focus()
    }
  }
})
watchEffect(() => {
  if (seconds.value !== null && seconds.value.length > 0) {
    const [newSeconds, newMillis] = seconds.value.split('.')
    if (newMillis !== undefined) {
      millis.value = newMillis
      millisInput.value?.focus()
    }
    seconds.value = newSeconds?.replaceAll(/\D/g, '')?.slice(-2) || null
  }
})
watchEffect(() => {
  if (millis.value !== null && millis.value.length > 0) {
    millis.value = millis.value.replaceAll(/\D/g, '') || null
  }
})

function onArrowKeysDown(input: 1 | -1, ref: 'hours' | 'minutes' | 'seconds' | 'millis') {
  switch (ref) {
    case 'hours': {
      if (hours.value === null) {
        hours.value = '0'
      } else {
        const parsed = parseInt(hours.value, 10) + input
        hours.value = Math.max(parsed, 0).toString(10)
      }
      break
    }
    case 'minutes': {
      if (minutes.value === null) {
        minutes.value = '0'
      } else {
        const parsed = parseInt(minutes.value, 10) + input
        // If the input already has exceeded 60 (59 + 1), allow ourselves to increase to 99
        // Otherwise, clamp it to 59
        minutes.value = Math.min(Math.max(parsed, 0), parsed > 60 ? 99 : 59).toString(10)
      }
      break
    }
    case 'seconds': {
      if (seconds.value === null) {
        seconds.value = '0'
      } else {
        // Ditto
        const parsed = parseInt(seconds.value, 10) + input
        seconds.value = Math.min(Math.max(parsed, 0), parsed > 60 ? 99 : 59).toString(10)
      }
      break
    }
    case 'millis': {
      if (millis.value === null) {
        millis.value = '0'
      } else {
        const parsed = parseInt(millis.value, 10) + input
        millis.value = Math.min(Math.max(parsed, 0), 999).toString(10)
      }
      break
    }
  }
}
</script>

<template>
  <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
    <div class="flex gap-2">
      <input
        id="hours"
        v-model="hours"
        type="text"
        class="min-w-1 flex-1 text-black"
        @keydown.arrow-up="onArrowKeysDown(1, 'hours')"
        @keydown.arrow-down="onArrowKeysDown(-1, 'hours')"
      />
      <label for="hours">h</label>
    </div>
    <div class="flex gap-2">
      <input
        id="minutes"
        ref="minutesInput"
        v-model="minutes"
        type="text"
        class="min-w-1 flex-1 text-black"
        @keydown.arrow-up="onArrowKeysDown(1, 'minutes')"
        @keydown.arrow-down="onArrowKeysDown(-1, 'minutes')"
      />
      <label for="minutes">m</label>
    </div>
    <div class="flex gap-2">
      <input
        id="seconds"
        ref="secondsInput"
        v-model="seconds"
        type="text"
        class="min-w-1 flex-1 text-black"
        @keydown.arrow-up="onArrowKeysDown(1, 'seconds')"
        @keydown.arrow-down="onArrowKeysDown(-1, 'seconds')"
      />
      <label for="seconds">s</label>
    </div>
    <div class="flex gap-2">
      <input
        id="millis"
        ref="millisInput"
        v-model="millis"
        type="text"
        class="min-w-1 flex-1 text-black"
        maxlength="3"
        @keydown.arrow-up="onArrowKeysDown(1, 'millis')"
        @keydown.arrow-down="onArrowKeysDown(-1, 'millis')"
      />
      <label for="millis">ms</label>
    </div>
  </div>
</template>
