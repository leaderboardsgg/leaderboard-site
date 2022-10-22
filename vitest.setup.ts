import createFetchMock from 'vitest-fetch-mock'
import { vi } from 'vitest'
// import { config } from 'dotenv-safe'

// config({ path: '.env.test' })

const fetchMock = createFetchMock(vi)

// sets globalThis.fetch and globalThis.fetchMock to our mocked version
fetchMock.enableMocks()
