import { defineNuxtPlugin } from '#imports'
import { worker } from '../mocks/browser'

export default defineNuxtPlugin(() => {
  worker.start()
})
