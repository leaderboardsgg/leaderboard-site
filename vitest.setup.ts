// import { config } from 'dotenv-safe'
import '@testing-library/jest-dom'
import createFetchMock from 'vitest-fetch-mock'
import { vi } from 'vitest'
// import { fileURLToPath } from 'node:url'
// import { setup } from '@nuxt/test-utils'

// import { createTestContext } from '@nuxt/test-utils'
// import Config from './nuxt.config'

// createTestContext({
//   // runner: 'vitest',
//   // // browser: true,
//   // server: true,
//   // build: true,
//   // rootDir: './',
// })
// useTestContext()

// await setup({
//   rootDir: fileURLToPath(new URL('./', import.meta.url)),
//   server: true,
//   runner: 'vitest',
//   logLevel: 2,
// })

const fetchMock = createFetchMock(vi)

// config({ path: './.env' })

// // sets globalThis.fetch and globalThis.fetchMock to our mocked version
fetchMock.enableMocks()
