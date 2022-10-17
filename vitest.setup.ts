import { config } from 'dotenv-safe'
import '@testing-library/jest-dom'
import createFetchMock from 'vitest-fetch-mock'
import { vi } from 'vitest'

const fetchMock = createFetchMock(vi)

config({ path: './.env.test' })

// // sets globalThis.fetch and globalThis.fetchMock to our mocked version
fetchMock.enableMocks()
