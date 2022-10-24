import createFetchMock from 'vitest-fetch-mock'
import { vi } from 'vitest'

// TODO: use this/ change this when we need to add environment variables into the tests
// import { config } from 'dotenv-safe'
// config({ path: '.env.test' })

const fetchMock = createFetchMock(vi)

// sets globalThis.fetch and globalThis.fetchMock to our mocked version
fetchMock.enableMocks()
