import { defineNuxtPlugin } from '#imports'
import { server } from '../mocks/server'

export default defineNuxtPlugin(() => {
  server.listen()
})
